//This is an example code for Navigator//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Button} from 'react-native';
//import all the components we are going to use.
import MirrarSDK from 'react-native-mirrar-sdk';
import { EventRegister } from 'react-native-event-listeners'
export default class FirstPage extends Component {

 constructor(props) {
        super(props)

        this.state = {
            data: 'no data',
        }
    }

    componentWillMount() {
    //returning product_code
        this.details = EventRegister.addEventListener('details', (data) => {
            this.setState({
                data,
            })
        })
        //returning image uri
         this.download = EventRegister.addEventListener('download', (data) => {
                    this.setState({
                        data,
                    })
                })
                        //returning image uri
         this.whatsapp = EventRegister.addEventListener('whatsapp', (data) => {
                             this.setState({
                                 data,
                             })
                         })
                         //returning product_code
         this.wishlist = EventRegister.addEventListener('wishlist', (data) => {
                             this.setState({
                                 data,
                             })
                         })
                         //returning product_code
         this.unwishlist = EventRegister.addEventListener('unwishlist', (data) => {
                             this.setState({
                                 data,
                             })
                         })
                         //returning product_code
         this.cart = EventRegister.addEventListener('cart', (data) => {
                             this.setState({
                                 data,
                             })
                         })
                         //returning product_code
          this.remove_cart = EventRegister.addEventListener('remove_cart', (data) => {
                              this.setState({
                                  data,
                              })
                          })
                          //returning image uri
            this.share = EventRegister.addEventListener('share', (data) => {
                                         this.setState({
                                             data,
                                         })
                                     })

    }

    componentWillUnmount() {
        EventRegister.removeEventListener(this.details)
        EventRegister.removeEventListener(this.download)
        EventRegister.removeEventListener(this.whatsapp)
        EventRegister.removeEventListener(this.wishlist)
        EventRegister.removeEventListener(this.unwishlist)
        EventRegister.removeEventListener(this.remove_cart)
        EventRegister.removeEventListener(this.share)

    }

  render() {
    const data ="{\"options\":{\"productData\":{\"Earrings\":{\"items\":[\"0079-500x500\",\"0097-500x500\",\"00118-500x500sdfghjk\"],\"type\":\"ear\"},\"Sets\":{\"items\":[\"DSC_0206S\",\"DSC_0204S\"],\"type\":\"set\"}}}\n" +
"}";
     console.log(this.state.data);

        return (
              <View style={{ flex: 1, padding: 0, }}>
               <MirrarSDK
           data={data}
           uuid=''
            />
          </View>
        );
      }
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});