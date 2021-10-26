# Mobile Album Fetch API
An android mobile app that retrieves data about albums, users and photos through an API and displays them on the screen.

## Using this repository
You can run the app on your local computer and/or by connecting your android mobile phone. The following pre-requisites are needed in order for the app to run. 
For more information on how to run a React Native app, [go here](https://reactnative.dev/docs/environment-setup).

## Pre-requisites:
-----------
To use this repository you need the following:
 - Windows 10 / macOS 10  or higher
 - Visual Studio Code
 - [Android Studio](https://developer.android.com/studio)
 - [React Library](https://reactjs.org/)
 - [React Native](https://reactnative.dev/)
 - [NodeJs](https://nodejs.org/en/)
 - [npm - a JavaScript package manager](https://www.npmjs.com/package/npm)
 - [Axios](https://www.npmjs.com/package/axios) 
 
 ### How to Run:
 
 Create a mobile emulator / virtual environment through Android Studio's AVD Manager. Follow the documentation [here](https://developer.android.com/studio/intro/update#sdk-manager).
 
 Open the command line and type ` C:\Users\<your-user-name-here>\AppData\Local\Android\Sdk\emulator)`
 
 Then type `emulator -list-avds`. Copy-paste the emulator name of your choice (that you set-up in Android Studio's AVD Manager).
 
 Now enter `emulator -avd <paste-emulator-name-here>`. Then wait for the emulator to start-up.
 
 Open the app's project folder in Visual Studio Code and type in the command terminal `npx react-native run-android`.
 
 ### How to Use:
 
 Select one of the albums listed.
 
 A pop-up will appear showing 50 thumbnail photos arranged in a tile-like grid.
 
 
 
