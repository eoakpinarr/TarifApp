import React from "react";
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

const Loading = () => {
    return (
            <LottieView
                autoPlay
                source={require('../../../assets/loading.json')}
            />
    )
}

export default Loading;