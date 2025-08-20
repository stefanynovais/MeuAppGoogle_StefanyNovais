import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
    useEffect(() => {

        const timer = setTimeout(() => {
            navigation.replace("InitialScreen");
        }, 5000); //após 5 segundos, vai para a tela inicial

        return () => clearTimeout(timer); //limpa o timer ao sair 
    }, [navigation]);

    return (
        <View style={style.container}>
            <Text style={styles.logo}>GO∞day</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00C853",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
    },
});


export default SplashScreen; 