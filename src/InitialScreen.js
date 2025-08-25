import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const InitialScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/casual_dog.png')} 
        style={styles.image}
        resizeMode="contain"
      />

   
      <Text style={styles.title}>Ótimo dia!</Text>
      <Text style={styles.subtitle}>Como deseja acessar?</Text>

      
      <TouchableOpacity style={styles.botaoGoogle}>
        <Image
          source={require('../assets/Google.png')}
          style={styles.icon}
        />
        <Text style={styles.textoGoogle}
        onPress={() => navigation.navigate("LoginScreen")}>Como deseja acessar?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.outroBotao}>
        <Text style={styles.outroTexto}>Outras opções</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 30,
  },
  botaoGoogle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00C853",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
    width: "100%",
    justifyContent: "center",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textoGoogle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  outroBotao: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#00C853",
    width: "100%",
    alignItems: "center",
  },
  outroTexto: {
    color: "#00C853",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default InitialScreen;