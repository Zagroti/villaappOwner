import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const uncheck = <Icon  size={22} name="check-circle-outline" color="#bbb" />
const check = <Icon  size={22} name="check-circle-outline" color="#6FCF97" />

export default class CheckboxIcon extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            check: false,
            name: this.props.name
        }
    }

    _check = async () => {
        await this.setState((prevState) => {
            return { check: !prevState.check };
        });
        this.props.changeState(this.state.check ,this.state.name )
    }
    render() {
        return (
            <TouchableOpacity
                style={{
                    width: '50%',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginBottom: 5,
                    alignItems:'center'
                }}
                onPress={this._check}
                activeOpacity={.6}>
                <Text
                    style={{
                        fontSize: 12,
                        fontFamily: 'ISMedium',
                        color: '#333',
                    }}
                >{this.props.title}</Text>

                <Text style={{marginLeft:5}}>
                    {this.state.check ? check : uncheck}
                </Text>
            </TouchableOpacity>
        )
    }
}

{/* <Checkbox 
    title="ممممم"
    checkBoxName={this.state.check}
/> */}

