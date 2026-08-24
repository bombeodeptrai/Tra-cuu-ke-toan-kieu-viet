Stop-Service -Name "Autodesk Access Service Host" -Force -ErrorAction SilentlyContinue
Set-Service -Name "Autodesk Access Service Host" -StartupType Disabled -ErrorAction SilentlyContinue
Stop-Process -Name "AdskAccessServiceHost" -Force -ErrorAction SilentlyContinue
Stop-Process -Name "odis" -Force -ErrorAction SilentlyContinue
Stop-Process -Name "setup" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "C:\Users\HUY\AppData\Local\Temp\odis_download_dest" -Recurse -Force -ErrorAction SilentlyContinue
