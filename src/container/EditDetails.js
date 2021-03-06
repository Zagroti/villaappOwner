import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    Image,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    PermissionsAndroid,
    TouchableOpacity,
    NativeModules,
    ImageBackground,
    Modal,
    Animated,
} from 'react-native';


import { Actions } from 'react-native-router-flux';
import Textarea from 'react-native-textarea';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView, { Marker } from 'react-native-maps';

//components 
import GradientButton from '../components/GradientButton'
import CheckboxIcon from '../components/CheckboxIcon';
import Counter from '../components/Counter'
import Header from '../components/Header';


// import ImagePicker from 'react-native-image-picker';

var ImagePicker = NativeModules.ImageCropPicker;



// images for upload
var imgs = []



// conditions!
var conditions = [
    ' آرام باشید و مراقب خودتان باشید.',
    ' دست در دماغ خود نکنید ',
    ' درب خودرو باز است ',
    ' ثبت با سند برابر است ',
    ' مغزهای کوچک زنگ زده '
]




const arrowDown = <Icon size={22} name="chevron-down" color="#bbb" />
const arrowUp = <Icon size={22} name="chevron-up" color="#bbb" />




export default class EditDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            markers: [
                { latitude: 35.68925, longitude: 51.3890 },
            ],

            mapHeight: 200,
            mapWidth: Dimensions.get('window').width - 50,
            moreText: 'بزرگتر',
            arrowDown: true,

            image: null,
            images: null,

            parking: false,
            wifi: false,
            heater: false,
            laundry: false,
            pool: false,
            electric: false,

            condition: '',
            conditions: conditions,

            address: '',

            singleBed: 0,
            doubleBed: 0,
            capacity: 0,
            rooms: 0,

            provinceModal: false,
            province: '',
            provinceNumber: 100,
            provinceWidth: '100%',
            cityModal: false,
            city: '',
            cityWidth: 0,

            provinces: ['مازندران', 'تهران', 'گیلان'],
            cities: [
                [
                    { city: 'آمل', coordinate: [{ latitude: 36.4676, longitude: 52.3507 }] },
                    { city: 'بابل', coordinate: [{ latitude: 36.5387, longitude: 52.6765 }] },
                    { city: 'ساری', coordinate: [{ latitude: 35.68925, longitude: 51.3890 }] },
                ],
                [
                    { city: 'دماوند', latitude: 35.68925, longitude: 51.3890 },
                    { city: 'پردیس', latitude: 35.68925, longitude: 51.3890 },
                    { city: 'بومهن', latitude: 35.68925, longitude: 51.3890 }
                ],
                [
                    { city: 'فومن', latitude: 35.68925, longitude: 51.3890 },
                    { city: 'رشت', latitude: 35.68925, longitude: 51.3890 },
                    { city: 'انزلی', latitude: 35.68925, longitude: 51.3890 }
                ],
            ],
            mapIsChanging: false,
            markerScale: 1,
            markerTop: 0,
            markerHeight: 10,
            markerWidth: 10,


            initialPositionInstead: {
                latitude: 35.68925,
                longitude: 51.3890,
                latitudeDelta: 0,
                longitudeDelta: 0,
            }

        }


    }

    componentWillMount() {
        // {
        //     PermissionsAndroid.requestMultiple(
        //         [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        //         PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION],
        //         {
        //             title: 'Give Location Permission',
        //             message: 'App needs location permission to find your position.'
        //         }
        //     ).then(granted => {
        //         // console.log(granted);
        //         resolve();
        //     }).catch(err => {
        //         // console.warn(err);
        //         reject(err);
        //     });
        // }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                // const initialPosition = JSON.stringify(position);
                await this.setState({
                    initialPosition: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: 0,
                        longitudeDelta: 0
                    },
                    finalPosition: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    }
                });
            },
            (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000 }
        );
        this.watchID = navigator.geolocation.watchPosition((position) => {
            const lastPosition = JSON.stringify(position);
            this.setState({ lastPosition });
        });

        console.log(this.state.finalPosition)

    }





    // multi select image
    pickMultiple() {

        ImagePicker.openPicker({
            multiple: true,
            waitAnimationEnd: true,
            includeExif: true,
            forceJpg: true,
            mediaType: 'photo'
        }).then(images => {
            images.map(i => {
                imgs.push({ uri: i.path, width: i.width, height: i.height, mime: i.mime });
            })
            this.setState({
                image: null,
                images: [...imgs]
            });
            // console.log('received image', imgs);

        }).catch(e => false);
    }




    // show selected images
    renderAsset(image) {

        // return <Image  style={styles.images_box} source={image} />

        return <ImageBackground style={styles.images_box} imageStyle={{ borderRadius: 10 }} source={image}>
            <View style={{
                backgroundColor: '#fffe',
                padding: 5,
                position: 'absolute',
                top: 5,
                right: 5,
                borderRadius: 50
            }}>
                <Icon name="delete" size={20} color="red" />

            </View>
        </ImageBackground>
    }


    // delete selected images
    _deleteImage = (key) => {
        for (let i = 0; i < imgs.length; i++) {
            if (imgs[i].uri === key) {
                imgs.splice(imgs[i], 1)
            }
        }
        this.setState({
            image: null,
            images: imgs
        });

    }



    // checkbox state
    _changeCheckState = async (e, name) => {
        await this.setState({ [name]: e })
    }




    // select location 
    addMarker = async (coordinates) => {
        await this.setState({
            markers: [{ latitude: coordinates[0], longitude: coordinates[1] }]
        });

    }

    changeHand = (coordinates) => {
        console.log('hand')
        this.setState({
            markers: [{ latitude: coordinates[0], longitude: coordinates[1] }]
        });
    }


    // change map size and arrow 
    _mapHeightChanger = () => {
        if (this.state.arrowDown) {
            this.setState({
                mapHeight: 300,
                mapWidth: Dimensions.get('window').width,
                moreText: 'کوچکتر',
                arrowDown: false
            })
        } else {
            this.setState({
                mapHeight: 200,
                mapWidth: Dimensions.get('window').width - 50,
                moreText: 'بزرگتر',
                arrowDown: true
            })
        }

    }





    // write condition and set condition to state
    _writeCondition = async (e) => {
        await this.setState({
            condition: e.replace(/^[a-zA-Z şüöı]+$/, '')
        })
    }


    // add condition
    _addCondition = async () => {

        if (this.state.condition !== '') {
            // push written condition to global conditions
            await conditions.push(this.state.condition)

            // set global conditions to state
            //clear input
            await this.setState({
                conditions: conditions,
                condition: ''
            })
        }
    }



    //delete coditions
    _deleteCondition = async (index) => {
        // delete condition from globalk conditions
        await conditions.splice(index, 1)

        // set global condition to state
        await this.setState({
            conditions: conditions
        })
    }



    // address - area - title - about vila
    _changeInput = (e, name) => {
        this.setState({
            [name]: e.replace(/^[a-zA-Z şüöı]+$/, '')
        })
    }


    //select capacity of rooms beds ...
    _setProps = async (name, val) => {
        await this.setState({
            [name]: val
        })
    }



    //select province and city
    _selectProvince = async (method, methodModal, name, i) => {
        await this.setState({
            [method]: name,
            [methodModal]: false,
            provinceNumber: i,
            city: '',
            provinceWidth: '48%',
            cityWidth: '48%'
        })
    }

    //select province and city
    _selectCity = async (method, methodModal, object) => {

        await this.setState({
            [method]: object['city'],
            [methodModal]: false,
            markers: [{ latitude: object.coordinate[0]['latitude'], longitude: object.coordinate[0]['longitude'] }],

        })
        this.refs['MAP'].animateToRegion({
            latitude: object.coordinate[0]['latitude'],
            longitude: object.coordinate[0]['longitude'],
            latitudeDelta: 0,
            longitudeDelta: 0,
        }, 1000)





    }



    _onMapDrag = () => {
        console.log('drag')

        if (!this.state.mapIsChanging) {
            this.setState({
                mapIsChanging: true,
                markerScale: .9,
                markerTop: -10,
                markerHeight: 25,
                markerWidth: 25
            })
        }
    }


    _mapChangeComplete = async (e) => {
        console.log('com')

        if (this.state.mapIsChanging) {
            await this.setState({
                mapIsChanging: false,
                markerScale: 1,
                markerTop: 0,
                markerHeight: 10,
                markerWidth: 10,

                markers: [{ latitude: e.latitude, longitude: e.longitude }],
                finalPosition: {
                    latitude: e.latitude,
                    longitude: e.longitude
                }

            })
        }
        console.log(this.state.finalPosition)
    }






    render() {


        let { markerScale, markerTop, markerWidth, markerHeight } = this.state


        // map marker
        const marker = (
            this.state.markers.map(marker => (
                <Marker coordinate={marker} key={marker.latitude}>
                    <Icon name="map-marker" size={45} color="yellow" />
                </Marker>
            ))
        )




        return (


            <View style={{ paddingBottom: 100 }} >
                <Header title="ویلای جدید"
                    icon="arrow-right"
                    color="#636363"
                    press={() => Actions.pop()}
                />


                <ScrollView contentContainerStyle={{ position: 'relative', zIndex: 99 }} >
                    <KeyboardAvoidingView style={styles.EditDetails} behavior="padding" enabled>







                        <View style={styles.edit_details_1} >
                            <View style={styles.edit_details_details} >
                                <Text style={styles.titles} >عکس ها</Text>
                                <View style={styles.add_images_boxes} >

                                    <View style={styles.image_container}>
                                        <ScrollView contentContainerStyle={{
                                            flexDirection: 'row-reverse',
                                            flexWrap: 'wrap',
                                            minWidth: '100%',
                                            justifyContent: 'flex-start'
                                        }}>
                                            {this.state.images ? this.state.images.map(i => <TouchableOpacity onPress={() => this._deleteImage(i.uri)} key={i.uri}>{this.renderAsset(i)}</TouchableOpacity>) : null}
                                            <TouchableOpacity style={styles.images_box} onPress={this.pickMultiple.bind(this)} activeOpacity={.8} >
                                                <Icon style={styles.select_image} name="image-outline" />
                                                <Text style={{
                                                    fontSize: 10,
                                                    fontFamily: 'ISBold',
                                                    color: '#636363'
                                                }} >افزودن عکس</Text>
                                            </TouchableOpacity>
                                        </ScrollView>

                                    </View>

                                </View>
                            </View>


                        </View>

                        {/* date */}
                        <View style={styles.edit_details_1} >
                            <Text style={styles.titles}> اطلاعات</Text>

                            <TextInput
                                placeholderStyle={{ fontFamily: 'ISBold' }}
                                placeholderTextColor="#999"
                                placeholder="عنوان"
                                style={styles.input}
                                onChangeText={(e) => this._changeInput(e, 'title')}
                                value={this.state.title}
                            />

                            <Textarea
                                containerStyle={styles.textareaContainer}
                                style={styles.text_area}
                                onChangeText={(e) => this._changeInput(e, 'abouteVilla')}
                                defaultValue=""
                                placeholder={'درباره ویلا'}
                                placeholderTextColor={'#999'}
                                underlineColorAndroid={'transparent'}
                                value={this.state.abouteVilla}
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
                            }} >
                                {/* c o n d i t i o n s  */}
                                {
                                    this.state.conditions.length !== 0 ?
                                        this.state.conditions.map((condition, index) => {
                                            return <View style={styles.conditions_parent} key={Math.random()} >
                                                <TouchableOpacity style={styles.delete_condition} key={index} onPress={() => this._deleteCondition(index)}>
                                                    <Icon color="#636363" size={24} name="close" />
                                                </TouchableOpacity>
                                                <Text style={styles.condition_text} >
                                                    {(index + 1) + '. ' + condition}
                                                </Text>
                                            </View>
                                        }) :
                                        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                            <Icon size={32} color="#ccc" name="file-document-outline" />
                                            <Text style={{
                                                fontFamily: 'ISMedium',
                                                fontSize: 14,
                                                color: '#ccc'
                                            }}>هنوز چیزی درج نکرده اید </Text>
                                        </View>
                                }
                            </View>

                            <TextInput
                                placeholderStyle={{ fontFamily: 'ISBold' }}
                                placeholderTextColor="#999"
                                placeholder="میتوانید شرایط خود را درج کنید "
                                style={styles.input}
                                onChangeText={(e) => this._writeCondition(e)}
                                value={this.state.condition}
                            />
                            <GradientButton
                                width="100%"
                                press={this._addCondition}
                                activeOpacity={.6}
                                color_1="#bbb"
                                color_2="#d8d8d8"
                                height={50}
                                borderRadius={5}
                                textColor="#fff"
                                size={14}
                                title="افزودن"
                                top={10}
                                bottom={0}
                            />
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

                        <View style={{ marginBottom: 20 }}>
                            {/* single bed */}
                            <View style={styles.capacity}>
                                <Counter
                                    name="singleBed"
                                    _returnValue={this._setProps}
                                    val={this.state.singleBed} />
                                <View style={{ justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }} >
                                    <Text style={styles.counters_title} >تختخواب یکنفره</Text>
                                    <Icon style={{ marginLeft: 10 }} size={22} name="bed-empty" color="#636363" />
                                </View>
                            </View>

                            {/* double bed */}
                            <View style={styles.capacity}>
                                <Counter
                                    name="doubleBed"
                                    _returnValue={this._setProps}
                                    val={this.state.doubleBed} />
                                <View style={{ justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }} >
                                    <Text style={styles.counters_title} >تختخواب دونفره</Text>
                                    <Icon style={{ marginLeft: 10 }} size={22} name="bed-empty" color="#636363" />
                                </View>
                            </View>

                            {/*  people capacity  */}
                            <View style={styles.capacity}>
                                <Counter
                                    name="capacity"
                                    _returnValue={this._setProps}
                                    val={this.state.capacity} />
                                <View style={{ justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }} >
                                    <Text style={styles.counters_title} >ظرفیت </Text>
                                    <Icon style={{ marginLeft: 10 }} size={22} name="account-group" color="#636363" />
                                </View>
                            </View>

                            {/* rooms  */}
                            <View style={styles.capacity}>
                                <Counter
                                    name="rooms"
                                    _returnValue={this._setProps}
                                    val={this.state.rooms} />
                                <View style={{ justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }} >
                                    <Text style={styles.counters_title} >تعداد اتاق </Text>
                                    <Icon style={{ marginLeft: 10 }} size={22} name="door" color="#636363" />
                                </View>
                            </View>

                            {/* area meters! */}
                            <View style={styles.capacity}>
                                <TextInput
                                    keyboardType='numeric'
                                    maxLength={3}
                                    placeholderStyle={{ fontFamily: 'ISBold' }}
                                    placeholderTextColor="#999"
                                    placeholder="متر مربع"
                                    style={{
                                        textAlign: 'center',
                                        borderRadius: 5,
                                        width: '50%',
                                        height: '100%',
                                        backgroundColor: '#fff',
                                        color: '#636363',
                                        fontFamily: 'ISFBold',
                                        fontSize: 18
                                    }}
                                    onChangeText={(e) => this._changeInput(e, 'area')}
                                    value={this.state.area}
                                />
                                <View style={{ justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }} >
                                    <Text style={styles.counters_title} >متراژ</Text>
                                    <Icon style={{ marginLeft: 10 }} size={22} name="altimeter" color="#636363" />
                                </View>
                            </View>

                        </View>


                        {/* A D D R E S S  */}
                        <View style={styles.edit_details_1} >
                            <Text style={styles.titles}>آدرس و موقعیت </Text>

                            {/* places */}
                            <View style={{ flexDirection: 'row-reverse', width: '100%', justifyContent: 'space-between', marginTop: 10 }}>
                                <View style={[styles.modal_boxes, { width: this.state.provinceWidth }]} >
                                    <View style={{ width: '100%', height: 50, borderRadius: 5, justifyContent: 'center' }}>
                                        <TouchableOpacity onPress={() => {
                                            this.setState({ provinceModal: true })
                                        }}>
                                            <Text
                                                style={{ fontSize: 12, color: '#636363', padding: 10, fontFamily: 'ISBold', width: '100%' }}
                                            >
                                                {
                                                    this.state.province !== '' ? this.state.province : "استان را انتخاب کنید"
                                                }
                                            </Text>
                                        </TouchableOpacity>
                                    </View>

                                    {/* province modal  */}
                                    <Modal
                                        animationType="fade"
                                        transparent={true}
                                        visible={this.state.provinceModal}
                                        onRequestClose={() => {
                                            this.setState({ provinceModal: false })
                                        }}>
                                        <TouchableOpacity style={styles.picker_modal} activeOpacity={1} onPress={() => this.setState({ provinceModal: false })} >
                                            <View style={styles.picker_box}>
                                                <ScrollView
                                                    contentContainerStyle={{
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                    style={{ width: '100%' }}>
                                                    {
                                                        this.state.provinces.map((province, i) => {
                                                            return < TouchableOpacity
                                                                key={i}
                                                                style={styles.picker_button}
                                                                activeOpacity={.3}
                                                                onPress={() => this._selectProvince('province', 'provinceModal', province, i)}>
                                                                <Text style={styles.picker_item} >{province}</Text>
                                                            </TouchableOpacity>
                                                        })
                                                    }
                                                </ScrollView>
                                            </View>
                                        </TouchableOpacity>
                                    </Modal>
                                </View>


                                {/* select city */}
                                {
                                    this.state.province !== '' ?
                                        <View style={[styles.modal_boxes, { width: this.state.cityWidth }]} >
                                            <View style={{ width: '100%', height: 50, borderRadius: 5, justifyContent: 'center' }}>
                                                <TouchableOpacity onPress={() => {
                                                    this.setState({ cityModal: true })
                                                }}>
                                                    <Text
                                                        style={{ fontSize: 12, color: '#636363', padding: 10, fontFamily: 'ISBold', width: '100%' }}
                                                    >
                                                        {
                                                            this.state.city !== '' ? this.state.city : "شهر را انتخاب کنید"
                                                        }
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>

                                            {/* city modal */}
                                            <Modal
                                                animationType="fade"
                                                transparent={true}
                                                visible={this.state.cityModal}
                                                onRequestClose={() => {
                                                    this.setState({ cityModal: false })
                                                }}>
                                                <TouchableOpacity style={styles.picker_modal} activeOpacity={1} onPress={() => this.setState({ cityModal: false })} >
                                                    <View style={styles.picker_box}>
                                                        <ScrollView
                                                            contentContainerStyle={{
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                            }}
                                                            style={{ width: '100%' }}>
                                                            {
                                                                this.state.cities[this.state.provinceNumber].map((object, i) => {
                                                                    return < TouchableOpacity
                                                                        key={i}
                                                                        style={styles.picker_button}
                                                                        activeOpacity={.3}
                                                                        onPress={() => this._selectCity('city', 'cityModal', object)}>
                                                                        <Text style={styles.picker_item} >{object['city']}</Text>
                                                                    </TouchableOpacity>
                                                                })
                                                            }
                                                        </ScrollView>
                                                    </View>
                                                </TouchableOpacity>
                                            </Modal>
                                        </View> : null
                                }
                            </View>


                            <TextInput
                                placeholderStyle={{ fontFamily: 'ISBold' }}
                                placeholderTextColor="#999"
                                placeholder="آدرس خود را وارد کنید  "
                                style={styles.input}
                                value={this.state.address}
                                onChangeText={(e) => this._changeInput(e, 'address')}
                            />
                        </View>





                        <View style={{
                            height: this.state.mapHeight,
                            overflow: 'hidden',
                            backgroundColor: '#fff',
                            width: this.state.mapWidth,
                            zIndex: 10,
                            marginTop: -10,
                            borderRadius: 5
                        }}
                        >


                            <MapView
                                ref={'MAP'}
                                style={{ flex: 1 }}
                                mapType="hybrid"
                                zoomEnabled={true}
                                zoomTapEnabled={true}
                                zoomControlEnabled={true}
                                minZoomLevel={8}
                                maxZoomLevel={20}
                                initialRegion={this.state.initialPosition ? this.state.initialPosition : this.state.initialPositionInstead}
                                showsUserLocation={true}
                                showsMyLocationButton={true}
                                followsUserLocation={true}
                                showsCompass={true}
                                showsPointsOfInterest={true}
                                pitchEnabled={false}
                                onRegionChangeComplete={(e) => this._mapChangeComplete(e)}
                                onPanDrag={this._onMapDrag}
                            >
                                {/* {marker} */}
                            </MapView>

                            {/* marker on center */}
                            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }} >
                                <View style={{ width: 100, height: 100, justifyContent: 'center', alignItems: 'center', marginTop: -40 }} >
                                    <Icon style={{
                                        transform: [{ scale: markerScale }],
                                        top: markerTop,
                                        zIndex: 9,
                                    }}
                                        name="map-marker"
                                        size={45}
                                        color="#a52d53" />
                                    <View
                                        style={{
                                            width: markerWidth,
                                            height: markerHeight,
                                            backgroundColor: '#50102459',
                                            borderRadius: 30,
                                            top: -10,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Text style={{
                                            width: 3,
                                            height: 3,
                                            borderRadius: 10,
                                            backgroundColor: '#a52d53'
                                        }} ></Text>
                                    </View>
                                </View>
                            </View>
                        </View>


                        <TouchableOpacity
                            style={{ marginVertical: 10, alignItems: 'center' }}
                            onPress={this._mapHeightChanger}
                            onFocus={() => console.log(0)}>
                            <Text style={{
                                fontSize: 13,
                                fontFamily: 'ISBold',
                                color: '#ccc',
                                marginVertical: 2
                            }} >{this.state.moreText}</Text>
                            {this.state.arrowDown ? arrowDown : arrowUp}
                        </TouchableOpacity>







                        <GradientButton
                            width="90%"
                            press={() => console.log(this.state)}
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
            </View >




        );
    }
}

