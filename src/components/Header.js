import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



{/* <Header title="درخواست ها"
        icon="arrow"
        color="#636363"
        press={()=>this._press}/> */}


const Header = (props) => (

    <View style={styles.menu} >
        <Text style={styles.title} >{props.title}</Text>
        <TouchableOpacity style={styles.menu_icon} onPress={props.press}>
            <Icon size={36} name={props.icon} color={props.color} />
        </TouchableOpacity>
    </View>
)

export default Header;

const styles = ({

    menu: {
        backgroundColor: '#f3f3f3',
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

})



