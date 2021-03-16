import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Login";
import { Feather, Entypo, Ionicons } from "@expo/vector-icons";
import Colors from "./constants/Colors";

export default function App() {
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});

  return (
    <View style={styles.container}>
      <Login
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
        colorIconEmail={"red"}
        colorIconPassword={"blue"}
        textConnexion={"Je me connect"}
        connexionTitleStyle={{ color: "blue" }}
        connexionButtonStyle={{ backgroundColor: "red" }}
        leftIconPassword={
          <Ionicons
            name="ios-lock-open-outline"
            size={20}
            color={Colors.bgApp2}
          />
        }
        leftIconEmail={
          <Ionicons name="mail-outline" size={20} color={Colors.color2} />
        }
        textRedirectRegisterStyle={{ color: "red" }}
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
