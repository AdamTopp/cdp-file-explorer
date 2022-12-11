# CD Project RED - File explorer
 
![image](https://user-images.githubusercontent.com/90351456/206913940-8558bdc1-0cff-48ab-9b43-abb5bfb914b4.png)

Application allows for the traversal of files and folders on our local machine

# Technical requirements:

+ Use package manager of your choice - ✔️ (NPM)
+ Use latest Electron version - ✔️
+ Use latest TypeScript with correct typings - ✔️
+ Use latest React - ✔️
+ Use latest Webpack with configured tree shaking - ✔️
+ Use latest ESLint with rule set of your choice. Use latest Prettier. Configure both 
ESLint and Prettier to auto-format code on file save in VS Code - ✔️
+ Use stylesheet management system of your choice (for example Emotion CSS, 
SASS or even plain CSS is allowed) - ✔️ (Styled components)
+ In package.json provide two scripts: dev (launching the app with file watcher 
and hot reload) and dist (packing the app for the distribution). The distributed 
package doesn't have to be an installer, it can be a directory with loose files. 
Packaged distribution should target Windows ✔️ (npm run dev and npm run dist)
+ You can use open-source UI frameworks of your choice, but you can also prepare 
the UI from scratch ✔️ (Material UI)

# User scenarios:
+ I want the title bar to be consistent with the rest of UI, so it cannot be Electron's default one ✔️
+ I want to navigate backwards/forwards using buttons ✔️
+ I want to minimize/maximize/close the application using buttons on title bar ✔️
+ I want to have a two-panel view. Left panel should contain a static list of common locations (Desktop / Downloads / Documents) ✔️
+ I want to see the list of folders and files in the right panel. Each item should have an icon indicating if it's a folder or a file ✔️
+ I want to double-click a folder on right panel to navigate to its contents ✔️
+ I want to double-click a file on right panel to open it in the default program (for example text files in Notepad etc) ✔️
+ I want the list of files on right panel to refresh automatically in the background with 5 second interval. For example, when I delete a file from Downloads folder (using Windows Explorer), I want the app to reflect that change ✔️

# Functionalities added by me:
+ Displaying current location path - click and copy it!
![image](https://user-images.githubusercontent.com/90351456/206914685-1d4e3b1f-3cc6-4cf6-9b5c-40dd7b6e1fe2.png)

+ Going to the parent folder
![image](https://user-images.githubusercontent.com/90351456/206914773-191e63ab-5fb9-4f3b-b1a0-5d43987971ee.png)

+ Manual refresh button
![image](https://user-images.githubusercontent.com/90351456/206914856-650ae46a-4492-4d48-8bd6-6d18a3b8f1bc.png)

+ Adding current folder to favourites
![image](https://user-images.githubusercontent.com/90351456/206914918-0c9ec165-40b9-4955-a909-f4ffcb25866d.png)
![image](https://user-images.githubusercontent.com/90351456/206914930-a2da049f-4a1e-4e4e-8e4e-20b234df72bf.png)
