import React from "react";
import { StyleSheet, View } from "react-native";
import Login from "./Login";
import Colors from "./constants/Colors";
import { Alert } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function App() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});

  const submit = async () => {
    Alert.alert("Félicitation", "Connexion réussie");
  };

  return (
    <View style={styles.container}>
      <Login
        OnSubmit={submit}
        pressForgotPassword={() => {
          Alert.alert("change passWord");
        }}
        pressRedirectRegister={() => {
          Alert.alert("redirect regidter");
        }}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        errors={errors}
        setErrors={setErrors}
        title={"Login"}
        forgotPasswordText={"Mot de passe oublié ?"}
        forgotPasswordTextStyle={{
          color: "red",
          textAlign: "center",
        }}
        titleStyle={{
          color: "red",
          marginVertical: 30,
          fontWeight: "bold",
          fontSize: 36,
          textAlign: "center",
        }}
        textConnexion={"Je me connect"}
        leftIconPassword={
          <Icon name="ios-lock-open-outline" size={20} color={Colors.bgApp2} />
        }
        leftIconEmail={
          <Icon name="mail-outline" size={20} color={Colors.bgApp2} />
        }
        textRedirectRegisterStyle={{ color: "red" }}
        textRedirectRegister="Je n'ai pas encore de compte"
        styles={{}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
