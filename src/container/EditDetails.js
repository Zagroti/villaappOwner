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
    Picker,
    TouchableOpacity,
    Alert,
    NativeModules,
    ImageBackground
} from 'react-native';


import Mapir from 'mapir-react-native-sdk'
import { Actions } from 'react-native-router-flux';
import Textarea from 'react-native-textarea';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



//components 
import GradientButton from '../components/GradientButton'
import CheckboxIcon from '../components/CheckboxIcon';



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
                { latitude: 51.422548, longitude: 35.732573 },
            ],
            mapHeight: 200,
            mapWidth: '90%',
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
            conditions: conditions

        }


    }



    //close modal
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }





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
        // console.log(this.state)
    }



    componentDidMount() {
        // {
        //     PermissionsAndroid.requestMultiple(
        //         [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        //         PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION],
        //         {
        //             title: 'Give Location Permission',
        //             message: 'App needs location permission to find your position.'
        //         }
        //     ).then(granted => {
        //         console.log(granted);
        //         resolve();
        //     }).catch(err => {
        //         console.warn(err);
        //         reject(err);
        //     });
        // }

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
                mapHeight: 400,
                mapWidth: Dimensions.get('window').width - 10,
                moreText: 'کوچکتر',
                arrowDown: false
            })
        } else {
            this.setState({
                mapHeight: 200,
                mapWidth: '90%',
                moreText: 'بزرگتر',
                arrowDown: true
            })
        }

    }


    // picker select city 
    _changeCity = async (item) => {
        switch (item) {
            case 'amol':
                await this.setState({
                    markers: [
                        { latitude: 51.22, longitude: 35.33 },
                    ],
                    city: item
                })
                break;

            case 'babol':
                await this.setState({
                    markers: [
                        { latitude: 52.422548, longitude: 35.732573 },
                    ],
                    city: item
                })
                break;
            case 'babolsar':
                await this.setState({
                    markers: [
                        { latitude: 52.01, longitude: 35.732573 },
                    ],
                    city: item
                })
                break;
            default:
                break;
        }



    }



    // write condition and set condition to state
    _writeCondition = async (e) => {

        await this.setState({
            condition: e.replace(/^[a-zA-Z şüöı]+$/, '').trim()
        })
    }

    // add condition
    _addCondition = async () => {

        if (this.state.condition !== '' || this.state.condition !== null) {
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




    render() {

        // map marker
        const mark = this.state.markers.map(markers =>
            (<Mapir.Marker
                id={'2'}
                key={markers.latitude}
                coordinate={[markers.latitude, markers.longitude]}

            />))


        return (


            <View>
                <View style={styles.menu} >
                    <Text style={styles.title} >ویلای جدید</Text>
                    <TouchableOpacity style={styles.humberger} onPress={() => Actions.pop()}>
                        <Icon size={36} name="arrow-right" color="#636363" />
                    </TouchableOpacity>
                </View>
                <ScrollView >
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
                                placeholderStyle={{
                                    fontFamily: 'ISBold',
                                    color: '#ccc'
                                }}
                                value={this.state.condition}
                                placeholder="میتوانید شرایط خود را درج کنید "
                                style={styles.input}
                                onChangeText={(e) => this._writeCondition(e)}
                            />
                            <GradientButton
                                width="100%"
                                press={this._addCondition}
                                activeOpacity={.6}
                                color_1="#ddd"
                                color_2="#ccc"
                                height={50}
                                borderRadius={5}
                                textColor="#fff"
                                size={14}
                                title="افزودن "
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



                        <View style={styles.edit_details_1} >
                            <Text style={styles.titles}>آدرس و موقعیت </Text>
                        </View>
                        <View
                            style={{
                                height: 50,
                                width: '90%',
                                fontFamily: 'IS',
                                borderWidth: 1,
                                borderColor: '#eee',
                                backgroundColor: '#fff',
                                marginBottom: 20,
                                borderRadius: 5
                            }}
                        >

                            <Picker
                                selectedValue={this.state.city}
                                onValueChange={(itemValue) => this._changeCity(itemValue)}>
                                <Picker.Item label="آمل" value='amol' />
                                <Picker.Item label="بابل" value='babol' />
                                <Picker.Item label="بابلسر" value='babolsar' />
                            </Picker>
                        </View>


                        <View style={{
                            height: this.state.mapHeight,
                            overflow: 'hidden',
                            borderWidth: 2,
                            borderColor: '#fff',
                            borderRadius: 10,
                            backgroundColor: '#fff',
                            width: this.state.mapWidth
                        }} >
                            <Mapir
                                accessToken={'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM5ZjlmMWZhNDA4YzM0ODI2ZjcxZGI5YTdlM2U2ZmVjNDEzMzNmMDU0MjVhM2MzOTM0NmMwNTlkMzBiMzcyYjA5YzU1OGZjOGU4NTJmNWJhIn0.eyJhdWQiOiJteWF3ZXNvbWVhcHAiLCJqdGkiOiIzOWY5ZjFmYTQwOGMzNDgyNmY3MWRiOWE3ZTNlNmZlYzQxMzMzZjA1NDI1YTNjMzkzNDZjMDU5ZDMwYjM3MmIwOWM1NThmYzhlODUyZjViYSIsImlhdCI6MTU1OTQ1NTIzMiwibmJmIjoxNTU5NDU1MjMyLCJleHAiOjE1NTk0NTg4MzIsInN1YiI6IiIsInNjb3BlcyI6WyJiYXNpYyIsImVtYWlsIl19.JNowwSPWaoVoJ1Omirk9OTtkDySsNL91nP00GcCARdM-YHoTQYw3NZy3SaVlAsbafO9oPPvlVfhNIxPIHESACZATutE3tb7RBEmQGEXX-8G7GOSu8IzyyLBmHaQe75LtisgdKi-zPTGsx8zFv0Acn6HrDDxFrKFNtmI85L3jos_GVxvYYhHWKAez8mbJRHcH1b15DrwgWAhCjO2p_HqpuGLdRF1l03J6HsOnJLMid2997g7iAVTOa8mt2oaEPvmwA_f6pwFZSURqw-RJzdN_R8IEmtqWQq5ZNTEppVaV82yuwfnSmrb0_Sak2hfBIiLwQeCMsnfhU_CvUbE_1rukmQ'}
                                zoomLevel={6}
                                centerCoordinate={[51.422548, 35.732573]}
                                showUserLocation={true}
                                onPress={e => this.addMarker(e.geometry.coordinates)}
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
                            {this.state.arrowDown ? arrowDown : arrowUp}
                        </TouchableOpacity>







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
            </View>




        );
    }
}

const styles = ({


    EditDetails: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
    },
    menu: {
        backgroundColor: '#f6f6f6',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 60,
        paddingHorizontal: 20,
        paddingTop: 10,
        width: '100%'
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
        resizeMode: "cover",
        borderRadius: 10
    },
    select_image: {
        color: '#636363',
        fontSize: 50,
        resizeMode: "cover",
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
        fontFamily: 'ISBold',
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
    }







})