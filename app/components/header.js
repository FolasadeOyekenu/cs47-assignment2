import { StyleSheet, View, Text, Image, Dimensions, SafeAreaView} from "react-native"
import Icons from "../../assets/Icons"

const windowWidth = Dimensions.get("window").width;

const Header = () => {
    return (
    <SafeAreaView style={styles.header}>
    <Image source={Icons.menu.light} style={styles.headerIcons}/>
    <Text style={styles.title}>ensom</Text>
    <Image source={Icons.sun} style={styles.headerIcons}/>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerIcons: {
        height: windowWidth * 0.15,
        width: windowWidth * 0.15,
    },
    title: {
        fontFamily: "SydneyBold",
        fontSize: 32,
        flexDirection: "column",
        alignSelf: "center",
    },
    header: {
        marginHorizontal: windowWidth * 0.05,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
});

export default Header;