import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageSlider from 'react-native-image-slider';
import MapView, { Marker } from 'react-native-maps';


//components 
import GradientButton from './../components/GradientButton'



const arrowDown = <Icon style={{ top: -10 }} name="chevron-down" size={36} color="#ccc" />
const arrowUp = <Icon style={{ top: -10 }} name="chevron-up" size={36} color="#ccc" />


let parent_slider = {
    position: 'relative'
}
let image_slider_parent = {

}
let image_slider = {
    width: '100%',
    height: Dimensions.get('window').width,
    resizeMode: 'cover'
}

let body = {
    top: -50,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
}

let image_footer = {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 120,
    paddingBottom: 50
}




export default class Details extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            availabilityText: 'بیشتر',
            availability: false,
            aboutvilaText: 'بیشتر',
            aboutvila: false,
            conditionsText: 'بیشتر',
            conditions: false,
            sliderFullScreen: false,
            markers: [
                { latitude: 35.68925, longitude: 51.3890,  latitudeDelta: 0,longitudeDelta: 0, },
            ],

        }
    }



    //close modal
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    _backToResultImage = () => {
        Actions.ResultItemsPage()
    }


    // more funcion 
    _moreOptions = (item) => {
        if (item === 'availability') {
            if (!this.state.availability) {
                this.setState({
                    availabilityText: 'کمتر',
                    availability: true,
                })
            } else {
                this.setState({
                    availabilityText: 'بیشتر',
                    availability: false,
                })
            }
        } else if (item === 'aboutvila') {
            if (!this.state.aboutvila) {
                this.setState({
                    aboutvilaText: 'کمتر',
                    aboutvila: true,
                })
            } else {
                this.setState({
                    aboutvilaText: 'بیشتر',
                    aboutvila: false,
                })
            }

        } else if (item === 'conditions') {
            if (!this.state.conditions) {
                this.setState({
                    conditionsText: 'کمتر',
                    conditions: true,
                })
            } else {
                this.setState({
                    conditionsText: 'بیشتر',
                    conditions: false,
                })
            }

        }

    }

    // slide full screen
    _sliderFullScreen = () => {
        // full size
        if (this.state.sliderFullScreen) {
            this.setState({ sliderFullScreen: false })
            parent_slider = {
                position: 'relative',
            }

            image_slider_parent = {
            }
            image_slider = {
                width: '100%',
                height: Dimensions.get('window').width,
                resizeMode: 'cover'
            }
            body = {

                top: -50,
                borderTopRightRadius: 40,
                borderTopLeftRadius: 40,
                backgroundColor: '#fff',
                alignItems: 'center',
            }
            image_footer = {
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                position: 'absolute',
                bottom: 0,
                paddingHorizontal: 20,
                backgroundColor: 'rgba(0,0,0,0.5)',
                height: 120,
                paddingBottom: 50
            }

        } else {
            this.setState({ sliderFullScreen: true })
            parent_slider = {
                position: 'relative',
                backgroundColor: 'red',
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width,
                zIndex: 9999,
                top: 0,
                bottom: 0,
                right: 0,
                left: 0
            }
            image_slider_parent = {
                backgroundColor: '#000',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }
            image_slider = {
                width: '100%',
                height: '100%',
                resizeMode: 'contain'
            }
            body = {
                width: 0,
                height: 0,
            }
            image_footer = {
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                position: 'absolute',
                bottom: 0,
                paddingHorizontal: 20,
                backgroundColor: 'rgba(0,0,0,0.5)',
                height: 100,
                paddingBottom: 40
            }

        }
    }



    render() {
        const images = [
            'https://placeimg.com/640/640/nature',
            'https://placeimg.com/640/640/people',
            'https://placeimg.com/640/640/animals',
            'https://placeimg.com/640/640/beer',
        ];


        // map marker
        const marker = (
            this.state.markers.map(marker => (
                <Marker coordinate={marker} key={marker.latitude}>
                    <Icon name="map-marker" size={45} color="#a52d53" />
                </Marker>
            ))
        )



        return (
            <View style={{ flex: 1 }} >

                {!this.state.sliderFullScreen ?
                    <View style={{
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: 60,
                        padding: 20,
                        width: '100%',
                        position: 'absolute',
                        top: 0,
                        zIndex: 99999,
                        width: '100%'
                    }} >
                        <Text style={styles.owner_answer}>پذیرفته شده</Text>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#33333320',
                                padding: 10,
                                width: 50,
                                height: 50,
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                top: 10,
                                end: 10,

                            }} onPress={() => Actions.pop()} >
                            <Icon name="arrow-right" size={28} color="#fff" />

                        </TouchableOpacity>
                    </View> : null

                }
                <ScrollView style={styles.Details} >
                    <SafeAreaView style={parent_slider}>

                        <ImageSlider
                            loopBothSides
                            images={images}
                            customSlide={({ index, item, style, width }) => (
                                <TouchableOpacity key={index}
                                    activeOpacity={1}
                                    style={[style, image_slider_parent]}
                                    onPress={this._sliderFullScreen}>
                                    <Image source={{ uri: item }}
                                        style={image_slider} />
                                </TouchableOpacity>
                            )}
                            customButtons={(position, move) => (
                                <View style={image_footer}>
                                    <View style={{
                                        width: 100,
                                        textAlign: 'center',
                                        height: 30,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 20,
                                    }}>
                                        <Text style={{ color: '#fff', fontFamily: 'ISFBold', fontSize: 12 }}>{position + 1}  /  {images.length}</Text>
                                        <Icon name="image-area" style={{ marginLeft: 8 }} size={30} color="#fff" />
                                    </View>
                                    {
                                        !this.state.sliderFullScreen ?
                                            <View style={{
                                                backgroundColor: 'rgba(255,255,255,1)',
                                                textAlign: 'center',
                                                paddingHorizontal: 50,
                                                height: 30,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 20,
                                            }}>
                                                <Text style={{ color: '#333', fontSize: 16, fontFamily: 'ISFBold' }}>150,000 ت</Text>
                                            </View> :
                                            <TouchableOpacity
                                                style={{
                                                    backgroundColor: '#33333320',
                                                    padding: 10,
                                                    width: 50,
                                                    height: 50,
                                                    borderRadius: 30,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }} onPress={this._sliderFullScreen} >
                                                <Icon name="arrow-right" size={28} color="#fff" />
                                            </TouchableOpacity>
                                    }

                                </View>
                            )}
                        />
                    </SafeAreaView>


                    <View style={body}>

                        {/* icons */}
                        <View style={styles.vila_posibilities}>
                            <View style={styles.posibility}>
                                <Text style={styles.posibility_text}>اتاق 2</Text>
                                <View style={styles.posibility_icon_box} >
                                    <Icon size={15} name="door" color="#333" />
                                </View>
                            </View>
                            <View style={styles.posibility}>
                                <Text style={styles.posibility_text}>2 تختخواب </Text>
                                <View style={styles.posibility_icon_box} >
                                    <Icon size={15} name="hotel" color="#636363" />
                                </View>
                            </View>
                            <View style={styles.posibility}>
                                <Text style={styles.posibility_text}>1 نفر</Text>
                                <View style={styles.posibility_icon_box} >
                                    <Icon size={15} name="account-group" color="#636363" />
                                </View>
                            </View>
                            <View style={styles.posibility}>
                                <Text style={styles.posibility_text}>45 متر مربع</Text>
                                <View style={styles.posibility_icon_box} >
                                    <Icon size={15} name="city-variant-outline" color="#636363" />
                                </View>
                            </View>
                        </View>

                        <View style={styles.about_vila}>
                            <View style={styles.about_vila_first}>
                                <Text style={styles.about_vila_title} >در مورد ویلا</Text>
                                <Text style={styles.about_vila_text} >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Text>
                                {
                                    this.state.aboutvila ?
                                        <Text style={styles.about_vila_text} >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Text>
                                        : null
                                }
                            </View>

                            {/* more btn */}
                            <TouchableOpacity
                                style={{ marginVertical: 10, alignItems: 'center' }}
                                onPress={() => this._moreOptions('aboutvila')}
                            >
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'ISBold',
                                    color: '#ccc',
                                    marginVertical: 2
                                }}>{this.state.aboutvilaText}</Text>
                                {this.state.aboutvila ? arrowUp : arrowDown}
                            </TouchableOpacity>
                        </View>


                        <View style={styles.avilibiy} >
                            <Text style={styles.about_vila_title} >دسترسی </Text>
                            <View style={styles.avilibiy_first}>
                                <View style={styles.avilibiy_item} >
                                    <Text style={styles.avilibiy_text} >پارکینگ</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                </View>
                                <View style={styles.avilibiy_item} >
                                    <Text style={styles.avilibiy_text} >WiFi</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                </View>
                                <View style={styles.avilibiy_item} >
                                    <Text style={styles.avilibiy_text} >لباسشویی</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#bbb" />
                                </View>
                                <View style={styles.avilibiy_item} >
                                    <Text style={styles.avilibiy_text} >سیستم گرمایشی</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                </View>
                                <View style={styles.avilibiy_item} >
                                    <Text style={styles.avilibiy_text} >الکتریکی</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                </View>
                                <View style={styles.avilibiy_item} >
                                    <Text style={styles.avilibiy_text} >استخر</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                </View>
                                {
                                    this.state.availability ?
                                        <View style={styles.avilibiy_first}>
                                            <View style={styles.avilibiy_item} >
                                                <Text style={styles.avilibiy_text} >پارکینگ</Text>
                                                <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                            </View>
                                            <View style={styles.avilibiy_item} >
                                                <Text style={styles.avilibiy_text} >WiFi</Text>
                                                <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                            </View>
                                            <View style={styles.avilibiy_item} >
                                                <Text style={styles.avilibiy_text} >لباسشویی</Text>
                                                <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#bbb" />
                                            </View>
                                            <View style={styles.avilibiy_item} >
                                                <Text style={styles.avilibiy_text} >سیستم گرمایشی</Text>
                                                <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                            </View>
                                            <View style={styles.avilibiy_item} >
                                                <Text style={styles.avilibiy_text} >الکتریکی</Text>
                                                <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                            </View>

                                        </View> : null

                                }
                            </View>

                            {/* more btn */}
                            <TouchableOpacity
                                style={{ marginVertical: 10, alignItems: 'center' }}
                                onPress={() => this._moreOptions('availability')}
                            >
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'ISBold',
                                    color: '#ccc',
                                    marginVertical: 2
                                }} >{this.state.availabilityText}</Text>
                                {this.state.availability ? arrowUp : arrowDown}
                            </TouchableOpacity>


                        </View>

                        <View style={styles.conditions}>
                            <Text style={styles.about_vila_title}>شرایط</Text>

                            <Text style={styles.conditions_text}>1. آرام باشید و مراقب خودتان باشید.</Text>
                            <Text style={styles.conditions_text}>2. عاشق خودتان باشید .</Text>
                            <Text style={styles.conditions_text}>3. اتاق را کثیف نکنید </Text>
                            <Text style={styles.conditions_text}>4. اتاق را تمیز نکنید . </Text>


                            {this.state.conditions ?
                                <View>

                                    <Text style={styles.conditions_text}>5. خانوم بازی نکنید </Text>
                                    <Text style={styles.conditions_text}>6. داخل اتاق سیگار نکشید . </Text>
                                    <Text style={styles.conditions_text}>7. دقت کنید </Text>
                                    <Text style={styles.conditions_text}>8. نماز اول وقت را فراموش نکنید </Text>
                                    <Text style={styles.conditions_text} >9. خدا را ناظر بر اعمال خود بدانید </Text>
                                </View> : null}
                            <TouchableOpacity
                                style={{ marginTop: 10, alignItems: 'center' }}
                                onPress={() => this._moreOptions('conditions')}
                            >
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'ISBold',
                                    color: '#ccc',
                                }} >{this.state.conditionsText}</Text>
                                {this.state.conditions ? arrowUp : arrowDown}
                            </TouchableOpacity>

                        </View>



                        <View style={{ width: '100%', height: 250, marginTop: 20 }}>
                            <MapView
                                style={{ flex: 1 }}
                                mapType="hybrid"
                                zoomLevel={7}
                                scrollEnabled={false}
                                initialRegion={this.state.markers[0]}
                                maxZoomLevel={16}
                            >
                                {marker}
                            </MapView>
                        </View>

                        <View style={styles.save_button}
                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                        >

                            <GradientButton
                                width="80%"
                                press={() => Actions.EditDetails()}
                                color_1="#dfdfdf"
                                color_2="#f1f1f1"
                                height={50}
                                borderRadius={30}
                                textColor="#9e9e9e"
                                size={16}
                                title="ویرایش"
                            />
                        </View>


                    </View>
                </ScrollView >
            </View>




        );
    }
}

const styles = ({

    Details: {
        backgroundColor: "#fff",
        width: Dimensions.get('window').width,
        flex: 1,

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
        justifyContent: 'flex-start',
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
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 20,
        padding: 15

    },
    posibility: {
        width: '25%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    posibility_text: {
        fontSize: 10,
        fontFamily: 'ISFBold',
        color: '#333',
        marginRight: 5
    },
    posibility_icon_box: {
        backgroundColor: '#eee',
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
        fontSize: 15,
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
        justifyContent: 'flex-end'
    },

    avilibiy_item: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
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