import React from "react";
import { Text, View, Dimensions, TouchableOpacity } from "react-native";
import Yup from "./shared/validator";
import Colors from "./constants/Colors";
import { RenderButton, RenderInput } from "./shared/renderInput";
import Icon from "react-native-vector-icons/Entypo";

export default function Login({
  setErrors,
  errors,
  setPassword,
  password,
  setEmail,
  email,
  setShowPassword,
  showPassword = false,
  title = "Connexion",
  labelEmail = "Adresse mail",
  labelPassword = "Mot de Passe",
  titleStyle = {},
  forgotPasswordText,
  forgotPasswordTextStyle = {},
  colorIconEmail = Colors.bgApp,
  colorIconPassword = Colors.bgApp,
  textConnexion = "SE CONNECTER",
  connexionTitleStyle = {},
  connexionButtonStyle = {},
  leftIconPassword = {},
  leftIconEmail = {},
  textRedirectRegister = "Je n'ai pas encore de compte",
  textRedirectRegisterStyle = {},
  styles = {},
  OnSubmit,
  pressForgotPassword,
  pressRedirectRegister,
}) {
  const Schema = Yup.object().shape({
    email: Yup.string().email().required().label("Adresse Mail"),
    password: Yup.string().required().label("Mot de passe"),
  });
  const submit = () => {
    OnSubmit();
  };
  const [loading, setLoading] = React.useState(false);

  let onChange = (text) => {
    setEmail(text);
  };
  let onChangePassword = (text) => {
    setPassword(text);
  };
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, ...styles }}>
      <View
        style={{
          flex: 1,
          marginTop: Dimensions.get("window").height * 0.1,
        }}
      >
        <Text
          style={{
            marginVertical: 30,
            fontWeight: "bold",
            color: "#454545",
            fontSize: 36,
            textAlign: "center",
            ...titleStyle,
          }}
        >
          {title}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <RenderInput
          value={email}
          errors={errors}
          error={errors?.email}
          label={labelEmail}
          onChange={onChange}
          leftIcon={leftIconEmail}
          textContentType={"username"}
          autoCapitalize={"none"}
          keyboardType={"email-address"}
        />

        <RenderInput
          value={password}
          errors={errors}
          error={errors?.password}
          label={labelPassword}
          onChange={onChangePassword}
          leftIcon={leftIconPassword}
          textContentType={"password"}
          rightIcon={
            setShowPassword !== undefined &&
            (!showPassword ? (
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon name="eye" size={24} color={colorIconPassword} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  name="eye-with-line"
                  size={24}
                  color={colorIconPassword}
                />
              </TouchableOpacity>
            ))
          }
          secureTextEntry={!showPassword}
        />
      </View>
      <View
        style={{
          marginTop: 10,
          flex: 1,
        }}
      >
        <TouchableOpacity
          style={{
            alignSelf: "flex-end",
            marginRight: 10,
            marginTop: 20,
          }}
          onPress={pressForgotPassword}
        >
          <Text style={{ color: Colors.text, ...forgotPasswordTextStyle }}>
            {forgotPasswordText}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <RenderButton
          title={textConnexion}
          Schema={Schema}
          startLoad={() => setLoading(true)}
          endLoad={() => setLoading(false)}
          setErrors={(error) => setErrors(error)}
          email={email}
          password={password}
          submit={submit}
          styles={{ backgroundColor: "red" }}
          titleStyle={connexionTitleStyle}
          buttonStyle={connexionButtonStyle}
        />
      </View>

      <TouchableOpacity
        style={{
          alignSelf: "flex-end",
          flex: 1,
        }}
        onPress={pressRedirectRegister}
      >
        <Text
          style={{
            color: Colors.bgApp,
            textAlign: "center",
            fontSize: 14,
            ...textRedirectRegisterStyle,
          }}
        >
          {textRedirectRegister}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
