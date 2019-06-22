import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    Image,
    TextInput,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Textarea from 'react-native-textarea';




//components 
import GradientButton from '../components/GradientButton'
import CheckboxIcon from '../components/CheckboxIcon';
import CheckboxText from '../components/CheckboxText';

export default class EditDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            parking: false,
            wifi: false,
            heater: false,
            laundry: false,
            pool: false,
            electric: false,
            condition_1: false,
            condition_2: false,
            condition_3: false,
            condition_4: false,
            condition_5: false,
            condition_6: false,
            condition_7: false,
        }
    }



    //close modal
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    _backToResultImage = () => {
        Actions.ResultItemsPage()
    }


    // checkbox state
    _changeCheckState = async (e, name) => {
        await this.setState({ [name]: e })
        // console.log(this.state)
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
                        <Text style={styles.titles}>شرایط </Text>
                        <View style={{
                            backgroundColor: '#fff',
                            borderRadius: 5,
                            padding: 20,
                            marginTop: 10,
                            shadowColor: "#f7f7f7",
                            shadowOpacity: 1,
                            elevation: 1,
                        }} >
                            <CheckboxText title="1. آرام باشید و مراقب خودتان باشید."
                                name="condition_1"
                                changeState={(e, name) => { this._changeCheckState(e, name) }}
                            />
                            <CheckboxText title="2. عاشق خودتان باشید"
                                name="condition_2"
                                changeState={(e, name) => { this._changeCheckState(e, name) }}
                            />
                            <CheckboxText title="3. اتاق را کثیف نکنید"
                                name="condition_3"
                                changeState={(e, name) => { this._changeCheckState(e, name) }}
                            />
                            <CheckboxText title="4.خانوم بازی نکنید"
                                name="condition_4"
                                changeState={(e, name) => { this._changeCheckState(e, name) }}
                            />
                            <CheckboxText title="5. نماز اول وقت را فراموش نکنید "
                                name="condition_5"
                                changeState={(e, name) => { this._changeCheckState(e, name) }}
                            />
                            <CheckboxText title="6. دقت کنید"
                                name="condition_6"
                                changeState={(e, name) => { this._changeCheckState(e, name) }}
                            />
                        </View>
                    </View>

                    <View style={styles.edit_details_1} >
                        <Text style={styles.titles}>دسترسی ها</Text>
                        <View style={styles.avilibiy_first}>
                            <CheckboxIcon title="پارکینگ" name="parking" changeState={(e, name) => { this._changeCheckState(e, name) }} />
                            <CheckboxIcon title="WiFi" name="wifi" changeState={(e, name) => { this._changeCheckState(e, name) }} />
                            <CheckboxIcon title="لباسشویی" name="laundry" changeState={(e, name) => { this._changeCheckState(e, name) }} />
                            <CheckboxIcon title="سیستم گرمایشی" name="heater" changeState={(e, name) => { this._changeCheckState(e, name) }} />
                            <CheckboxIcon title="الکتریکی" name="electric" changeState={(e, name) => { this._changeCheckState(e, name) }} />
                            <CheckboxIcon title="استخر" name="pool" changeState={(e, name) => { this._changeCheckState(e, name) }} />
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

    }








})