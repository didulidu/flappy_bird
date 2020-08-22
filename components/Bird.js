import React from "react";
import { View, Image } from "react-native";

const Bird = ({size, body, color}) => {
    
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
                }}>
            <Image source={require('../assets/images/bird.png')} style={{width, height}}/>
                </View>
    );
}

export default Bird;