import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    DrawerLayoutAndroid,
    Image,
    ImageBackground,
    TouchableOpacity,
    BackHandler,
    ToastAndroid,
    ScrollView,
    Modal,
    TextInput,
    Platform
} from 'react-native';
import { Actions, Reducer } from 'react-native-router-flux';
import InputScrollView from 'react-native-input-scroll-view';
import LinearGradient from 'react-native-linear-gradient';



//components 
import GradientButton from '../components/GradientButton'



export default class RentPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,


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
                    <Text style={styles.title} >اجاره آپارتمان رویال</Text>
                    <ScrollView contentContainerStyle={styles.my_box} >
                        <View style={styles.box_1}  >
                            <View style={styles.circle}>
                                <View style={styles.user_box}>
                                    <Image style={styles.image} source={require('../../Assets/Images/userx.jpeg')} />
                                </View>
                                <Text style={{
                                    fontSize: 18,
                                    fontFamily: 'ISBold',
                                    marginTop: 5,
                                    color: '#333'
                                }}>امید آرمانی</Text>
                                <Text style={{
                                    fontSize: 14,
                                    fontFamily: 'ISMedium',
                                    color: '#555'
                                }}>مازندران بابل</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                <View style={styles.twins}>
                                    <Text style={{ fontSize: 10, fontFamily: 'IS', color: '#555' }}>تومان در روز</Text>
                                    <Text style={{ fontSize: 12, fontFamily: 'ISBold', color: '#555', marginHorizontal: 5 }}>400,000 </Text>
                                    <Image style={{ width: 20, resizeMode: 'contain' }} source={require('../../Assets/Images/24.png')} />
                                </View>
                                <View style={styles.twins}>
                                    <Text style={{
                                        fontSize: 10,
                                        fontFamily: 'ISBold',
                                        color: '#333',
                                        backgroundColor: '#ddd',
                                        paddingVertical: 2,
                                        paddingHorizontal: 10,
                                        borderRadius: 30
                                    }}>10 شب</Text>
                                    <Text style={{ fontSize: 10, fontFamily: 'ISMedium', color: '#555', marginHorizontal: 5 }}>1398/11/07</Text>
                                    <Image style={{ width: 20, resizeMode: 'contain' }} source={require('../../Assets/Images/calendergrey.png')} />
                                </View>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                backgroundColor: '#F2C94C',
                                padding: 5,
                                width: '100%',
                                borderRadius: 30,
                                marginVertical: 20
                            }} >
                                <Text style={{ fontSize: 16, fontFamily: 'ISBold', color: '#555' }} >1,350,000 تومان</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'IS', color: '#555' }} >قیمت کل:  </Text>
                            </View>

                        </View>
                        <View style={{
                            width: '90%',
                            marginVertical: 10,
                            borderRadius: 30
                        }}>
                            <Image style={{
                                width: '100%',
                                height: 180,
                                backgroundColor: '#f6f6f6',
                                resizeMode: 'cover',
                                borderRadius: 10
                            }} source={require('../../Assets/Images/vilajungle.jpg')} />

                        </View>
                        <View style={{ width: '90%', justifyContent: 'space-between', flexDirection: 'row' }} >

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


                    </ScrollView>
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
                                justifyContent:'center',
                                alignItems:'center',
                                padding:20,
                                borderRadius:10
                            }} >
                                <View style={styles.alarm_box}>
                                    <Image style={{
                                        width: 30,
                                        height: 30,
                                        resizeMode: 'cover',
                                    }} source={require('../../Assets/Images/alarm.png')} />
                                </View>

                                <View style={{marginVertical:40}}>
                                    <Text style={{ fontSize: 20, fontFamily: 'ISBold', color: '#555' }} >توجه:</Text>
                                    <Text style={{ fontSize: 14, fontFamily: 'ISMedium', color: '#555', marginVertical:10 }} >
                                        حداکثر بعد از 20 دقیقه از مشتری بازخورد خواهید گرفت 
                                    </Text>
                                    <Text style={{ fontSize: 16, fontFamily: 'ISBold', color: '#555' }} >
                                        آیا میخوهید این درخواست را قبول کنید ؟
                                    </Text>
                                </View>

                                <View style={{ width: '90%', justifyContent: 'space-between', flexDirection: 'row' }} >

                            <GradientButton
                                width="49%"
                                press={() => {this.setModalVisible(false);}}
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
    my_box: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 160,
        marginTop: 20
    },
    box_1: {
        shadowColor: "#eee",
        shadowOpacity: 1,
        elevation: 5,
        borderRadius: 5,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        padding: 10
    },
    circle: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        width: '100%',
        padding: 10
    },
    user_box:{
        justifyContent: 'center',
        alignItems: 'center',
        width:80,
        height:80,
        shadowColor: "#eee",
        shadowOpacity: 1,
        elevation: 5,
        backgroundColor:'#fff',
        borderWidth: 1,
        borderRadius: 40,
        borderColor: '#686868',
    },
    twins: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    buttons: {
        width: '50%',
        textAlign: 'center'
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
        borderRadius:30
    },
    Modal: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.8)',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    alarm_box:{
        justifyContent: 'center',
        alignItems: 'center',
        width:80,
        height:80,
        shadowColor: "#eee",
        shadowOpacity: 1,
        elevation: 5,
        backgroundColor:'#fff',
        borderWidth: 1,
        borderRadius: 40,
        borderColor: '#EEAF4B',
    },
    modal_close: {
        width: 25,
        height: 25,
        margin: 20
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


    tab: {
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



    },
    tab_box: {
        width: '33.3333%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: "100%"

    },

    tab_text: {
        fontSize: 10,
        fontFamily: 'ISBold',
        marginLeft: 5,
    },







})