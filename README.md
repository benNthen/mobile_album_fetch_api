# Mobile Album Fetch API
An android mobile app that retrieves data from an online API and returns a list of photo albums with their title and owner names. Selecting an album will display a galler of thumbnail-sized photos. Tapping one of these photos, will display a full-sized version of the photo. This was developed using React Native.

## Using this repository
You can run the app on your local computer and/or by connecting your android mobile phone. The following pre-requisites are needed in order for the app to run. 
For more information on how to run a React Native app, [go here](https://reactnative.dev/docs/environment-setup).

## Pre-requisites:

To use this repository you need the following:
 - Windows 10 / macOS 10  or higher
 - Visual Studio Code
 - [Android Studio](https://developer.android.com/studio)
 - [React JS](https://reactjs.org/)
 - [React Native](https://reactnative.dev/)
 - [Node Js](https://nodejs.org/en/)
 - [npm - a JavaScript package manager](https://www.npmjs.com/package/npm)
 - [Axios](https://www.npmjs.com/package/axios) 
 
 ## How to Run:
 
 Create a mobile emulator / virtual environment through Android Studio's AVD Manager. Follow the documentation [here](https://developer.android.com/studio/intro/update#sdk-manager).
 
 Open the command line and type ` C:\Users\<your-user-name-here>\AppData\Local\Android\Sdk\emulator)`
 
 Then type `emulator -list-avds`. Copy-paste the emulator name of your choice (that you set-up in Android Studio's AVD Manager).
 
 Now enter `emulator -avd <paste-emulator-name-here>`. Then wait for the emulator to start-up.
 
 Open the app's project folder in Visual Studio Code and type in the command terminal `npx react-native run-android`.
 
 ## How to Use:
 
 Select one of the albums listed.
 
 ![image](https://user-images.githubusercontent.com/53241776/139165266-d187c845-c601-4762-9d33-8fc6ef29338c.png)

 A pop-up will appear showing a gallery of thumbnail photos belonging to that album. You can scrolls across the screen.
 
 ![image](https://user-images.githubusercontent.com/53241776/139166014-8a157cb2-0791-459a-a2ad-91dfd2e471cd.png)
 
 If you select one of the thumbnail photos, another pop-up will appear to show its full-sized version.
 
 ![image](https://user-images.githubusercontent.com/53241776/139166067-3f470c18-a400-4343-8fce-f2ddede2f714.png)
 
 ## Software Architecture
 
 Below is the architecture of the mobile app. It details how it communicates with the Typicode JSONPlaceholder's server to gather data and displays them on the app.
 
 <img width="461" alt="Mobile Album Fetch API Architecture" src="https://user-images.githubusercontent.com/53241776/138982145-dc63203b-7a56-4121-ba29-96c7fb9ccd6c.png">

 

 
