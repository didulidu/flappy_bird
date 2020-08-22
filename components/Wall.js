import React from "react";
import { View, Image } from "react-native";

const Wall = ({size, body, color}) => {
    
    const width = size[0];
    const height = size[1];
    const x = body.position.x - width / 2;
    const y = body.position.y - height / 2;

    return (
        <View
            style={{
                position: "absolute",
                left: x,
                top: y,
                width: width,
                height: height,
                backgroundColor: color
            }}>
            <Image source={require('../assets/images/floor.png')}  resizeMode="contain"/>
        </View>
    );
}

export default Wall;