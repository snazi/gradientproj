import React from 'react';
import { Text, View } from 'react-native';
import {Header} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const CusHeader = (props) => {

    const { textStyle, viewStyle, putastyle }  = styles;

    return (
        <LinearGradient colors={['#61045f', '#20011f']}
        
        style={putastyle}
        >
            <View style={viewStyle}>
                <Text style={textStyle}>{props.headerText}</Text>
            </View>
        </LinearGradient>

    );
    
};

const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        borderRadius: 50
    },
    textStyle: {
        fontSize: 20
    },
    testStyle: {
        backgroundColor: '#3D6DCC',
                
    },
    putastyle: {
        overflow: 'hidden',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,  
    }
};

export { CusHeader };