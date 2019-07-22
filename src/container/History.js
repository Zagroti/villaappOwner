import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

//components
import GradientButton from '../components/GradientButton';
import Header from '../components/Header';




export default class History extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }




    render() {

        return (


            <View style={styles.History}>

                <Header title="تاریخچه"
                    icon="arrow-right"
                    color="#636363"
                    press={() => Actions.pop()}
                />

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