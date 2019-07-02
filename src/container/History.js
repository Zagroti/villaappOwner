import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    TextInput,
    Image,
    KeyboardAvoidingView,
    TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

                <View style={styles.menu} >
                    <Text style={styles.title} >تاریخچه</Text>
                    <TouchableOpacity style={styles.humberger} onPress={() => Actions.pop()}>
                        <Icon size={36} name="arrow-right" color="#636363" />
                    </TouchableOpacity>
                </View>
                <View style={styles.history_box}>

                    <Text>چیزی برای نمایش وجود ندارد</Text>

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
    menu: {
        backgroundColor: '#f6f6f6',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 60,
        paddingHorizontal: 20,
        paddingTop: 10,
        width:'100%'
    },
    humberger: {
        width: 60,
        height: 60,
        alignItems: 'center',
    },

    history_box: {
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
    title: {
        fontSize: 18,
        fontFamily: 'IS',
        color: '#333',
        marginTop: 5
    },
    body: {
        width: Dimensions.get('window').width - 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10,
    }






})