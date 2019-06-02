import React, { Component } from 'react';
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';

export default class RequestItems extends Component {


    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {

        return (
            <TouchableOpacity style={styles.RequestItems} activeOpacity={.8} onPress={this.props.navigate}>
                <View style={styles.left} >
                    <Text style={styles.price}> 300,000 ت</Text>
                    <Image style={{ marginTop: 20 }} source={require('../../Assets/Images/left.png')} />
                </View>
                <View style={styles.right}>
                    <View style={styles.vila_info}>
                        <Text style={styles.vila_name}>ویلای کیش</Text>
                        <View style={styles.vila_detail}>
                            <View style={styles.times}>
                                <View style={styles.start_time}>
                                    <Text style={styles.time_show}>10/10/1398</Text>
                                    <Text style={styles.time_title}>تاریخ شروع</Text>
                                </View>
                                <View style={styles.end_time}>
                                    <Text style={styles.time_show}>3 شب</Text>
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
                    <View style={styles.number_box}>
                        <Image style={{
                                    width:60,
                                    height: 60,
                                    resizeMode: 'cover',
                                    borderWidth: 1,
                                    borderRadius: 30,
                                    borderColor: '#686868',
                        }}  source={require('../../Assets/Images/userx.jpeg')} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = ({
    RequestItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('window').width - 50,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        height: 100,
        marginBottom: 10,
        zIndex: 2,

    },

    right: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    number_box: {
        justifyContent: 'center',
        alignItems: 'center',
        width:60,
        height:60,
        shadowColor: "#eee",
        shadowOpacity: 1,
        elevation: 5,
        borderRadius:30
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
        paddingRight: 10,

    },
    vila_name: {
        fontSize: 16,
        fontFamily: 'ISBold',
        color: '#333'

    },
    vila_detail: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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



    left: {

    },
    price: {
        backgroundColor: '#6FCF97',
        paddingVertical: 4,
        paddingHorizontal: 20,
        borderRadius: 30,
        width: 100,
        color: '#fff',
        fontFamily: 'ISFBold',
        fontSize: 12,
        start: -25,
        top: -10,
        zIndex: 10
    }

})


{/* 

    <ResultRequest navigate={this.showRequest} />  

*/}
