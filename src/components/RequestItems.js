import React, { Component } from 'react';
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class RequestItems extends Component {


    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {

        return (
            <TouchableOpacity style={styles.RequestItems} activeOpacity={.8} onPress={this.props.navigate}>

                <View style={styles.up}>
                    <View style={styles.number_box}>
                        <Image style={{
                            width: 60,
                            height: 60,
                            resizeMode: 'cover',
                            borderWidth: 1,
                            borderRadius: 30,
                            borderColor: '#686868',
                        }} source={require('../../Assets/Images/userx.png')} />

                    </View>
                    <View style={styles.vila_info}>
                        <Text style={styles.vila_name}>ویلای کیش</Text>
                        <View style={styles.vila_detail}>
                            <View style={styles.times}>
                                <View style={styles.start_time}>
                                    <Text style={styles.time_show}>10/10/1398</Text>
                                    <Text style={styles.time_title}>تاریخ شروع</Text>
                                </View>
                                <View style={styles.end_time}>
                                    <Text style={styles.time_show}>10/10/1398</Text>
                                    <Text style={styles.time_title}>تاریخ پایان</Text>
                                </View>
                            </View>
                            <View style={styles.icon_right}>
                                <Text style={styles.circle}></Text>
                                <Text style={styles.line}></Text>
                                <Text style={styles.circle}></Text>
                            </View>
                        </View>
                    </View>


                </View>
                <View style={styles.down} >
                    <Text style={{
                        fontSize: 12,
                        fontFamily: 'ISMedium',
                        color: '#333'
                    }}
                    >محدوده قیمت (تومان) </Text>
                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        borderRadius: 30,
                        backgroundColor: '#c5bc8caa',
                        marginVertical: 4

                    }}>
                        <Text style={styles.price}> 500,000 </Text>
                        <Text style={{ color: '#555' }}>-</Text>
                        <Text style={styles.price}> 300,000 </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = ({
    RequestItems: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: (Dimensions.get('window').width - 50) / 2  -10 ,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        zIndex: 2,

    },

    up: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%'

    },

    number_box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 30
    },
    number: {
        fontSize: 50,
        fontFamily: 'ISFBold',
        height: 50,
        color: '#333',
        lineHeight: 70

    },
    case: {
        fontSize: 14,
        fontFamily: 'ISMedium',
        color: '#333'
    },



    vila_info: {
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',

    },
    vila_name: {
        fontSize: 16,
        fontFamily: 'ISBold',
        color: '#333',
        marginVertical: 5,

    },
    vila_detail: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#f1f1f1',
        backgroundColor: '#f7f7f7',
        width:'100%'
    },




    icon_right: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        backgroundColor: '#FFF2AB',
        width: 8,
        height: 8,
        borderRadius: 4,
        borderColor: "#F2C94C",
        borderWidth: 1,
    },
    line: {
        borderStyle: 'dashed',
        borderColor: "#F2C94C",
        borderWidth: 1,
        borderRadius: 2,
    },
    times: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 5,

    },
    start_time: {
        flexDirection: 'row',
        borderColor: "#f6f6f6",
        borderBottomWidth: 1,
        borderRadius: 2,
    },
    end_time: {
        flexDirection: 'row',
    },
    time_title: {
        fontSize: 10,
        fontFamily: 'ISBold',
        color: '#888',
        marginHorizontal: 10,
        marginVertical: 5,
    },
    time_show: {
        fontSize: 10,
        fontFamily: 'ISFBold',
        color: '#333',
        marginVertical: 5,

    },



    down: {
        borderRadius: 5,
        borderColor: '#f1f1f1',
        backgroundColor: '#FFF2ABaa',
        alignItems: 'center',
        padding: 5,
        width:'100%',
        marginTop: 10,
    },
    price: {
        color: '#555',
        fontFamily: 'ISFBold',
        fontSize: 12,
    }

})


{/* 

    <ResultRequest navigate={this.showRequest} />  

*/}
