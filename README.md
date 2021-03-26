# Mirrar SDK
Virtual jewellery try-on SDK

# Setup

- Steps to integrate

1. Install the package 
      npm install git+https://github.com/shivammaindola/react-native-mirrar-sdk.git
      npm i react-native-webview

2.       
    Add these two permission in manifest.xml 
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.CAMERA" />

3. Add 3 arguments in navigate function like this- 

									navigate('SecondPage', {
                                                       userName: '',
                                                       password: '',
                                                       jsonData: "{\"options\": {\"productData\": {\"Earrings\": {\"items\": [\"513319NDJAA40\",\"504002SHXABA02\",\"504002JGSABA02\",\"504002SQBABA02\",\"504002HQGAAA02\"],\"type\": \"ear\"}}}}",
                                                   })}

4. Make sure to give permission of camera before navigating to the sdk

