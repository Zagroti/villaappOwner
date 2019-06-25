import React from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import GradientButton from './GradientButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';






const NoFlat = (props) => (

    <View style={styles.NoFlat}>
        <Icon size={50} name="map-marker" color="#eee" />
        <Text style={styles.NoFlatTitle}>چیزی برای نمایش وجود ندارد</Text>
        <Text style={styles.NoFlatText}>برای درخواست دکمه ی نشانه گر را فشار دهید</Text>
        <GradientButton
            width="90%"
            press={props.press}
            activeOpacity={.6}
            color_1="#46add8"
            color_2="#18749a"
            height={50}
            borderRadius={50}
            textColor="#fff"
            size={16}
            title="ویلای خودتو اضافه کن"
        />
    </View>
)

export default NoFlat;

const styles = ({
    NoFlat: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width - 50,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
    },

    marker: {
        marginBottom: 20,
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },

    NoFlatTitle: {
        fontSize: 16,
        fontFamily: 'ISBold',
        color: '#333'
    },
    NoFlatText: {
        fontSize: 12,
        fontFamily: 'ISBold',
        color: '#555',
        marginBottom: 30
    },

})
