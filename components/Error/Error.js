import React from "react";
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

const Error = () => {
    return (
            <LottieView
                autoPlay
                source={require('../../../assets/error.json')}
            />
    )
}

export default Error;