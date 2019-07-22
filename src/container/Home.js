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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';


//components 
import NoRequest from '../components/NoRequest';
import Requestitems from '../components/RequestItems';
import Header from '../components/Header';



export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            activeColor: '#A52D53',
            inactiveColor: '#555',
            tab:[true,false,false,false]
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


    // log out
    _exit = () => {
        console.log(111)
        this._removeData()
        Actions.replace('SendNumber')
    }
    _removeData = async () => {
        try {
            await AsyncStorage.removeItem('login')
            console.log(AsyncStorage.getItem('login'))
        } catch (e) {

        }
    }


    //drawer actions
    _navigate = (path) => {
        //go to route
        Actions[path]()

        //close drawer
        this.refs['DRAWER_REF'].closeDrawer();

    }

    // gor to rent page 
    _showRequestsNavigate = () => {
        Actions.RentPage()
    }


    // change tabs for request type
    _changeTab = (tab) => {
        this.setState({tab:tab})
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

                <TouchableOpacity activeOpacity={.6} style={styles.bottomIcons} onPress={(e) => this._navigate('MyFlatsPage')}>
                    <Text style={styles.drawer_text}>ویلاهای من</Text>
                    <Icon size={22} name="home-outline" color="#b04267" />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.6} style={styles.bottomIcons} onPress={(e) => this._navigate('Home')}>
                    <Text style={styles.drawer_text}>درخواست ها</Text>
                    <Icon size={22} name="home-city-outline" color="#b04267" />
                </TouchableOpacity>

                {/* got to history */}
                <TouchableOpacity activeOpacity={.6} style={styles.bottomIcons} onPress={(e) => this._navigate('History')}>
                    <Text style={styles.drawer_text}>تاریخچه</Text>
                    <Icon size={22} name="calendar-clock" color="#b04267" />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.6} style={styles.bottomIcons} onPress={(e) => this._navigate('Profile')}>
                    <Text style={styles.drawer_text}>پروفایل</Text>
                    <Icon size={22} name="account-outline" color="#b04267" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.6} style={styles.bottomIcons} onPress={this._exit}>
                    <Text style={styles.drawer_text}>خروج</Text>
                    <Icon size={22} name="exit-to-app" color="#b04267" />
                </TouchableOpacity>
            </View>
        );



        return (
            <DrawerLayoutAndroid
                drawerWidth={250}
                ref={'DRAWER_REF'}
                drawerPosition={DrawerLayoutAndroid.positions.Right}
                renderNavigationView={() => navigationView}
                onDrawerSlide={(e) => { }}
                onDrawerStateChanged={(e) => { }}
                onDrawerClose={(e) => { }}
                onDrawerOpen={(e) => { this._openDrawer.bind(this) }}
            >
                <View style={styles.home_cover} >

                    <Header title="درخواست ها"
                        icon="menu"
                        color="#636363"
                        press={() => this._openDrawer()}
                    />


                    {/* request box  */}
                    <View style={styles.up} >
                        <View style={styles.tab}>

                            <TouchableOpacity style={styles.tab_box} onPress={() => this._changeTab(tab=[true,false,false,false])}>
                                <Icon name="gesture-tap" size={20} color={this.state.tab[0] ? this.state.activeColor : this.state.inactiveColor} />
                                <Text style={[styles.tab_text, { color: this.state.tab[0] ? this.state.activeColor : this.state.inactiveColor }]}>درخواست ها</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.tab_box} onPress={() => this._changeTab(tab=[false,true,false,false])}>
                                <Icon name="close-box-multiple" size={20} color={this.state.tab[1] ? this.state.activeColor : this.state.inactiveColor} />
                                <Text style={[styles.tab_text, { color:this.state.tab[1] ? this.state.activeColor : this.state.inactiveColor }]}>رد شده  </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.tab_box} onPress={() => this._changeTab(tab=[false,false,true,false])}>
                                <Icon name="alarm-check" size={20} color={this.state.tab[2] ? this.state.activeColor : this.state.inactiveColor} />
                                <Text style={[styles.tab_text, { color: this.state.tab[2] ? this.state.activeColor : this.state.inactiveColor }]}>تایید شده</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.tab_box} onPress={() => this._changeTab(tab=[false,false,false,true])}>
                                <Icon name="alarm-multiple" size={20} color={this.state.tab[3] ? this.state.activeColor : this.state.inactiveColor} />
                                <Text style={[styles.tab_text, { color: this.state.tab[3] ? this.state.activeColor : this.state.inactiveColor }]}>رزرو شده</Text>
                            </TouchableOpacity>
                        
                        </View>
                        {
                            this.state.tab[0] ?
                                <ScrollView contentContainerStyle={styles.requestBox} >
                                    {/* <NoRequest /> */}
                                    <Requestitems navigate={this._showRequestsNavigate} />
                                    <Requestitems navigate={this._showRequestsNavigate} />
                                    <Requestitems navigate={this._showRequestsNavigate} />
                                    <Requestitems navigate={this._showRequestsNavigate} />
                                    <Requestitems navigate={this._showRequestsNavigate} />
                                    <Requestitems navigate={this._showRequestsNavigate} />
                                    <Requestitems navigate={this._showRequestsNavigate} />
                                </ScrollView> : <Text style={{ height: 0 }}></Text>
                        }

                        {
                            this.state.tab[1] ?
                                <ScrollView contentContainerStyle={styles.requestBox} >
                                    {/* <NoRequest /> */}
                                    <Requestitems navigate={this._showRequestsNavigate} />
                                    <Requestitems navigate={this._showRequestsNavigate} />

                                </ScrollView> : <Text style={{ height: 0 }}></Text>
                        }


                        {
                            this.state.tab[2] ?
                                <ScrollView contentContainerStyle={styles.requestBox} >
                                    {/* <NoRequest /> */}
                                    <Requestitems navigate={this._showRequestsNavigate} />

                                </ScrollView> : <Text style={{ height: 0 }}></Text>
                        }
                        {
                            this.state.tab[3] ?
                                <ScrollView contentContainerStyle={styles.requestBox} >
                                    {/* <NoRequest /> */}
                                    <Requestitems navigate={this._showRequestsNavigate} />
                                    <Requestitems navigate={this._showRequestsNavigate} />
                                    <Requestitems navigate={this._showRequestsNavigate} />

                                </ScrollView> : <Text style={{ height: 0 }}></Text>
                        }

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
        width: '100%',
        paddingVertical: 5,
        alignItems: 'center',
    },

    title: {
        fontSize: 14,
        fontFamily: 'ISBold',
        color: '#333',
        textAlign: 'center',
    },
    menu_icon: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    up: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#f6f6f6',
        overflow: 'hidden',
        zIndex: 1,

    },

    requestBox: {
        width: Dimensions.get('window').width - 50,
        // alignItems: 'center',
        paddingBottom: 200,
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingTop: 10
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
        width: 100,
        height: 100,
        backgroundColor: '#aaa',
        borderWidth: 10,
        borderColor: '#f5f5f5',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon_child: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        borderWidth: 10,
        borderColor: '#f8f8f8',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    icon_cover: {
        width: 60,
        height: 60,
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
        fontSize: 14,
        fontFamily: 'ISBold',
        marginTop: 10,
        color: '#fff'
    },
    bottomIcons: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        width: '100%'
    },
    drawer_text: {
        fontSize: 12,
        color: '#b04267',
        fontFamily: 'ISMedium',
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
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 5
    },
    tab_box: {
        width: '25%',
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