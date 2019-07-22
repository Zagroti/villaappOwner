import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    DrawerLayoutAndroid,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';


//components 
import ResultItems from '../components/ResultItems';
import NoFlat from '../components/NoFlat';
import Header from '../components/Header'


export default class MyFlatsPage extends Component {

    constructor(props) {
        super(props)
        this.state = {

        };
    }

    //click humberger menu to open drawer
    _openDrawer = () => {
        this.refs['DRAWER_REF'].openDrawer();
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



    // go to detail page
    _showDetail = () => {
        Actions.Details()
    }




    render() {

        //drawer menu
        const navigationView = (
            <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center' }}>
                {/* <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>I'm in the Drawer!</Text> */}
                <View style={{
                    alignItems: 'center',
                    paddingVertical: 20,
                    backgroundColor: '#A52D53',
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
                    <Icon size={22} name="home-outline" color="#A52D53" />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.6} style={styles.bottomIcons} onPress={(e) => this._navigate('Home')}>
                    <Text style={styles.drawer_text}>درخواست ها</Text>
                    <Icon size={22} name="home-city-outline" color="#A52D53" />
                </TouchableOpacity>

                {/* got to history */}
                <TouchableOpacity activeOpacity={.6} style={styles.bottomIcons} onPress={(e) => this._navigate('History')}>
                    <Text style={styles.drawer_text}>تاریخچه</Text>
                    <Icon size={22} name="calendar-clock" color="#A52D53" />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.6} style={styles.bottomIcons} onPress={(e) => this._navigate('Profile')}>
                    <Text style={styles.drawer_text}>پروفایل</Text>
                    <Icon size={22} name="account-outline" color="#A52D53" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.6} style={styles.bottomIcons} onPress={this._exit}>
                    <Text style={styles.drawer_text}>خروج</Text>
                    <Icon size={22} name="exit-to-app" color="#A52D53" />
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

                    <Header title="ویلاهای من"
                        icon="menu"
                        color="#636363"
                        press={() => this._openDrawer()}
                    />


                    {/* request box  */}
                    <View style={styles.up} >

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
                        position: 'absolute',
                        bottom: 140,
                        zIndex: 10,
                        right: 20,
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        backgroundColor: '#A52D53',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                        onPress={() => {
                            Actions.EditDetails()
                        }}
                    >
                        <Icon size={50} name="plus" color="#fff" />
                    </TouchableOpacity>



                </View>

            </DrawerLayoutAndroid >


        );
    }
}

const styles = ({

    MyFlatsPage: {
        backgroundColor: "#fff",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        flex: 1,

    },


    up: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#f3f3f3',
        borderBottomLeftRadius: 0,
        overflow: 'hidden',
        zIndex: 1,
    },

    requestBox: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
        paddingBottom: 200,
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
        color: '#A52D53',
        fontFamily: 'ISMedium',
        marginRight: 10,
    },
    bottomIcon: {
        width: 30,
        height: 30
    }



})