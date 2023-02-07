import { SafeAreaView, Text, Image, StyleSheet, Dimensions, ImageBackground, ScrollView} from "react-native";
import Profiles from '../../assets/Profiles';
import Icons from "../../assets/Icons"
import { Themes } from "../../assets/Themes";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window"). height;

const Body = () => {
    return (
    <ScrollView style={styles.Main}>
        <SafeAreaView style={styles.card}>
            <ImageBackground source={Profiles.mtl.image} style={styles.image} imageStyle={styles.image}>
            <Text style={styles.title}> {Profiles.mtl.name} </Text>
            <Text style={styles.subtitle}> {Profiles.mtl.caption} </Text>
        </ImageBackground>
        </SafeAreaView>

        <SafeAreaView style={styles.player}>
            <Text style={styles.hottake}> My hottest take </Text>
            <SafeAreaView style={styles.icons}>
                <Image source={Icons.player.light} style={styles.playbutton}/>
                <Image resizeMode="contain" source={Icons.audioWave.light} style={styles.soundwaves}/>
            </SafeAreaView>
        </SafeAreaView>
    </ScrollView>
);
};

const styles = StyleSheet.create({
    Main:{
        marginHorizontal: windowWidth * 0.05,
        marginVertical: windowHeight * 0.025,
    },
    Card: {
        marginHorizontal: windowWidth * 0.5,
    },
    image: {
        width: "100%",
        height: undefined,
        aspectRatio: 1 / 1.1,
        borderRadius: 8,
        justifyContent: "space-between",
        flexWrap: "wrap",
        shadowColor: Themes.light.shadows,
        shadowOffset: {width: -4, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        },
    imageStyle: {
        borderRadius: 8,
    },
    subtitle: {
        fontFamily: "Sydney",
        fontSize: 18,
        padding: 8,
        color: "white",
    },
    title: {
        fontFamily: "Sydney",
        fontSize: 32,
        padding: 8,
        color: "white",
    },
    player: {
        borderRadius: 18,
        shadowColor: Themes.light.shadows,
        shadowOffset: {width: -4, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        marginVertical: windowHeight * 0.025,
        backgroundColor: Themes.light.bgSecondary,
        height: "25%",
        justifyContent: "space-around",
    },
    hottake: {
        fontFamily: "Sydney",
        fontSize: 24,
        padding: 8,
        color: "black",
    },
    soundwaves:{
        height: windowWidth * .2,
        width: windowWidth * .6,
        justifyContent: "space-between",
    },
    playbutton:{
        height: windowWidth * .2,
        width: windowWidth * .2,  
    },
    icons:{
        flexDirection: "row",
        justifyContent: "space-around"
    }
    
});

export default Body;