import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../../config/Colors';

function BottomTab({ props }) {

    return (
        <View style={{ borderTopLeftRadius: RFPercentage(4), borderTopRightRadius: RFPercentage(4), flexDirection: 'row', alignItems: 'center', position: 'absolute', justifyContent: 'center', bottom: 0, width: "100%", height: RFPercentage(8), backgroundColor: Colors.vanilla }}>
            <View style={{ width: "60%", flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', }} >

                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("MapScreen")} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: RFPercentage(3.2), height: RFPercentage(4.4) }} source={require('../../../assets/images/loc.png')} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("RewardScreen")} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: RFPercentage(3.5), height: RFPercentage(4.1) }} source={require('../../../assets/images/shop.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default BottomTab;