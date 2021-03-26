import React, { useEffect, useState, Component  } from 'react';
import { FlatList, Text, View } from 'react-native';
import WebView from 'react-native-webview'
import { userName,password,jsonData } from './constants'

export default class App extends Component {

  state={
     basicUrl : 'test' ,
     isLoading:true,
  }


 constructor(props){
    super(props);
    this.state = {
        basicUrl : 'test' ,
        isLoading:true,
      }

  }

componentDidMount(){

var keysArray = [] ;
var valuesArray = [] ;
 const { navigation } = this.props;
   	 const username = navigation.getParam('userName', 'NO-User');
   	 const password = navigation.getParam('password', 'some default value');
   	 var jsonData= navigation.getParam('jsonData', 'some default value');

   var body="username="+username+"&password="+password+"&type=android_sdk";

  //  var jsonData ="{\"options\": {\"productData\": {\"Earrings\": {\"items\": [\"513319NDJAA40\",\"504002SHXABA02\",\"504002JGSABA02\",\"504002SQBABA02\",\"504002HQGAAA02\"],\"type\": \"ear\"}}}}";


  console.log('check log'+body);

fetch("https://m.mirrar.com//api/v1/login", {
  method: 'POST',
  headers: new Headers({
             'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
    }),
  body: body // <-- Post parameters
}).then(response => {
    console.log(response);
    if (!response.ok) {
        Alert.alert('ERROR', 'Username or password is incorrect');
      
    } else {
       
        return response.json().then(json => {
        
             console.log("json"+json);
    console.log(Object.keys(json.data.active_product_codes).length);
    //console.log(Object.values(json.data.active_product_codes)[1].size);

    var userData = JSON.parse(jsonData);
    console.log(userData.options.productData);
    var length1=Object.keys(json.data.active_product_codes).length;

    var apiKeys=Object.keys(json.data.active_product_codes);
    var apiValues=Object.values(json.data.active_product_codes);

    var userKeys=Object.keys(userData.options.productData);
    var userValues=Object.values(userData.options.productData);

console.log('start');
 console.log(userValues[0].items[0]);
for (let i = 0; i < userKeys.length; i++) {
     for(let j=0; j<apiKeys.length; j++){
         if(userKeys[i]==apiKeys[j]){
           keysArray.push(userKeys[i]);
            //check in values
            var valueArray = [] ;

            for(let k=0;k<userValues[i].items.length;k++){
               for(let x=0; x<apiValues[j].items.length;x++){
                 if(userValues[i].items[k]==apiValues[j].items[x]){
                    console.log(userValues[i].items[k]);
                    valueArray.push(userValues[i].items[k])
                 }
               }
            }
            if(valueArray.length>0){
              valuesArray.push(valueArray);
            }

         }
     }
}

var codes=[];
var baseUrl='';
for(let i=0;i<valuesArray.length;i++){
   codes.push('&'+keysArray[i]+'=');
   for(let j=0;j<valuesArray[i].length;j++){
     codes.push(valuesArray[i][j]);
   }
}
console.log(codes);

var csv = codes.toString().replace("[", "").replace("]", "").replace(", ", ",");
 baseUrl = "https://cdn.styledotme.com/general/mirrar.html?brand_id=" +
          json.data.uuid +
          csv +
          "&sku=" +
          codes[1].replace("=,", "=").replace(",&", "&");
console.log(baseUrl);
this.setState({
       basicUrl :baseUrl,
       isLoading:false,
      });
        });
    }
})
.catch((error) => {
    console.error(error);
});


}


render(){
  	

      return (

          <View style={{ flex: 1, padding: 0, }}>
              {this.state.isLoading ? <Text style={{
                                                backgroundColor: 'black',
                                                position: 'absolute',
                                                fontSize: 18,
                                                top: 0, left: 0,
                                                right: 0, bottom: 0,
                                                textAlignVertical: "center",textAlign: "center",
                                                alignItems: 'center'}}>Loading...</Text>
 :
              (<WebView 
			geolocationEnabled={true}
			mediaPlaybackRequiresUserAction={false}
			javaScriptEnabled={true}
			source={{ uri: this.state.basicUrl }} style={{ marginTop: 0 }} />
              )}
            </View>
      );
}

}