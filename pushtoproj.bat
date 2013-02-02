set PROJNAME=tptelements
set XAMPPDIR=C:\xampp\htdocs
cd ..
xcopy %PROJNAME% %XAMPPDIR%\proj\%PROJNAME%\ /E /D /Y
pause