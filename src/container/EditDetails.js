import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    DrawerLayoutAndroid,
    Image,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    BackHandler,
    ToastAndroid,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import InputScrollView from 'react-native-input-scroll-view';
import Textarea from 'react-native-textarea';




//components 
import GradientButton from '../components/GradientButton'

export default class EditDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
        }
    }



    //close modal
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    _backToResultImage = () => {
        Actions.ResultItemsPage()
    }


    render() {




        return (



            <ScrollView >
                <KeyboardAvoidingView style={styles.EditDetails} behavior="padding" enabled>

                    <Text style={styles.title} >ویلای جدید</Text>

                    <View style={styles.edit_details_1} >
                        <View style={styles.edit_details_details} >
                            <Text style={styles.titles} >عکس ها</Text>
                            <View style={styles.add_images_boxes} >
                                <View style={styles.images_box} >
                                    <Image style={styles.images} source={require('../../Assets/Images/vilajungle.jpg')} />
                                </View>
                                <View style={styles.images_box} >
                                    <Image style={styles.images} source={require('../../Assets/Images/vilajungle.jpg')} />
                                </View>
                                <View style={styles.images_box} >
                                    <Image style={styles.images} source={require('../../Assets/Images/vilajungle.jpg')} />
                                </View>
                                <View style={styles.images_box} >
                                    <Image style={styles.select_image} source={require('../../Assets/Images/picture.png')} />
                                    <Text style={{
                                        fontSize: 10,
                                        fontFamily: 'ISBold',
                                        color: '#636363'
                                    }} >افزودن عکس</Text>
                                </View>
                            </View>
                        </View>

                        {/* <TextInput
                            placeholderStyle={{
                                fontFamily: 'ISFBold',
                                color: '#636363'
                            }}
                            placeholder="100,000"
                            style={styles.price_input}
                            onChangeText={() => alert('2')}
                            keyboardType='numeric'
                        /> */}
                    </View>

                    {/* date */}
                    <View style={styles.edit_details_1} >
                        <Text style={styles.titles}> اطلاعات</Text>

                        <TextInput
                            placeholderStyle={{
                                fontFamily: 'ISBold',
                                color: '#636363'
                            }}
                            placeholder="عنوان"
                            style={styles.input}
                        // onChangeText={() => alert('2')}
                        />

                        <Textarea
                            containerStyle={styles.textareaContainer}
                            style={styles.text_area}
                            onChangeText={this.onChange}
                            defaultValue=""
                            placeholder={'درباره ویلا'}
                            placeholderTextColor={'#636363'}
                            underlineColorAndroid={'transparent'}
                        />
                    </View>

                    {/* nights */}
                    <View style={styles.edit_details_1} >
                        <Text style={styles.titles}>تعداد شبها</Text>
                        <View style={{
                            backgroundColor: '#fff',
                            borderRadius: 5,
                            padding: 20,
                            marginTop: 10,
                            shadowColor: "#f7f7f7",
                            shadowOpacity: 1,
                            elevation: 1,
                        }} >
                            <Text style={styles.conditions_text}>1. آرام باشید و مراقب خودتان باشید.</Text>
                            <Text style={{ color: '#DC3053', fontSize: 12, fontFamily: 'ISMedium' }}>2. عاشق خودتان باشید .</Text>
                            <Text style={styles.conditions_text}>3. اتاق را کثیف نکنید </Text>
                            <Text style={styles.conditions_text}>4. اتاق را تمیز نکنید . </Text>
                            <Text style={styles.conditions_text}>5. خانوم بازی نکنید </Text>
                            <Text style={styles.conditions_text}>6. داخل اتاق سیگار نکشید . </Text>
                            <Text style={styles.conditions_text}>7. دقت کنید </Text>
                            <Text style={styles.conditions_text}>8. نماز اول وقت را فراموش نکنید </Text>
                            <Text style={styles.conditions_text} >9. خدا را ناظر بر اعمال خود بدانید </Text>
                        </View>
                    </View>

                    <View style={styles.edit_details_1} >
                        <Text style={styles.titles}>دسترسی ها</Text>
                        <View style={styles.avilibiy_first}>
                            <View style={styles.avilibiy_item} >
                                <Text style={styles.avilibiy_text} >پارکینگ</Text>
                                <Image style={styles.avilibiy_icon} source={require('./../../Assets/Images/check.png')}></Image>
                            </View>
                            <View style={styles.avilibiy_item} >
                                <Text style={styles.avilibiy_text} >WiFi</Text>
                                <Image style={styles.avilibiy_icon} source={require('./../../Assets/Images/check.png')}></Image>
                            </View>
                            <View style={styles.avilibiy_item} >
                                <Text style={styles.avilibiy_text} >لباسشویی</Text>
                                <Image style={styles.avilibiy_icon} source={require('./../../Assets/Images/checkgrey.png')}></Image>
                            </View>
                            <View style={styles.avilibiy_item} >
                                <Text style={styles.avilibiy_text} >سیستم گرمایشی</Text>
                                <Image style={styles.avilibiy_icon} source={require('./../../Assets/Images/check.png')}></Image>
                            </View>
                            <View style={styles.avilibiy_item} >
                                <Text style={styles.avilibiy_text} >الکتریکی</Text>
                                <Image style={styles.avilibiy_icon} source={require('./../../Assets/Images/check.png')}></Image>
                            </View>
                            <View style={styles.avilibiy_item} >
                                <Text style={styles.avilibiy_text} >استخر</Text>
                                <Image style={styles.avilibiy_icon} source={require('./../../Assets/Images/check.png')}></Image>
                            </View>
                        </View>
                    </View>
                    <View style={styles.edit_details_1} >
                        <Text style={styles.titles}>آدرس و موقعیت </Text>
                        <TextInput
                            placeholderStyle={{
                                fontFamily: 'ISBold',
                                // color: '#636363'
                            }}
                            placeholder="آدرس کامل"
                            style={styles.input}
                        // onChangeText={() => alert('2')}
                        />
                    </View>
                    <View style={{
                        height: 200,
                        overflow: 'hidden',
                        borderWidth: 2,
                        borderColor: '#fff',
                        borderRadius: 10,
                        shadowColor: "#f7f7f7",
                        shadowOpacity: .3,
                        backgroundColor: '#fff',
                        elevation: 1,
                    }}>


                        <Image style={{
                            width: Dimensions.get('window').width - 50,
                            height: 200, resizeMode: 'cover',
                            borderRadius: 10,
                            marginBottom: 50,


                        }} source={require('./../../Assets/Images/map.png')}></Image>

                    </View>

                    <GradientButton
                        width="90%"
                        press={this._press}
                        activeOpacity={.6}
                        color_1="#36a35b"
                        color_2="#6fcf97"
                        height={50}
                        borderRadius={50}
                        textColor="#fff"
                        size={16}
                        title="ذخیره"
                        top={50}
                        bottom={200}
                    />
                </KeyboardAvoidingView>
            </ScrollView>



        );
    }
}