const styles = ({


    EditDetails: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
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
        height: 120,
        padding: 10,
        marginTop: 50,
    },
    edit_details_1: {
        width: Dimensions.get('window').width - 50,
        flexDirection: 'column',
        paddingVertical: 20,
        borderRadius: 5,
    },
    edit_details_details: {
        flexDirection: 'column',
        width: '100%',

    },
    titles: {
        width: '100%',
        fontSize: 15,
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
        marginTop: 10,
        padding: 20,
        borderRadius: 5,
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
        width: '100%',
    },
    images_box: {
        width: (Dimensions.get('window').width - 82) / 3,
        height: (Dimensions.get('window').width - 82) / 3,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#ececec',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        resizeMode: 'cover',
    },

    images: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10
    },
    select_image: {
        color: '#636363',
        fontSize: 50,
        // resizeMode: 'cover',
        borderRadius: 10
    },

    input: {
        textAlign: 'right',
        borderRadius: 5,
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        color: '#636363',
        marginTop: 5,
        paddingRight: 10,
        marginTop: 10,
        fontFamily: 'ISFBold',
        fontSize: 12
    },

    textareaContainer: {
        height: 180,
        backgroundColor: '#fff',
        textAlign: 'right',
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
        fontFamily: 'ISFBold',
        fontSize: 12

    }
    ,
    image_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        // padding: 10,

    },
    button: {
        backgroundColor: 'blue',
        marginBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    delete_condition: {
        width: 30,
        justifyContent: 'center',
        height: 30,
        alignItems: 'center'
    },
    conditions_parent: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5

    },
    condition_text: {
        fontSize: 12,
        fontFamily: 'ISMedium',
        color: '#333',
        textAlign: 'right',
    },
    capacity: {
        textAlign: 'right',
        borderRadius: 5,
        width: Dimensions.get('window').width - 50,
        height: 50,
        backgroundColor: '#fff',
        color: '#636363',
        marginTop: 5,
        paddingHorizontal: 10,
        marginTop: 10,
        fontFamily: 'ISBold',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    counters_title: {
        fontFamily: 'ISBold',
        fontSize: 12,
        color: '#333'
    },
    modal_boxes: {
        backgroundColor: '#fff',
        borderRadius: 5
    },
    picker_modal: {
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    picker_box: {
        width: '90%',
        paddingHorizontal: 5,
        borderRadius: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50
    },
    picker_item: {
        fontFamily: 'ISBold',
        paddingVertical: 10,
        fontSize: 12,
        textAlign: 'center',
        color: '#333'
    },
    picker_button: {
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
        width: '100%',
        backgroundColor: '#fff',
        padding: 5
    },







})