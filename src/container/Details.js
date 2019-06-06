import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';


//components 
import GradientButton from './../components/GradientButton'

export default class Details extends Component {

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

            <ScrollView style={styles.Details} >

                <ImageBackground style={styles.header}
                    source={require('./../../Assets/Images/detail.jpg')} >

                    {/* MENU */}
                    <View style={styles.menu} >
                        <Text style={styles.owner_answer}>پذیرفته شده</Text>
                    </View>

                    <View style={styles.header_price} >
                        <Text style={styles.per_night}> هر شب</Text>
                        <Text style={styles.price} >150,000 ت</Text>
                    </View>


                </ImageBackground>


                <View style={styles.body}>

                    {/* icons */}
                    <View style={styles.vila_posibilities}>
                        <View style={styles.posibility}>
                            <Text style={styles.posibility_text}>اتاق 2</Text>
                            <View style={styles.posibility_icon_box} >
                                <Image style={styles.posibility_icon} source={require('./../../Assets/Images/door.png')} />
                            </View>
                        </View>
                        <View style={styles.posibility}>
                            <Text style={styles.posibility_text}>2 تختخواب </Text>
                            <View style={styles.posibility_icon_box} >
                                <Image style={styles.posibility_icon} source={require('./../../Assets/Images/bed.png')} />
                            </View>
                        </View>
                        <View style={styles.posibility}>
                            <Text style={styles.posibility_text}>1 نفر</Text>
                            <View style={styles.posibility_icon_box} >
                                <Image style={styles.posibility_icon} source={require('./../../Assets/Images/persons.png')} />
                            </View>
                        </View>
                        <View style={styles.posibility}>
                            <Text style={styles.posibility_text}>45 متر مربع</Text>
                            <View style={styles.posibility_icon_box} >
                                <Image style={styles.posibility_icon} source={require('./../../Assets/Images/apartment.png')} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.about_vila}>
                        <View style={styles.about_vila_first}>
                            <Text style={styles.about_vila_title} >در مورد ویلا</Text>
                            <Text style={styles.about_vila_text} >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Text>
                        </View>
                        <TouchableOpacity style={styles.see_more}>
                            <Text style={styles.see_more_text}>بیشتر</Text>
                            <Image style={styles.see_more_icon} source={require('./../../Assets/Images/arrow-down.png')} />
                        </TouchableOpacity>
                    </View>


                    <View style={styles.avilibiy} >
                        <Text style={styles.about_vila_title} >دسترسی </Text>
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

                        <TouchableOpacity style={styles.see_more}>
                            <Text style={styles.see_more_text}>بیشتر</Text>
                            <Image style={styles.see_more_icon} source={require('./../../Assets/Images/arrow-down.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.conditions}>
                        <Text style={styles.about_vila_title}>شرایط</Text>
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

                    <ImageBackground
                        style={{ width: '100%', height: 250, marginTop: 20 }}
                        source={require('./../../Assets/Images/map.png')}
                    >

                    </ImageBackground>

                    <View style={styles.save_button}
                        onPress={() => {
                            this.setModalVisible(true);
                        }}
                    >

                        <GradientButton
                            width="80%"
                            press={() => Actions.EditDetails()}
                            color_1="#dfdfdf"
                            color_2="#dfdfdf"
                            height={50}
                            borderRadius={30}
                            textColor="#fff"
                            size={16}
                            title="ویرایش"
                        />
                    </View>


                </View>



            </ScrollView >



        );
    }
}

const styles = ({

    Details: {
        backgroundColor: "#fff",
        width: Dimensions.get('window').width,
        flex: 1,
        marginTop: -50
    },

    header: {
        width: '100%',
        height: Dimensions.get('window').width,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    menu: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 60,
        padding: 20,
        width: '100%'
    },

    header_price: {
        height: 150,
        backgroundColor: '#00000036',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'

    },
    price: {
        fontSize: 30,
        fontFamily: 'ISFBold',
        color: '#fff',
        marginBottom: 50,
    },
    per_night: {
        fontSize: 10,
        fontFamily: 'ISBold',
        color: '#fff',
        marginBottom: 50,
        marginRight: 10,
    },

    owner_answer: {
        fontSize: 10,
        fontFamily: 'ISBold',
        color: '#fff',
        backgroundColor: '#6FCF97',
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 2,
        textAlign: 'center',
    },




    body: {
        top: -50,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
    },


    vila_posibilities: {
        backgroundColor: '#f6f6f6',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '90%',
        marginTop: 20,
        padding: 15

    },
    posibility: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    posibility_text: {
        fontSize: 10,
        fontFamily: 'ISFBold',
        color: '#333',
        marginRight: 5
    },
    posibility_icon_box: {
        backgroundColor: '#eee',
        padding: 15,
        width: 25,
        height: 25,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    posibility_icon: {
        width: 15,
        resizeMode: 'contain'
    },
    about_vila: {
        backgroundColor: '#f6f6f6',
        width: '90%',
        marginTop: 20,
        padding: 20,
        borderRadius: 10
    },
    about_vila_first: {

    },
    about_vila_title: {
        fontSize: 18,
        fontFamily: 'ISFBold',
        color: '#333',
        marginBottom: 10
    },
    about_vila_text: {
        fontSize: 12,
        fontFamily: 'ISMedium',
        color: '#333',
    },
    see_more: {
        width: '100%',
        alignItems: 'center',
        marginTop: 15,

    },
    see_more_text: {
        fontSize: 12,
        fontFamily: 'ISMedium',
        color: '#c7c7c7',
    },


    avilibiy: {
        backgroundColor: '#f6f6f6',
        width: '90%',
        marginTop: 20,
        padding: 20,
        borderRadius: 10,
    },
    avilibiy_first: {
        flexWrap: 'wrap',
        flexDirection: 'row',
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
    conditions: {
        backgroundColor: '#f6f6f6',
        width: '90%',
        marginTop: 20,
        padding: 20,
        borderRadius: 10,
    },
    conditions_text: {
        fontSize: 12,
        fontFamily: 'ISMedium',
        color: '#333',
    },

    save_button: {
        width: Dimensions.get('window').width,
        flexGrow: 2,
        justifyContent: "center",
        borderRadius: 50,
        backgroundColor: '#fff',
        height: 160,
        top: -50,
        alignItems: 'center',
    }







})