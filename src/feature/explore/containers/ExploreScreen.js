import { Text } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import Style from '../../../style/Style';
import Button from '../../../components/Button';

const ExploreScreen = () => {
    const goToAR = () => {
        console.log('Go To AR')
    };

    return (
        <View style={Style.p_4}>
            <Button onPress={goToAR}>
                Ir a AR
            </Button>
        </View>
    );
};

export default ExploreScreen;
