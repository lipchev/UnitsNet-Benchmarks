BenchmarkDotNetVersion <- "BenchmarkDotNet v0.13.0 "
dir.create(Sys.getenv("R_LIBS_USER"), recursive = TRUE, showWarnings = FALSE)
list.of.packages <- c("ggplot2", "dplyr", "gdata", "tidyr", "grid", "gridExtra", "Rcpp", "R.devices")
new.packages <- list.of.packages[!(list.of.packages %in% installed.packages()[,"Package"])]
if(length(new.packages)) install.packages(new.packages, lib = Sys.getenv("R_LIBS_USER"), repos = "https://cran.rstudio.com/")
library(ggplot2)
library(dplyr)
library(gdata)
library(tidyr)
library(grid)
library(gridExtra)
library(R.devices)

isEmpty <- function(val){
   is.null(val) | val == ""
}

createPrefix <- function(params){ 
   separator <- "-"
   values <- params[!isEmpty(params)]
   paste(replace(values, TRUE, paste0(separator, values)), collapse = "")
}

ends_with <- function(vars, match, ignore.case = TRUE) {
  if (ignore.case)
    match <- tolower(match)
  n <- nchar(match)

  if (ignore.case)
    vars <- tolower(vars)
  length <- nchar(vars)

  substr(vars, pmax(1, length - n + 1), length) == match
}
std.error <- function(x) sqrt(var(x)/length(x))
cummean <- function(x) cumsum(x)/(1:length(x))
BenchmarkDotNetVersionGrob <- textGrob(BenchmarkDotNetVersion, gp = gpar(fontface=3, fontsize=10), hjust=1, x=1)
nicePlot <- function(p) grid.arrange(p, bottom = BenchmarkDotNetVersionGrob)
printNice <- function(p) {} # print(nicePlot(p))
ggsaveNice <- function(fileName, p, ...) {
  cat(paste0("*** Plot: ", fileName, " ***\n"))
  # See https://stackoverflow.com/a/51655831/184842
  suppressGraphics(ggsave(fileName, plot = nicePlot(p), ...))
  cat("------------------------------\n")
}

