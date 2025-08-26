import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaFoco, setSenhaFoco] = useState(false);
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [lembrar, setLembrar] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acesse</Text>
      <Text style={styles.subtitle}>com E-mail e senha</Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Senha</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputSenha}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!senhaVisivel}
          onFocus={() => setSenhaFoco(true)}
          onBlur={() => setSenhaFoco(false)}
        />
        {(senhaFoco || senha.length > 0) && (
          <TouchableOpacity
            style={styles.iconeOlho}
            onPress={() => setSenhaVisivel(!senhaVisivel)}
          >
            <Icon
              name={senhaVisivel ? "eye-off" : "eye"}
              size={22}
              color="#333"
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.row}>
        <BouncyCheckbox
          size={20}
          fillColor="#00C853"
          unfillColor="#fff"
          text="Lembrar senha"
          textStyle={styles.checkboxText}
          isChecked={lembrar}
          disableBuiltInState
          onPress={(isChecked) => setLembrar(isChecked)}
        />

        <TouchableOpacity>
          <Text style={styles.link}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.primeiroBotao}>
          <Text style={styles.primeiroBotaoTexto}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.segundoBotao}>
          <Text style={styles.segundoBotaoTexto}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Ou continue com</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../assets/Google.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../assets/Facebook.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 25,
    justifyContent: "center",
  },
  title: { fontSize: 28, fontWeight: "bold", color: "#111" },
  subtitle: { fontSize: 14, color: "#666", marginBottom: 25 },
  label: { fontSize: 14, fontWeight: "bold", marginBottom: 5 },
  input: {
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  inputContainer: {
    position: "relative",
    marginBottom: 15,
  },
  inputSenha: {
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 8,
    paddingRight: 40,
  },
  iconeOlho: {
    position: "absolute",
    right: 10,
    top: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxText: { fontSize: 14, color: "#333", textDecorationLine: "none" },
  link: { fontSize: 12, color: "#00C853", fontWeight: "bold", alignSelf: "flex-start", paddingRight: 150 },
  primeiroBotao: {
    flex: 1,
    backgroundColor: "#00C853",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginRight: 10,
  },
  primeiroBotaoTexto: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  segundoBotao: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#00C853",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginLeft: 10,
  },
  segundoBotaoTexto: { color: "#333", fontSize: 16, fontWeight: "bold" },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  divider: { flex: 1, height: 1, backgroundColor: "#ccc" },
  dividerText: { marginHorizontal: 10, color: "#666" },
  socialButton: { flex: 1, alignItems: "center" },
  socialIcon: { width: 45, height: 45, resizeMode: "contain" },
});

export default LoginScreen;