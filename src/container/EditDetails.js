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
    Picker,
    TouchableOpacity,
    Alert,
    NativeModules,
    ImageBackground
} from 'react-native';


import Mapir from 'mapir-react-native-sdk'
import { Actions } from 'react-native-router-flux';
import Textarea from 'react-native-textarea';



//components 
import GradientButton from '../components/GradientButton'
import CheckboxIcon from '../components/CheckboxIcon';
import CheckboxText from '../components/CheckboxText';



// import ImagePicker from 'react-native-image-picker';

var ImagePicker = NativeModules.ImageCropPicker;



// images for upload
var imgs = []
var dImgs = []





const arrowDown = require('./../../Assets/Images/arrow-down.png')
const arrowUp = require('./../../Assets/Images/arrow-up.png')

export default class EditDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            markers: [
                { latitude: 51.422548, longitude: 35.732573 },
            ],
            mapHeight: 200,
            mapWidth: Dimensions.get('window').width - 50,
            moreText: 'بیشتر',
            arrowDown: true,

            image: null,
            images: null,

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




    // pickMultiple() {

    //     ImagePicker.openPicker({
    //         multiple: true,
    //         waitAnimationEnd: false,
    //         includeExif: true,
    //         forceJpg: true,
    //         mediaType: 'photo'
    //     }).then(images => {
    //         this.setState({
    //             image: null,
    //             images: images.map(i => {
    //                 console.log('received image', i);
    //                 return { uri: i.path, width: i.width, height: i.height, mime: i.mime };
    //             })
    //         });
    //     }).catch(e => false);
    // }

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
            console.log('received image', imgs);

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
                <Image style={{
                    width: 15,
                    height: 15,
                    resizeMode: 'cover',
                }} source={require('./../../Assets/Images/delete.png')} />
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
        // console.log(this.state)
    }



    componentDidMount() {
        {
            PermissionsAndroid.requestMultiple(
                [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION],
                {
                    title: 'Give Location Permission',
                    message: 'App needs location permission to find your position.'
                }
            ).then(granted => {
                console.log(granted);
                resolve();
            }).catch(err => {
                console.warn(err);
                reject(err);
            });
        }


    render() {


    }

    // select location 
    addMarker = async (coordinates) => {
        await this.setState({
            markers: [{ latitude: coordinates[0], longitude: coordinates[1] }]
        });

    }


    // change map size and arrow 
    _mapHeightChanger = () => {
        if (this.state.arrowDown) {
            this.setState({
                mapHeight: 300,
                mapWidth: Dimensions.get('window').width - 10,
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



    render() {

        // map marker
        const mark = this.state.markers.map(markers =>
            (<Mapir.Marker
                id={'2'}
                key={markers.latitude}
                coordinate={[markers.latitude, markers.longitude]}
            />))


        return (

            <ScrollView >
                <KeyboardAvoidingView style={styles.EditDetails} behavior="padding" enabled>

                    <Text style={styles.title} >ویلای جدید</Text>

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
                                            <Image style={styles.select_image} source={require('../../Assets/Images/picture.png')} />
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
                    </View>
                    <Picker
                        selectedValue={this.state.markers}
                        style={{ height: 50, width: '90%' ,fontFamily:'IS', borderWidth:1, borderColor:'#eee' }}
                        onValueChange={(itemValue) =>{
                            this.setState({ markers: itemValue })
                        }
                        }>
                        <Picker.Item label="آمل" style={{ fontFamily:'IS' }} value={[{ latitude: 52, longitude: 35 }]} />
                        <Picker.Item label="بابل" value={[{ latitude: 52.1, longitude: 35 }]} />
                        <Picker.Item label="بابلسر" value={[{ latitude: 52.2, longitude: 35 }]} />
                        <Picker.Item label="کیش" value={[{ latitude: 52.4, longitude: 35 }]}/>
                    </Picker>

                    <View style={{
                        height: this.state.mapHeight,
                        overflow: 'hidden',
                        borderWidth: 2,
                        borderColor: '#fff',
                        borderRadius: 10,
                        shadowColor: "#f7f7f7",
                        shadowOpacity: .3,
                        backgroundColor: '#fff',
                        elevation: 1,
                        width: this.state.mapWidth
                    }}>

                        <Mapir
                            accessToken={'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM5ZjlmMWZhNDA4YzM0ODI2ZjcxZGI5YTdlM2U2ZmVjNDEzMzNmMDU0MjVhM2MzOTM0NmMwNTlkMzBiMzcyYjA5YzU1OGZjOGU4NTJmNWJhIn0.eyJhdWQiOiJteWF3ZXNvbWVhcHAiLCJqdGkiOiIzOWY5ZjFmYTQwOGMzNDgyNmY3MWRiOWE3ZTNlNmZlYzQxMzMzZjA1NDI1YTNjMzkzNDZjMDU5ZDMwYjM3MmIwOWM1NThmYzhlODUyZjViYSIsImlhdCI6MTU1OTQ1NTIzMiwibmJmIjoxNTU5NDU1MjMyLCJleHAiOjE1NTk0NTg4MzIsInN1YiI6IiIsInNjb3BlcyI6WyJiYXNpYyIsImVtYWlsIl19.JNowwSPWaoVoJ1Omirk9OTtkDySsNL91nP00GcCARdM-YHoTQYw3NZy3SaVlAsbafO9oPPvlVfhNIxPIHESACZATutE3tb7RBEmQGEXX-8G7GOSu8IzyyLBmHaQe75LtisgdKi-zPTGsx8zFv0Acn6HrDDxFrKFNtmI85L3jos_GVxvYYhHWKAez8mbJRHcH1b15DrwgWAhCjO2p_HqpuGLdRF1l03J6HsOnJLMid2997g7iAVTOa8mt2oaEPvmwA_f6pwFZSURqw-RJzdN_R8IEmtqWQq5ZNTEppVaV82yuwfnSmrb0_Sak2hfBIiLwQeCMsnfhU_CvUbE_1rukmQ'}
                            zoomLevel={6}
                            centerCoordinate={[51.422548, 35.732573]}
                            showUserLocation={true}
                            onLongPress={e => this.addMarker(e.geometry.coordinates)}
                            style={{ flex: 1 }}
                        >
                            {mark}
                        </Mapir>
                    </View>


                    <TouchableOpacity
                        style={{ marginVertical: 10, alignItems: 'center' }}
                        onPress={this._mapHeightChanger}
                    >
                        <Text style={{
                            fontSize: 13,
                            fontFamily: 'ISBold',
                            color: '#ccc',
                            marginVertical: 2
                        }} >{this.state.moreText}</Text>
                        <Image source={this.state.arrowDown ? arrowDown : arrowUp} />
                    </TouchableOpacity>



                        
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
        width: '100%',
    },
    images_box: {
        width: (Dimensions.get('window').width  - 82) / 3 ,
        height: (Dimensions.get('window').width - 82) / 3  ,
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
    }







})