const styles = ({


    EditDetails: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
    },
    title: {
        fontSize: 22,
        fontFamily: 'ISBold',
        color: '#333',
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7',
        paddingBottom: 10,
        marginTop: 20,
        width: Dimensions.get('window').width - 50,
    },



    edit_details_description: {
        backgroundColor: '#eee',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 20,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
        height: 120,
        padding: 10,
        marginTop: 50,
    },

    home_icon_marker: {
        width: 100,
        resizeMode: "contain",
        top: -40,
    },

    edit_details_description_left: {
        flex: 1
    },
    edit_details_description_text: {
        fontSize: 14,
        color: '#333',
        fontFamily: 'ISBold',
    },
    edit_details_description_title: {
        fontSize: 10,
        color: '#aaa',
        fontFamily: 'IS',
    },
    edit_details_1: {
        width: Dimensions.get('window').width - 50,
        flexDirection: 'column',
        marginVertical: 20,
        paddingVertical: 20,
        borderRadius: 5,
    },
    edit_details_details: {
        flexDirection: 'column',
        width: '100%',

    },
    edit_details_titles: {
        width: '100%',
        flexDirection: 'row',
        fontSize: 12,
        fontFamily: 'ISBold',
        alignItems: 'center',
        color: '#636363',
    },
    titles: {
        width: '100%',
        fontSize: 16,
        fontFamily: 'ISBold',
        color: '#636363',
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7',
        paddingBottom: 10,
    },


    conditions_text: {
        fontSize: 12,
        fontFamily: 'ISMedium',
        color: '#333',
    },

    avilibiy_first: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginTop: 20,
        padding: 20,
        borderRadius: 5,
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
    },

    avilibiy_item: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 5
    },


    avilibiy_text: {
        fontSize: 12,
        fontFamily: 'ISMedium',
        color: '#333',
    },

    avilibiy_icon: {
        marginLeft: 5
    },

    add_images_boxes: {
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
        width: '100%'
    },
    images_box: {
        width: (Dimensions.get('window').width - 100) / 3,
        height: (Dimensions.get('window').width - 100) / 3,
        marginLeft: 10,
        backgroundColor: '#ececec',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },

    images: {
        width: '100%',
        height: '100%',
        resizeMode: "cover",
        borderRadius: 10
    },
    select_image: {
        width: '40%',
        height: '40%',
        resizeMode: "cover",
        borderRadius: 10
    },

    input: {
        textAlign: 'right',
        borderRadius: 5,
        shadowColor: "#f7f7f7",
        shadowOpacity: .3,
        elevation: 1,
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        color: '#636363',
        marginTop: 5,
        paddingRight: 10,
        marginTop: 10,
        fontFamily: 'ISBold',
    },

    textareaContainer: {
        height: 180,
        backgroundColor: '#fff',
        textAlign: 'right',
        shadowColor: "#f7f7f7",
        shadowOpacity: .3,
        elevation: 1,
        borderRadius: 5,
        marginTop: 10,
        fontFamily: 'ISBold',
    },
    text_area: {
        textAlign: 'right',
        width: '100%',
        backgroundColor: '#fff',
        color: '#636363',
        paddingRight: 10,
        textAlignVertical: 'top',
        height: '100%',
        borderRadius: 5,
        fontFamily: 'ISBold',

    },



    start_date: {
        width: '90%',
        height: 100
    },
    select_time: {
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'ISFBold',
        borderRadius: 5,
        shadowColor: "#f7f7f7",
        shadowOpacity: .3,
        elevation: 1,
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        color: '#636363',
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nights: {
        width: '90%',
        height: 100
    },
    select_nights: {
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'ISFBold',
        borderRadius: 5,
        shadowColor: "#f7f7f7",
        shadowOpacity: .3,
        elevation: 1,
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        color: '#636363',
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    new_request_box: {
        width: '100%',
        height: 140,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ebebeb',
        marginTop: 40,
        // paddingTop: 50,
        // paddingBottom: 300,
    },

    new_request_btn: {
        width: '90%',
    },
    new_request_btn_img: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    new_request_btn_text: {
        fontFamily: 'ISBold',
        color: '#fff',
        fontSize: 16,
    },
    edit_details_close: {
        width: 25,
        height: 25,
        margin: 20
    }








})