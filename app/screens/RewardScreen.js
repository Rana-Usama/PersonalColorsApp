import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from '../components/Screen';
import InputField from './../components/common/InputField';
import BottomTab from '../components/common/BottomTab';
import LoadingModal from './../components/common/LoadingModal';

//config
import Colors from '../config/Colors';

function RewardScreen(props) {

    const [indicator, showIndicator] = useState(false);

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Search",
            value: "",
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const handlePress = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "") {
            alert("Please fill all the feilds");
            showIndicator(false);
            return true;
        }

        try {
            // API integration will come here
        } catch (error) {
            alert("Error");
        }

        showIndicator(false);
    };

    return (
        <Screen style={styles.screen}>
            <LoadingModal show={indicator} />

            {/* input fields */}
            <View style={styles.inputFieldContainer}>
                {inputField.map((item, i) => (
                    <View key={i}>
                        <InputField
                            placeholder={item.placeholder}
                            backgroundColor={Colors.white}
                            borderWidth={0.3}
                            borderColor={Colors.grey}
                            secure={item.secure}
                            height={RFPercentage(6.5)}
                            borderRadius={RFPercentage(10)}
                            fontSize={RFPercentage(2)}
                            handleFeild={(text) => handleChange(text, i)}
                            value={item.value}
                            width={"90%"}
                        />
                    </View>
                ))}
            </View>

            {/* Types with Colors */}
            <View style={styles.buttonsContainer} >
                <TouchableOpacity activeOpacity={0.8} style={styles.button1Container} >
                    <View style={styles.resturantDot} />
                    <Text style={styles.resturantText} >
                        Resturant
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.button2Container} >
                    <View style={styles.parksDot} />
                    <Text style={styles.parksText} >
                        Parks
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.button3Container} >
                    <View style={styles.attractionsDot} />
                    <Text style={styles.attractionsText} >
                        Attractions
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Reward! */}
            <View style={styles.rewardContainer} >
                <ImageBackground style={styles.redImage} source={require('../../assets/images/red.png')} >
                    <Image source={require('../../assets/images/fries.png')} style={{ width: RFPercentage(5), height: RFPercentage(5) }} />
                </ImageBackground>
                <Text style={styles.congratsText} >
                    CONGRATS
                </Text>
                <View style={styles.subContainer} >
                    <Text style={{ fontSize: RFPercentage(3), fontFamily: 'ZCOOLKuaiLe_400Regular', color: Colors.black }} >
                        +
                    </Text>
                    <Image style={{ marginLeft: RFPercentage(1.6), width: RFPercentage(3), height: RFPercentage(3) }} source={require('../../assets/images/icon.png')} />
                    <Text style={{ marginLeft: RFPercentage(1.6), fontSize: RFPercentage(3), fontFamily: 'ZCOOLKuaiLe_400Regular', color: Colors.black }} >
                        70
                    </Text>
                </View>
                <Text style={{ marginTop: RFPercentage(3), color: Colors.black, fontSize: RFPercentage(1.9), fontFamily: 'ZCOOLKuaiLe_400Regular' }} >
                    You won a Lv 3 sovenior!
                </Text>
                <TouchableOpacity activeOpacity={0.8} style={styles.claimButtonContainer} >
                    <Text style={{ fontSize: RFPercentage(2.2), fontFamily: 'ZCOOLKuaiLe_400Regular', color: Colors.black }} >
                        Claim
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} >
                    <Image style={{ width: RFPercentage(10), height: RFPercentage(10), marginTop: RFPercentage(2) }} source={require('../../assets/images/camera.png')} />
                </TouchableOpacity>
            </View>

            <View style={styles.bottomWhiteContainer} >
                <View style={styles.slide} />
                <View style={{ width: '90%', marginTop: RFPercentage(4), justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ fontSize: RFPercentage(2), fontFamily: 'ZCOOLKuaiLe_400Regular' }} >
                        UNC Charlotte Center City
                    </Text>
                </View>
                {/* Start Button */}
                <TouchableOpacity activeOpacity={0.8} style={styles.startButtonContainer} >
                    <Text style={{ color: Colors.black, fontFamily: 'ZCOOLKuaiLe_400Regular', fontSize: RFPercentage(2.4) }} >
                        Start
                    </Text>
                </TouchableOpacity>

                {/* Side Deatil Text */}
                <View style={{ position: 'absolute', right: RFPercentage(2), top: RFPercentage(6), alignItems: 'flex-start' }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                        <View style={{ backgroundColor: '#FFA9E7', height: RFPercentage(1.5), width: RFPercentage(1.5), borderRadius: RFPercentage(20) }} />
                        <Text style={{ marginLeft: RFPercentage(1), fontSize: RFPercentage(1.5), fontFamily: 'ZCOOLKuaiLe_400Regular', color: "#767373" }} >
                            NFT Sovneir
                        </Text>
                    </View>
                    <View style={{ marginTop: RFPercentage(1), justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                        <View style={{ backgroundColor: '#DCF444', height: RFPercentage(1.5), width: RFPercentage(1.5), borderRadius: RFPercentage(20) }} />
                        <Text style={{ marginLeft: RFPercentage(1), fontSize: RFPercentage(1.5), fontFamily: 'ZCOOLKuaiLe_400Regular', color: "#767373" }} >
                            MEMO/hour
                        </Text>
                    </View>
                    <View style={{ marginTop: RFPercentage(1), justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                        <View style={{ backgroundColor: '#95CCFF', height: RFPercentage(1.5), width: RFPercentage(1.5), borderRadius: RFPercentage(20) }} />
                        <Text style={{ marginLeft: RFPercentage(1), fontSize: RFPercentage(1.5), fontFamily: 'ZCOOLKuaiLe_400Regular', color: "#767373" }} >
                            Perks
                        </Text>
                    </View>
                </View>
            </View>

            {/* Bottom Tab */}
            <BottomTab props={props} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.lightWhite
    },
    inputFieldContainer: {
        marginTop: RFPercentage(2),
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    buttonsContainer: {
        marginTop: RFPercentage(2.5),
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    button1Container: {
        position: 'absolute',
        left: 0,
        width: RFPercentage(14),
        height: RFPercentage(4.4),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.white,
        borderRadius: RFPercentage(30)
    },
    resturantDot: {
        backgroundColor: '#FFA9E7',
        height: RFPercentage(1.5),
        width: RFPercentage(1.5),
        borderRadius: RFPercentage(20)
    },
    resturantText: {
        marginLeft: RFPercentage(1),
        fontSize: RFPercentage(1.5),
        fontFamily: 'ZCOOLKuaiLe_400Regular',
        color: Colors.black
    },
    button2Container: {
        width: RFPercentage(14),
        height: RFPercentage(4.4),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.white,
        borderRadius: RFPercentage(30)
    },
    parksDot: {
        backgroundColor: '#DCF444',
        height: RFPercentage(1.5),
        width: RFPercentage(1.5),
        borderRadius: RFPercentage(20)
    },
    parksText: {
        marginLeft: RFPercentage(1),
        fontSize: RFPercentage(1.5),
        fontFamily: 'ZCOOLKuaiLe_400Regular',
        color: Colors.black
    },
    button3Container: {
        position: 'absolute',
        right: 0,
        width: RFPercentage(14),
        height: RFPercentage(4.4),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.white,
        borderRadius: RFPercentage(30)
    },
    attractionsDot: {
        backgroundColor: '#BFA9FF',
        height: RFPercentage(1.5),
        width: RFPercentage(1.5),
        borderRadius: RFPercentage(20)
    },
    attractionsText: {
        marginLeft: RFPercentage(1),
        fontSize: RFPercentage(1.5),
        fontFamily: 'ZCOOLKuaiLe_400Regular',
        color: Colors.black
    },
    alertContainer: {
        marginTop: RFPercentage(18),
        width: RFPercentage(33),
        height: RFPercentage(18),
        borderRadius: RFPercentage(2.8),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.newGrey
    },
    bottomWhiteContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: RFPercentage(26),
        backgroundColor: Colors.white,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    slide: {
        marginTop: RFPercentage(1),
        width: RFPercentage(12),
        height: RFPercentage(1),
        backgroundColor: Colors.lightVanilla,
        borderRadius: RFPercentage(8)
    },
    startButtonContainer: {
        marginTop: RFPercentage(2.8),
        width: RFPercentage(14.5),
        height: RFPercentage(5),
        borderRadius: RFPercentage(20),
        backgroundColor: Colors.lightVanilla,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rewardContainer: {
        marginTop: RFPercentage(3),
        width: RFPercentage(40),
        height: RFPercentage(48),
        backgroundColor: '#D0FAD2',
        borderRadius: RFPercentage(3),
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    redImage: {
        marginTop: RFPercentage(1.2),
        justifyContent: 'center',
        alignItems: 'center',
        width: RFPercentage(12),
        height: RFPercentage(12)
    },
    congratsText: {
        marginTop: RFPercentage(2),
        color: Colors.black,
        fontSize: RFPercentage(2),
        fontFamily: 'ZCOOLKuaiLe_400Regular'
    },
    subContainer: {
        marginTop: RFPercentage(3),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    claimButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: RFPercentage(2),
        width: RFPercentage(11),
        height: RFPercentage(4.4),
        backgroundColor: Colors.white,
        borderRadius: RFPercentage(2)
    }
})

export default RewardScreen;