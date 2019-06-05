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
import { Actions } from 'react-native-router-flux';
import InputScrollView from 'react-native-input-scroll-view';
import LinearGradient from 'react-native-linear-gradient';



//components 
import ResultItems from '../components/ResultItems';
import NoFlat from '../components/NoFlat';



export default class MyFlatsPage extends Component {

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
        if (path === 'myFlat') {
            Actions.MyFlatsPage()
        }
        if (path === 'home') {
            Actions.Home()
        }
        if (path === 'history') {
            return false;
        }

        this.refs['DRAWER_REF'].closeDrawer();

    }

    _showRequestsNavigate = () => {
        Actions.RentPage()
    }

    //close modal
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }


    _showDetail = () => {
        Actions.Details()
    }




    render() {

        const navigationView = (
            <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center' }}>
                {/* <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>I'm in the Drawer!</Text> */}
                <View style={{
                    alignItems: 'center',
                    paddingVertical: 20,
                    backgroundColor: '#b04267',
                    width: '100%'
                }} >
                    <View style={styles.icon_parent} >
                        <View style={styles.icon_child} >
                            <Image style={styles.icon} source={require('../../Assets/Images/natalie.jpeg')} />
                        </View>
                    </View>
                    <View style={styles.person_desc} >
                        <Text style={styles.person_name} >جمیله باغی تبار</Text>
                    </View>

                </View>
                <TouchableOpacity activeOpacity={.6} style={styles.bottomIcons} onPress={(e) => this._navigate('myFlat')}>
                    <Text style={styles.drawer_text}>ویلاهای من</Text>
                    <Image style={styles.bottomIcon} source={require('../../Assets/Images/userq.png')} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.6} style={styles.bottomIcons} onPress={(e) => this._navigate('home')}>
                    <Text style={styles.drawer_text}>درخواست ها</Text>
                    <Image style={styles.bottomIcon} source={require('../../Assets/Images/userq.png')} />
                </TouchableOpacity>

                {/* got to history */}
                <TouchableOpacity activeOpacity={.6} style={styles.bottomIcons} onPress={(e) => this._navigate('history')}>
                    <Text style={styles.drawer_text}>تاریخچه</Text>
                    <Image style={styles.bottomIcon} source={require('../../Assets/Images/userq.png')} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.6} style={styles.bottomIcons} onPress={(e) => this._navigate('profile')}>
                    <Text style={styles.drawer_text}>پروفایل</Text>
                    <Image style={styles.bottomIcon} source={require('../../Assets/Images/userq.png')} />
                </TouchableOpacity>
            </View>
        );



        return (
            <DrawerLayoutAndroid
                drawerWidth={250}
                ref={'DRAWER_REF'}
                drawerPosition={DrawerLayoutAndroid.positions.Right}
                renderNavigationView={() => navigationView}
                onDrawerSlide={(e) => { console.log('1') }}
                onDrawerStateChanged={(e) => { console.log('2') }}
                onDrawerClose={(e) => { console.log('close') }}
                onDrawerOpen={(e) => { this._openDrawer.bind(this) }}
            >
                <View style={styles.MyFlatsPage} >

                    {/* MENU */}
                    <View style={styles.menu} >

                        <TouchableOpacity style={styles.humberger} onPress={this._openDrawer}>
                            <Image style={styles.humberger_icon} source={require('../../Assets/Images/menu.png')} />
                        </TouchableOpacity>
                    </View>


                    {/* request box  */}
                    <View style={styles.up} >
                        <Text style={styles.title} >ویلاهای من </Text>

                        <ScrollView contentContainerStyle={styles.requestBox} >
                            {/* <NoFlat press={()=> alert('yyy')} /> */}
                            <ResultItems navigate={this._showDetail} />
                            <ResultItems navigate={this._showDetail} />
                            <ResultItems navigate={this._showDetail} />
                            <ResultItems navigate={this._showDetail} />
                            <ResultItems navigate={this._showDetail} />
                            <ResultItems navigate={this._showDetail} />
                        </ScrollView>
                    </View>
                    <TouchableOpacity activeOpacity={.9} style={{
                        position: 'absolute', bottom: 140, zIndex: 10, right: 20, width: 80,
                        height: 80,
                        borderRadius: 40,
                        backgroundColor: '#B62750',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',

                        shadowColor: "#000",
                        shadowOpacity: 1,
                        elevation: 5,
                    }}
                        onPress={() => {
                            Actions.EditDetails()
                        }}
                    >
                        <Text style={{ fontSize: 60, color: '#fff', lineHeight: 70, fontWeight: '900' }} >+</Text>
                    </TouchableOpacity>



                </View>









            </DrawerLayoutAndroid >


        );
    }
}

