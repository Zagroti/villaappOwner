import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native';


const uncheck = require('./../../Assets/Images/checkgrey.png')
const check = require('./../../Assets/Images/check.png')

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
                    marginBottom: 5
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

                <Image style={{ marginLeft: 5 }}
                    source={this.state.check ? check : uncheck}>
                </Image>
            </TouchableOpacity>
        )
    }
}

{/* <Checkbox 
    title="ممممم"
    checkBoxName={this.state.check}
/> */}

