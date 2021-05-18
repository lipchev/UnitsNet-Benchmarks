@echo off
SET newsize=theme(plot.title = element_text(size=8)) + theme(axis.title.x = element_text(size=7)) + theme(axis.title.y = element_text(size=7)) + theme(legend.title = element_text(size=8)) + theme(legend.text = element_text(size=6))
SET old-job='fill=Job_Id))'
SET new-job='fill=Job_Id)) + %newsize%'
SET old-iter='color=Launch))'
SET new-iter='color=Launch)) + %newsize%'
SET old-density='fill=\"red\"))'
SET new-density='fill=\"red\")) + %newsize%'
SET old-summary='ggtitle(title)'
SET new-summary='ggtitle(title) + theme(axis.text.x = element_text(size=6))+ theme(axis.text.y = element_text(size=5, angle=30)) + coord_flip()'
SET job-id='Job_Id'
SET runtime='Job_Runtime'
powershell "(Get-Content %1).replace(%old-job%, %new-job%).replace(%old-iter%, %new-iter%).replace(%old-density%, %new-density%).replace(%old-summary%, %new-summary%).replace(%job-id%, %runtime%) | Out-File -encoding ASCII %2"