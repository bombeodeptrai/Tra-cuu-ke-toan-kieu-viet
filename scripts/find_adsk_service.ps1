Get-Service | Where-Object { $_.Name -match 'Autodesk' -or $_.DisplayName -match 'Autodesk' } | Select-Object Name, Status | ConvertTo-Json