const styles = ({

    MyFlatsPage: {
        backgroundColor: "#C92652",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        flex: 1,

    },

    menu: {
        backgroundColor: '#f6f6f6',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 50,
        padding: 20
    },
    bell: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notification: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#B22850',
        start: 10,
        top: -10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notification_text: {
        color: '#fff',
        fontSize: 9,
        fontFamily: 'ISFMedium',
    },
    humberger: {
        width: 50,
        height: 50,
        alignItems: 'center',
    },
    humberger_icon: {
        width: 30,
        height: 30,
    },
    up: {
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
        fontSize: 22,
        fontFamily: 'ISBold',
        color: '#333',
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7',
        paddingBottom: 10,
        marginTop: 20,
        width: Dimensions.get('window').width - 50,


    },
    requestBox: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
        paddingBottom: 200,
        marginTop: 20
    },

    footer: {
        width: Dimensions.get('window').width,
        height: 100,
        backgroundColor: "#C92652",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 20
    },

    middleInside: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#eee',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 20
    },
    middleIcon: {
        width: 40,
        height: 50,
        zIndex: 20
    },

    icon_parent: {
        width: 120,
        height: 120,
        backgroundColor: '#aaa',
        borderWidth: 10,
        borderColor: '#f5f5f5',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
    },
    icon_child: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderWidth: 10,
        borderColor: '#f8f8f8',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
    },

    icon_cover: {
        width: 80,
        height: 80,
        backgroundColor: '#C92652',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: '100%',
        height: '100%',
        borderRadius: 40,

    },
    person_desc: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    person_name: {
        fontSize: 18,
        fontFamily: 'ISBold',
        marginTop: 10,
        color: '#fff'
    },
    bottomIcons: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        borderBottomColor: '#666',
        borderBottomWidth: 1,
        width: '100%'
    },
    drawer_text: {
        fontSize: 16,
        color: '#666',
        fontFamily: 'ISBold',
        marginRight: 10,
    },
    bottomIcon: {
        width: 30,
        height: 30
    },
    Modal: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        // height: Dimensions.get('window').height ,
        width: Dimensions.get('window').width,
    },
    modal_description: {
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

    modal_description_left: {
        flex: 1
    },
    modal_description_text: {
        fontSize: 14,
        color: '#333',
        fontFamily: 'ISBold',
    },
    modal_description_title: {
        fontSize: 10,
        color: '#aaa',
        fontFamily: 'IS',
    },
    modal_price: {
        width: '90%',
        flexDirection: 'column',
        marginVertical: 20,
        paddingVertical: 20,
        borderRadius: 5
    },
    modal_details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    modal_titles: {
        flexDirection: 'row',
        fontSize: 12,
        fontFamily: 'ISBold',
        alignItems: 'center',
        color: '#636363'
    },
    gheymat: {
        fontSize: 12,
        fontFamily: 'ISBold',
        color: '#636363'
    },
    toman: {
        fontSize: 8,
        fontFamily: 'ISBold',
        color: '#636363'
    },
    modal_icons: {
        width: 20,
        resizeMode: "contain",
        marginLeft: 10,
    },

    price_input: {
        textAlign: 'center',
        borderRadius: 5,
        shadowColor: "#f7f7f7",
        shadowOpacity: .3,
        elevation: 1,
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        color: '#636363',
        marginTop: 5,
        ...Platform.select({
            android: {
                fontFamily: 'ISFBold',
                fontSize: 15
            }
        })

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
        borderRadius: 50

    },

    new_request_btn_text: {
        fontFamily: 'ISBold',
        color: '#fff',
        fontSize: 16,
    },
    modal_close: {
        width: 25,
        height: 25,
        margin: 20
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