args <- commandArgs(trailingOnly = TRUE)
files <- if (length(args) > 0) args else list.files()[list.files() %>% ends_with("-measurements.csv")]
for (file in files) {
  title <- gsub("-measurements.csv", "", basename(file))
  measurements <- read.csv(file, sep = ",")

  result <- measurements %>% filter(Measurement_IterationStage == "Result")
  if (nrow(result[is.na(result$Job_Runtime),]) > 0)
    result[is.na(result$Job_Runtime),]$Job_Runtime <- ""
  if (nrow(result[is.na(result$Params),]) > 0) {
    result[is.na(result$Params),]$Params <- ""
  } else {
    result$Job_Runtime <- trim(paste(result$Job_Runtime, result$Params))
  }
  result$Job_Runtime <- factor(result$Job_Runtime, levels = unique(result$Job_Runtime))

  timeUnit <- "ns"
  if (min(result$Measurement_Value) > 1000) {
    result$Measurement_Value <- result$Measurement_Value / 1000
    timeUnit <- "us"
  }
  if (min(result$Measurement_Value) > 1000) {
    result$Measurement_Value <- result$Measurement_Value / 1000
    timeUnit <- "ms"
  }
  if (min(result$Measurement_Value) > 1000) {
    result$Measurement_Value <- result$Measurement_Value / 1000
    timeUnit <- "sec"
  }

  resultStats <- result %>%
    group_by_(.dots = c("Target_Method", "Job_Runtime")) %>%
    summarise(se = std.error(Measurement_Value), Value = mean(Measurement_Value))

  benchmarkBoxplot <- ggplot(result, aes(x=Target_Method, y=Measurement_Value, fill=Job_Runtime)) + theme(plot.title = element_text(size=8)) + theme(axis.title.x = element_text(size=7)) + theme(axis.title.y = element_text(size=7)) + theme(legend.title = element_text(size=8)) + theme(legend.text = element_text(size=6)) +
    guides(fill=guide_legend(title="Job")) +
    xlab("Target") +
    ylab(paste("Time,", timeUnit)) +
    ggtitle(title) + theme(axis.text.x = element_text(size=6))+ theme(axis.text.y = element_text(size=5, angle=30)) + coord_flip() +
    geom_boxplot()
  benchmarkBarplot <- ggplot(resultStats, aes(x=Target_Method, y=Value, fill=Job_Runtime)) + theme(plot.title = element_text(size=8)) + theme(axis.title.x = element_text(size=7)) + theme(axis.title.y = element_text(size=7)) + theme(legend.title = element_text(size=8)) + theme(legend.text = element_text(size=6)) +
    guides(fill=guide_legend(title="Job")) +
    xlab("Target") +
    ylab(paste("Time,", timeUnit)) +
    ggtitle(title) + theme(axis.text.x = element_text(size=6))+ theme(axis.text.y = element_text(size=5, angle=30)) + coord_flip() +
    geom_bar(position=position_dodge(), stat="identity")
    #geom_errorbar(aes(ymin=Value-1.96*se, ymax=Value+1.96*se), width=.2, position=position_dodge(.9))

  printNice(benchmarkBoxplot)
  printNice(benchmarkBarplot)
  ggsaveNice(gsub("-measurements.csv", "-boxplot.png", file), benchmarkBoxplot)
  ggsaveNice(gsub("-measurements.csv", "-barplot.png", file), benchmarkBarplot)

  for (target in unique(result$Target_Method)) {
    df <- result %>% filter(Target_Method == target)
    df$Launch <- factor(df$Measurement_LaunchIndex)
    df <- df %>% group_by(Job_Runtime, Launch) %>% mutate(cm = cummean(Measurement_Value))

    densityPlot <- ggplot(df, aes(x=Measurement_Value, fill=Job_Runtime)) + theme(plot.title = element_text(size=8)) + theme(axis.title.x = element_text(size=7)) + theme(axis.title.y = element_text(size=7)) + theme(legend.title = element_text(size=8)) + theme(legend.text = element_text(size=6)) +
      ggtitle(paste(title, "/", target)) +
      xlab(paste("Time,", timeUnit)) +
      geom_density(alpha=.5, bw="SJ")
    printNice(densityPlot)
    ggsaveNice(gsub("-measurements.csv", paste0("-", target, "-density.png"), file), densityPlot)

    facetDensityPlot <- densityPlot + facet_wrap(~Job_Runtime)
    printNice(facetDensityPlot)
    ggsaveNice(gsub("-measurements.csv", paste0("-", target, "-facetDensity.png"), file), facetDensityPlot)

    for (params in unique(df$Params)) {
      paramsDf <- df %>% filter(Params == params)
      paramsDensityPlot <- ggplot(paramsDf, aes(x=Measurement_Value, fill=Job_Runtime)) + theme(plot.title = element_text(size=8)) + theme(axis.title.x = element_text(size=7)) + theme(axis.title.y = element_text(size=7)) + theme(legend.title = element_text(size=8)) + theme(legend.text = element_text(size=6)) +
        ggtitle(paste(title, "/", target, "/", params)) +
        xlab(paste("Time,", timeUnit)) +
        geom_density(alpha=.5, bw="SJ")
      printNice(paramsDensityPlot)
      prefix <- createPrefix(c(target,params))
      ggsaveNice(gsub("-measurements.csv", paste0(prefix, "-density.png"), file), paramsDensityPlot)

      paramsFacetDensityPlot <- paramsDensityPlot + facet_wrap(~Job_Runtime)
      printNice(paramsFacetDensityPlot)
      ggsaveNice(gsub("-measurements.csv", paste0(prefix, "-facetDensity.png"), file), paramsFacetDensityPlot)
    }

    for (job in unique(df$Job_Runtime)) {
      jobDf <- df %>% filter(Job_Runtime == job)
      timelinePlot <- ggplot(jobDf, aes(x = Measurement_IterationIndex, y=Measurement_Value, group=Launch, color=Launch)) + theme(plot.title = element_text(size=8)) + theme(axis.title.x = element_text(size=7)) + theme(axis.title.y = element_text(size=7)) + theme(legend.title = element_text(size=8)) + theme(legend.text = element_text(size=6)) +
        ggtitle(paste(title, "/", target, "/", job)) +
        xlab("IterationIndex") +
        ylab(paste("Time,", timeUnit)) +
        geom_line() +
        geom_point()
      printNice(timelinePlot)
      ggsaveNice(gsub("-measurements.csv", paste0("-", target, "-", job, "-timeline.png"), file), timelinePlot)
      timelinePlotSmooth <- timelinePlot + geom_smooth()
      printNice(timelinePlotSmooth)
      ggsaveNice(gsub("-measurements.csv", paste0("-", target, "-", job, "-timelineSmooth.png"), file), timelinePlotSmooth)

      cummeanPlot <- ggplot(jobDf, aes(x = Measurement_IterationIndex, y=cm, group=Launch, color=Launch)) + theme(plot.title = element_text(size=8)) + theme(axis.title.x = element_text(size=7)) + theme(axis.title.y = element_text(size=7)) + theme(legend.title = element_text(size=8)) + theme(legend.text = element_text(size=6)) +
        ggtitle(paste(title, "/", target, "/", job)) +
        xlab("IterationIndex") +
        ylab(paste("Cumulative mean time,", timeUnit)) +
        geom_line() +
        geom_point()
      printNice(cummeanPlot)
      ggsaveNice(gsub("-measurements.csv", paste0("-", target, "-", job, "-cummean.png"), file), cummeanPlot)


      densityPlotJob <- ggplot(jobDf, aes(x=Measurement_Value, fill="red")) + theme(plot.title = element_text(size=8)) + theme(axis.title.x = element_text(size=7)) + theme(axis.title.y = element_text(size=7)) + theme(legend.title = element_text(size=8)) + theme(legend.text = element_text(size=6)) +
        ggtitle(paste(title, "/", target, "/", job)) +
        xlab(paste("Time,", timeUnit)) +
        geom_density(alpha=.5, bw="SJ")
      printNice(densityPlotJob)
      ggsaveNice(gsub("-measurements.csv", paste0("-", target, "-", job, "-density.png"), file), densityPlotJob)
    }

    timelinePlot <- ggplot(df, aes(x = Measurement_IterationIndex, y=Measurement_Value, group=Launch, color=Launch)) + theme(plot.title = element_text(size=8)) + theme(axis.title.x = element_text(size=7)) + theme(axis.title.y = element_text(size=7)) + theme(legend.title = element_text(size=8)) + theme(legend.text = element_text(size=6)) +
      ggtitle(paste(title, "/", target)) +
      xlab("IterationIndex") +
      ylab(paste("Time,", timeUnit)) +
      geom_line() +
      geom_point() +
      facet_wrap(~Job_Runtime)
    printNice(timelinePlot)
    ggsaveNice(gsub("-measurements.csv", paste0("-", target, "-facetTimeline.png"), file), timelinePlot)
    timelinePlotSmooth <- timelinePlot + geom_smooth()
    printNice(timelinePlotSmooth)
    ggsaveNice(gsub("-measurements.csv", paste0("-", target, "-facetTimelineSmooth.png"), file), timelinePlotSmooth)

    facetCummeanPlot <- ggplot(df, aes(x = Measurement_IterationIndex, y=cm, group=Launch, color=Launch)) + theme(plot.title = element_text(size=8)) + theme(axis.title.x = element_text(size=7)) + theme(axis.title.y = element_text(size=7)) + theme(legend.title = element_text(size=8)) + theme(legend.text = element_text(size=6)) +
      ggtitle(paste(title, "/", target)) +
      xlab("IterationIndex") +
      ylab(paste("Cumulative mean time,", timeUnit)) +
      geom_line() +
      geom_point() +
      facet_wrap(~Job_Runtime)
    printNice(facetCummeanPlot)
    ggsaveNice(gsub("-measurements.csv", paste0("-", target, "-cummean.png"), file), facetCummeanPlot)
  }
}
