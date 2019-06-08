import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    TextInput,
    Image,
    KeyboardAvoidingView
} from 'react-native';

import { Actions } from 'react-native-router-flux';

//components
import GradientButton from '../components/GradientButton';




export default class History extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }




    render() {

        return (


                <View style={styles.History}>
                    

                    <View style={styles.history_box}>
                        <Text style={styles.title} >
                            اطلاعات حساب
                        </Text>
                       

                    </View>
                   


                </View>
          



        );
    }
}

const styles = ({


    History: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 70,
        backgroundColor: '#f6f6f6',
        // justifyContent: 'center',
        alignItems: 'center',
    },

  history_box:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#f6f6f6',
    // borderBottomRightRadius: 300,
    borderBottomLeftRadius: 0,
    overflow: 'hidden',
    zIndex: 1,
  },
  title:{
    fontSize: 22,
    fontFamily: 'ISBold',
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e7',
    paddingBottom: 10,
    marginTop: 20,
    width: Dimensions.get('window').width - 50,
  },
  body:{
    width: Dimensions.get('window').width - 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: "#f7f7f7",
    shadowOpacity: 1,
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  }






})