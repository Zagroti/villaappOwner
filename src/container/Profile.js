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




export default class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }


    _saveInfo = () => {
        Actions.Home()
    }


    _openDrawer = () => {
        this.refs['DRAWER_REF'].openDrawer();
    }

    componentDidMount() {
        // BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        // BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    //for disable back button haedware
    handleBackButton() {
        // ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
        // return false;
    }

    render() {

        return (
            <KeyboardAvoidingView style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }} behavior="position">

                <View style={styles.Profile}>
                    <View style={styles.icon_parent} >
                        <View style={styles.icon_child} >
                            <View style={styles.icon_cover} >
                                <Image style={styles.icon} source={require('../../Assets/Images/user.png')} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.account_box}>
                        <Text style={styles.account_title} >
                            اطلاعات حساب
                    </Text>
                        <Text style={styles.account_text} >
                            برای دریافت صورت حساب نیاز به پست  الکترونیک و دگیر اطلاعات شما داریم
                    </Text>
                    </View>
                    <View style={styles.account_form}>
                        <View style={styles.input_box}>
                            <TextInput
                                style={styles.form_inputs}
                                onChangeText={(countryCode) => this.setState({ countryCode })}
                                placeholder="نام و نام خانوادگی"
                            />
                            <Image style={styles.input_icon} source={require('../../Assets/Images/userq.png')} />
                        </View>
                        <View style={styles.input_box}>
                            <TextInput
                                style={styles.form_inputs}
                                onChangeText={(countryCode) => this.setState({ countryCode })}
                                placeholder="ایمیل"
                            />
                            <Image style={styles.input_icon} source={require('../../Assets/Images/pocket.png')} />
                        </View>
                        <View style={styles.input_box}>
                            <TextInput
                                style={styles.form_inputs}
                                onChangeText={(countryCode) => this.setState({ countryCode })}
                                placeholder="شهر"
                            />
                            <Image style={styles.input_icon} source={require('../../Assets/Images/phone.png')} />
                        </View>
                        <View style={styles.input_box}>
                            <TextInput
                                style={styles.form_inputs}
                                onChangeText={(countryCode) => this.setState({ countryCode })}
                                placeholder="آدرس"
                            />
                            <Image style={styles.input_icon} source={require('../../Assets/Images/telephone.png')} />
                        </View>

                    </View>

                  

                    <GradientButton
                            width={Dimensions.get('window').width - 100}
                            press={this._saveInfo}
                            activeOpacity={.6}
                            color_1="#36a35b"
                            color_2="#6fcf97"
                            height={50}
                            borderRadius={50}
                            textColor="#fff"
                            size={16}
                            title="ذخیره"
                            top={20}
                            bottom={50}
                        />



                </View>
            </KeyboardAvoidingView>



        );
    }
}

const styles = ({


    Profile: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 70,
        backgroundColor: '#f6f6f6',
        justifyContent: 'center',
        alignItems: 'center',
    },

    icon_parent: {
        width: 90,
        height: 90,
        backgroundColor: '#aaa',
        borderWidth: 10,
        borderColor: '#f5f5f5',
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
    },
    icon_child: {
        width: 70,
        height: 70,
        backgroundColor: '#fff',
        borderWidth: 10,
        borderColor: '#f8f8f8',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
    },

    icon_cover: {
        width: 50,
        height: 50,
        backgroundColor: '#C92652',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 25,
        height: 25,
        backgroundColor: '#C92652',
    },
    account_box: {
        flexDirection: 'column',
        width: Dimensions.get('window').width - 100,
        padding: 20,
        borderRadius: 10,
    },
    account_title: {
        fontSize: 16,
        fontFamily: 'ISBold',
        color: '#333'
    },
    account_text: {
        fontSize: 12,
        fontFamily: 'IS',
        color: '#aaa'
    },

    input_box:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#fff',
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        height:50,
        width: Dimensions.get('window').width - 100,

    },
    form_inputs: {
        backgroundColor: '#fff',
        height: 40,
        fontSize: 10,
        fontFamily: 'ISBold',
        textAlign: 'right',
        paddingRight: 10,
        width:'90%'

    },
    input_icon:{
        width:20,
        resizeMode:'contain'

    },








})