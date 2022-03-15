import { StyleSheet, Dimensions } from "react-native";

export const screen_length =  Dimensions.get("window").height
export const screen_width =  Dimensions.get("window").width
export const length_factor = screen_length / 844;
export const width_factor = screen_width / 390;

export const styles = StyleSheet.create({

    header:{
        width:'100%'
    },

header_text:{
fontSize: length_factor * 24,
marginTop: 55* length_factor
},

input:{
    width:'100%',
    borderRadius: 4.5 * length_factor,
    height: 40*length_factor,
    marginTop:10 * length_factor,
    borderWidth: 1 * length_factor,
    paddingRight: 10 * length_factor,
    paddingLeft: 10 * length_factor,
    borderColor: 'rgb(221,221,221)'
},

valid_input:{
  borderColor: 'rgb(221,221,221)'
},
invalid_input:{

borderColor:'rgb(255, 0, 0)'
},

form_wrapper:{

    width:'100%',

    paddingTop: 46 * length_factor,
},

form_item:{

    paddingBottom:15 * length_factor
},

label_text:{
    textAlign:'left'
},

button_wrapper:{
    paddingTop: 35 * length_factor,
    width:'100%'
},
second_button_padding:{

    paddingTop: 20 * length_factor
},
clear_button:{
    backgroundColor: 'none',
    height: 36 * length_factor
},


});
