import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from '../components/Screen';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function EnterRoomScreen(props) {

    return (
        <Screen style={styles.screen}>
            {/* Nav */}
            <View style={styles.navContainer} >
                <View style={styles.bottomLine} />
                <View style={styles.navSubContainer} >
                    <TouchableOpacity activeOpacity={0.8} style={styles.byDistanceButtonContainer} >
                        <Text style={{ fontSize: RFPercentage(2.2), fontFamily: 'ZCOOLKuaiLe_400Regular', color: Colors.black }} >
                            By distance
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0 }} >
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2.2), fontFamily: 'ZCOOLKuaiLe_400Regular' }} >
                            Filter
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Body */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <Text style={styles.sweetGreenText} >
                        Sweet Green
                    </Text>

                    <View style={styles.watchTimeContainer} >
                        <Image source={require('../../assets/images/cut.png')} style={styles.watchTimeCutImage} />
                        <Text style={{ color: Colors.white, fontSize: RFPercentage(3), fontFamily: 'ZCOOLKuaiLe_400Regular' }} >
                            29:90
                        </Text>
                    </View>

                    <View style={{ width: '82%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                        <TouchableOpacity activeOpacity={0.8} style={styles.endButtonContainer} >
                            <Text style={{ color: Colors.black, fontSize: RFPercentage(2.5), fontFamily: 'ZCOOLKuaiLe_400Regular' }} >
                                End
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.startContainer} >
                            <Text style={{ color: Colors.black, fontSize: RFPercentage(2.5), fontFamily: 'ZCOOLKuaiLe_400Regular' }} >
                                Start
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.sgContainer} >
                        <Image source={require('../../assets/images/sg.png')} style={{ width: RFPercentage(9), height: RFPercentage(6) }} />
                    </View>

                    <View style={styles.subContainer} >
                        <Image style={{ marginLeft: RFPercentage(1.6), width: RFPercentage(5), height: RFPercentage(5) }} source={require('../../assets/images/icon.png')} />
                        <Text style={{ marginLeft: RFPercentage(1.6), fontSize: RFPercentage(3.5), fontFamily: 'ZCOOLKuaiLe_400Regular', color: Colors.white }} >
                            +70
                        </Text>
                    </View>
                    <View style={{ marginBottom: RFPercentage(8) }} />
                </View>
            </ScrollView>
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
        backgroundColor: "#356B62"
    },
    byDistanceButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: RFPercentage(2),
        width: RFPercentage(17),
        height: RFPercentage(4.4),
        backgroundColor: Colors.lightVanilla,
        borderRadius: RFPercentage(2)
    },
    navContainer: {
        width: '100%',
        height: RFPercentage(20),
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#C3A5A5'
    },
    bottomLine: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: RFPercentage(5),
        borderTopLeftRadius: RFPercentage(3),
        borderTopRightRadius: RFPercentage(3),
        backgroundColor: '#356B62'
    },
    navSubContainer: {
        marginBottom: RFPercentage(6),
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row'
    },
    subContainer: {
        marginTop: RFPercentage(4),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    sweetGreenText: {
        color: Colors.white,
        fontSize: RFPercentage(2.8),
        fontFamily: 'ZCOOLKuaiLe_400Regular',
        marginTop: RFPercentage(2)
    },
    watchTimeContainer: {
        marginTop: RFPercentage(5), width: RFPercentage(18), height: RFPercentage(18), backgroundColor: "#356B62", justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(30), borderColor: Colors.white, borderWidth: RFPercentage(1)
    },
    watchTimeCutImage: {
        width: RFPercentage(7.5), height: RFPercentage(7.5), position: 'absolute', top: RFPercentage(-1), left: RFPercentage(-2)
    },
    endButtonContainer: {
        justifyContent: 'center', alignItems: 'center', width: RFPercentage(10), height: RFPercentage(10), backgroundColor: Colors.white, borderRadius: RFPercentage(30)
    },
    startContainer: {
        position: 'absolute', right: 0, justifyContent: 'center', alignItems: 'center', width: RFPercentage(10), height: RFPercentage(10), backgroundColor: Colors.white, borderRadius: RFPercentage(30)
    },
    sgContainer: {
        marginTop: RFPercentage(1), width: RFPercentage(18), height: RFPercentage(18), backgroundColor: "#EAFE72", justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(30), borderColor: Colors.white, borderWidth: RFPercentage(1)
    }
})

export default EnterRoomScreen;