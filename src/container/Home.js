import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    DrawerLayoutAndroid,
    Image,
    TouchableOpacity,
    BackHandler,
    ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';




//components 
import NoRequest from '../components/NoRequest';
import Requestitems from '../components/RequestItems';



export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            color_1: '#C72652',
            color_2: '#000',
            color_3: '#000',
            red: '#C72652',
            black: '#333'

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
        if (path === 'myFlatPage') {
            Actions.MyFlatsPage()
        }
        if (path === 'home') {
            Actions.Home()
        }
        if (path === 'history') {
            Actions.History()
        }


        this.refs['DRAWER_REF'].closeDrawer();

    }

    _showRequestsNavigate = () => {
        Actions.RentPage()
    }


    // change tabs for request type
    _changeTab = (tab) => {
        if (tab === 'tab1') {
            this.setState({
                color_1: this.state.red,
                color_2: this.state.black,
                color_3: this.state.black

            })
        } else if (tab === 'tab2') {
            this.setState({
                color_1: this.state.black,
                color_2: this.state.red,
                color_3: this.state.black,
            })
        } else if (tab === 'tab3') {
            this.setState({
                color_1: this.state.black,
                color_2: this.state.black,
                color_3: this.state.red
            })
        }

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
                <TouchableOpacity activeOpacity={.6} style={styles.bottomIcons} onPress={(e) => this._navigate('myFlatPage')}>
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
                <View style={styles.home_cover} >

                    {/* MENU */}
                    <View style={styles.menu} >
                        
                        <TouchableOpacity style={styles.humberger} onPress={this._openDrawer}>
                            <Image style={styles.humberger_icon} source={require('../../Assets/Images/menu.png')} />
                        </TouchableOpacity>
                    </View>


                    {/* request box  */}
                    <View style={styles.up} >
                        <Text style={styles.title} >درخواست های  امروز</Text>
                        <View style={styles.tab}  >
                            <TouchableOpacity style={styles.tab_box} onPress={() => this._changeTab('tab1')}>
                                <Text style={[styles.tab_text, { color: this.state.color_1 }]}>فعال</Text>
                            </TouchableOpacity>
                            <Text style={styles.line} ></Text>
                            <TouchableOpacity style={styles.tab_box} onPress={() => this._changeTab('tab2')}>
                                <Text style={[styles.tab_text, { color: this.state.color_2 }]}>در صف </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.tab_box} onPress={() => this._changeTab('tab3')}>
                                <Text style={[styles.tab_text, { color: this.state.color_3 }]}>بسته شده</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView contentContainerStyle={styles.requestBox} >
                            {/* <NoRequest /> */}
                            <Requestitems navigate={this._showRequestsNavigate} />
                            <Requestitems navigate={this._showRequestsNavigate} />
                            <Requestitems navigate={this._showRequestsNavigate} />
                            <Requestitems navigate={this._showRequestsNavigate} />
                            <Requestitems navigate={this._showRequestsNavigate} />
                            <Requestitems navigate={this._showRequestsNavigate} />
                            <Requestitems navigate={this._showRequestsNavigate} />
                        </ScrollView>
                    </View>
                    

                </View>



                




            </DrawerLayoutAndroid >


        );
    }
}

const styles = ({

    home_cover: {
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