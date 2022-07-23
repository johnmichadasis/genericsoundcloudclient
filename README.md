# About
genericsoundcloudclient is the most basic client for soundcloud you can find. it's electron that runs soundcloud.com

# Windows
Make sure you have node and npm installed from "nodejs.org"
Open the Command Prompt as Administrator
run FIRSTTIMESETUP.bat from the Administrative Command Prompt and wait for it to finish.
run CONSOLELAUNCH.bat to ensure that it's running with no errors that break the program.
run LAUNCH.vbs normally from Windows Explorer.

# Linux
Go to releases and click on the latest 
Download the AppImage
Make sure that it is executable.
On most Linux distros, you can right click on the AppImage, go to permissions and tick 'Allow executing as a program'

If you can't do that;
move the AppImage to the desktop,
open the terminal in the desktop folder
run chmod a+x soundcloud-x-x-x.Appimage (replace the x with the version you downloaded) 

# Any operating system with a terminal
In order to launch this you need to have node and npm installed. (from nodejs.org)
When you have them downloaded, open the terminal and run:
-- npm i -g electron .
After running that, run 
-- npm i .
After all that, type in your terminal
-- npm start
and hope that it launches.

# Credits
rgnd for windows and readme help,
michh for linux dev,
icon: https://findicons.com/icon/554919/soundcloud

# Legal
This program is not associated with the platform Soundcloud, nor the company Soundcloud. This program is unofficial and comes at your own risk of use.
This program provides NO WARRANTY. Any problem you have does not guarantee an easy fix, and do not expect help from somebody if no one wants to help.
