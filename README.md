# Mirrar SDK
Virtual jewellery try-on SDK

# Setup

- Steps to integrate

1. Install the package 
      ```
      npm install git+https://github.com/shivammaindola/react-native-mirrar-sdk.git
      npm install
      ```

2.       
    Add these two permission in manifest.xml in android section
    ```
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.CAMERA" />
    ```

3. Add import statement
 	```import MirrarSDK from 'react-native-mirrar-sdk';```

5. Add this code inside a view 

       <MirrarSDK
         data=''
         uuid=''
        />


