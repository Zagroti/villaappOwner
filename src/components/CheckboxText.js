import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native';


const uncheck = {
    fontSize: 12,
        fontFamily: 'ISMedium',
        color: '#333',
}
const check = { 
    color: '#DC3053',
    fontSize: 12,
    fontFamily: 'ISMedium' 
}

export default class CheckboxText extends React.Component {

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
                    marginBottom:4
                  
                }}
                onPress={this._check}
                activeOpacity={.6}>

                <Text
                    style={this.state.check ? check : uncheck}
                >{this.props.title}</Text>

               
            </TouchableOpacity>
        )
    }
}

{/* <Checkbox 
    title="ممممم"
    checkBoxName={this.state.check}
/> */}

