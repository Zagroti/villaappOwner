import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    Image,
    BackHandler,
    ScrollView,
    Modal,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import InputScrollView from 'react-native-input-scroll-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';


//components 
import GradientButton from '../components/GradientButton'



export default class RentPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            minRangeSlider: 100000,
            maxRangeSlider: 990000,

        };
    }

    //click humberger menu to open drawer
    _openDrawer = () => {
        this.refs['DRAWER_REF'].openDrawer();
    }


    componentDidMount() {
        // for disable back btn
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        // for disable back btn
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }


    //for disable back button haedware
    handleBackButton() {
        // ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
        return true;
    }


    //footer actions
    _navigate = (path) => {
        if (path === 'profile') {
            Actions.Profile()
        }
        if (path === 'history') {
            return false;
        }

        this.refs['DRAWER_REF'].closeDrawer();

    }

    _showRequestsNavigate = () => {
        Actions.ResultItemsPage()
    }

    //close modal
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }


    _acceptRequest = () => {
        Actions.Profile();
        this.setModalVisible(false);
    }



    render() {




        return (

            <View style={styles.rent_page} >

                <View style={styles.menu} >
                    <Text style={styles.title} >اجاره آپارتمان رویال</Text>
                    <TouchableOpacity style={styles.humberger} onPress={() => Actions.pop()}>
                        <Icon size={36} name="arrow-right" color="#636363" />
                    </TouchableOpacity>
                </View>

                {/* request box  */}
                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                    backgroundColor: '#f6f6f6',
                    borderBottomLeftRadius: 0,
                    overflow: 'hidden',
                    zIndex: 1,

                }} >

                    <View style={styles.my_box}  >
                        <ImageBackground style={styles.box_1} imageStyle={{
                            resizeMode: 'cover',
                            width: '100%',
                            borderRadius: 5
                        }}
                            source={require('../../Assets/Images/vilajungle.jpg')}  >
                            <View style={{
                                width: '100%',
                                // backgroundColor: '#fff',
                                backgroundColor: 'rgba(0,0,0,0.4)',
                                borderRadius: 5,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#ccc',
                                    width: '100%',
                                    padding: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <View style={{
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#FFD700',
                                        padding: 10,
                                        width: '50%',
                                        height: 100,
                                        borderRadius: 10,
                                        marginVertical: 20
                                    }} >
                                        <View style={{
                                            flexDirection: 'row',
                                            borderBottomWidth: 1,
                                            borderBottomColor: '#333',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width:'100%',
                                        }} >
                                            <Text style={{ fontSize: 10, fontFamily: 'IS', color: '#666' }} >(تومان)</Text>
                                            <Text style={{ fontSize: 13, fontFamily: 'IS', color: '#555' }} >قیمت پیشنهادی  </Text>
                                        </View>
                                           
                                        <View style={{ flexDirection: 'row',alignItems: 'center', width:'100%',
                                            justifyContent: 'center', }} >
                                            <Text style={{ fontSize: 13, fontFamily: 'ISMedium', color: '#555' }} >150,000 </Text>
                                            <Text style={{ fontSize: 13, fontFamily: 'ISMedium', color: '#555' }} > - </Text>
                                            <Text style={{ fontSize: 13, fontFamily: 'ISMedium', color: '#555' }} >1,350,000 </Text>
                                        </View>
                                    </View>

                                    <View style={styles.circle}>
                                        <View style={styles.user_box}>
                                            <Image style={styles.image} source={require('../../Assets/Images/userx.png')} />
                                        </View>
                                        <Text style={{
                                            fontSize: 18,
                                            fontFamily: 'ISBold',
                                            marginTop: 5,
                                            color: '#fff'
                                        }}>امید آرمانی</Text>
                                        <Text style={{
                                            fontSize: 14,
                                            fontFamily: 'ISMedium',
                                            color: '#fff'
                                        }}>مازندران بابل</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }} >
                                    <View style={styles.twins}>
                                        <Text style={{ fontSize: 12, fontFamily: 'ISBold', color: '#fff', marginHorizontal: 5 }}>2 نفر </Text>
                                        {/* <Text style={{ fontSize: 12, fontFamily: 'IS', color: '#555' }}>تعداد  </Text> */}
                                        <Icon size={24} name="account-group-outline" color="#fff" />
                                    </View>
                                    <View style={{width:1,height:'100%',backgroundColor:'#ccc'}} ></View>
                                    <View style={styles.twins}>
                                        <Text style={{ fontSize: 12, fontFamily: 'ISMedium', color: '#fff', marginHorizontal: 5 }}>1398/11/08</Text>
                                        <Text style={{ fontSize: 12, fontFamily: 'ISMedium', color: '#fff', marginHorizontal: 5 }}> - </Text>
                                        <Text style={{ fontSize: 12, fontFamily: 'ISMedium', color: '#fff', marginHorizontal: 5 }}>1398/11/07</Text>
                                        <Icon size={24} name="calendar-range" color="#fff" />
                                    </View>
                                </View>

                            </View>

                        </ImageBackground>

                        <View style={{
                            width: '100%',
                            alignItems: 'center',
                            marginVertical: 10,
                            borderRadius: 5,
                            backgroundColor: '#f1f1f1',
                            padding: 10,
                        }}>

                            <View style={{
                                width: '100%',
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                height: 60,
                                position: 'relative',
                            }} >
                                <Text style={{
                                    color: '#A52D53',
                                    fontFamily: 'ISFMedium',
                                    position: 'absolute',
                                    start: 0,
                                    bottom: -10,
                                }}>{this.state.minRangeSlider}</Text>
                                <Slider
                                    thumbTintColor="#A52D53"
                                    style={{ width: '100%', height: 32 }}
                                    minimumValue={this.state.minRangeSlider}
                                    maximumValue={this.state.maxRangeSlider}
                                    step={50000}
                                    minimumTrackTintColor="#A52D53"
                                    onValueChange={value => this.setState({ sliderValue: value })}
                                    onSlidingStart={value =>
                                        this.setState({
                                            slideStartingValue: value,
                                            slideStartingCount: this.state.slideStartingCount + 1,
                                        })
                                    }
                                />
                                <Text style={{
                                    color: '#A52D53',
                                    fontFamily: 'ISFMedium',
                                    position: 'absolute',
                                    end: 0,
                                    bottom: -10
                                }}>{this.state.maxRangeSlider}</Text>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                marginTop: 30,
                                backgroundColor: '#fbfbfb',
                                borderRadius: 30,
                                width: '70%',
                                paddingVertical: 5
                            }}>
                                <Text style={{
                                    fontSize: 15,
                                    fontFamily: 'ISFMedium',
                                    color: '#666'
                                }} >{this.state.sliderValue ? this.state.sliderValue : (this.state.maxRangeSlider + this.state.minRangeSlider) / 2}</Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                    <Text style={{
                                        fontSize: 10,
                                        fontFamily: 'ISMedium',
                                        color: '#666'
                                    }} > (تومان)</Text>
                                    <Text style={{
                                        fontSize: 15,
                                        fontFamily: 'ISMedium',
                                        color: '#666'
                                    }} >قیمت نهایی : </Text>

                                </View>

                            </View>

                        </View>


                        <View style={{
                            width: Dimensions.get('window').width - 50,
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                        }} >

                            <GradientButton
                                width="49%"
                                press={() => Actions.pop()}
                                color_1="#dfdfdf"
                                color_2="#dfdfdf"
                                height={50}
                                borderRadius={10}
                                textColor="#9e9e9e"
                                size={16}
                                title="انصراف"
                            />
                            <GradientButton
                                width="49%"
                                press={() => { this.setModalVisible(true) }}
                                color_2="#6fcf97"
                                color_1="#36a35b"
                                height={50}
                                borderRadius={10}
                                textColor="#fff"
                                size={16}
                                title="تایید"
                            />
                        </View>


                    </View>
                </View>




                {/* MODAL */}


                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(false);
                    }}
                    transparent={true}
                >
                    <InputScrollView >


                        {/* Modal Body */}
                        <View style={styles.Modal}>
                            <View style={{
                                backgroundColor: '#fff',
                                width: '90%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 20,
                                borderRadius: 10
                            }} >
                                <View style={styles.alarm_box}>
                                    <Icon size={30} name="bell-ring" color="#EEAF4B" />
                                </View>

                                <View style={{ marginVertical: 40 }}>
                                    <Text style={{ fontSize: 20, fontFamily: 'ISBold', color: '#555' }} >توجه:</Text>
                                    <Text style={{ fontSize: 14, fontFamily: 'ISMedium', color: '#555', marginVertical: 10 }} >
                                        حداکثر بعد از 20 دقیقه از مشتری بازخورد خواهید گرفت
                                    </Text>
                                    <Text style={{ fontSize: 16, fontFamily: 'ISBold', color: '#555' }} >
                                        آیا میخوهید این درخواست را قبول کنید ؟
                                    </Text>
                                </View>

                                <View style={{ width: '90%', justifyContent: 'space-between', flexDirection: 'row' }} >

                                    <GradientButton
                                        width="49%"
                                        press={() => { this.setModalVisible(false); }}
                                        color_2="#C50143"
                                        color_1="#C50143"
                                        height={40}
                                        borderRadius={10}
                                        textColor="#fff"
                                        size={16}
                                        title="خیر"
                                    />
                                    <GradientButton
                                        width="49%"
                                        press={this._acceptRequest}
                                        color_1="#63CB8E"
                                        color_2="#63CB8E"
                                        height={40}
                                        borderRadius={10}
                                        textColor="#fff"
                                        size={16}
                                        title="بله"
                                    />
                                </View>

                            </View>

                        </View>
                    </InputScrollView>



                </Modal>
            </View>




        );
    }
}

const styles = ({

    rent_page: {
        backgroundColor: '#f6f6f6',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    menu: {
        backgroundColor: '#f6f6f6',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 60,
        paddingHorizontal: 20,
        paddingTop: 10,
    },

    title: {
        fontSize: 18,
        fontFamily: 'IS',
        color: '#333',
        marginTop: 5
    },
    humberger: {
        width: 60,
        height: 60,
        alignItems: 'center',
    },
    my_box: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 160,
        marginTop: 20,
        width: Dimensions.get('window').width - 50,

    },
    box_1: {
        shadowColor: "#eee",
        borderRadius: 5,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        resizeMode: 'cover',

    },
    circle: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        width: '50%',
        padding: 10
    },
    user_box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        shadowColor: "#eee",
        shadowOpacity: 1,
        elevation: 5,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 40,
        borderColor: '#686868',
    },
    twins: {
        // width: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 40
    },
    Modal: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.8)',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    alarm_box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        shadowColor: "#eee",
        shadowOpacity: 1,
        elevation: 5,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 40,
        borderColor: '#EEAF4B',
    }






})