import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import Colors from "../constants/Colors";
import globalStyles from "../constants/globalStyles";
import _ from "lodash";

Schema = {};

export function RenderInput({
  value,
  label,
  onChange,
  inputStyle = {},
  containerStyle = {},
  errors,
  error,
  ...options
}) {
  //const error = errors ? errors[value] : null;
  const showLabel = options.showLabel === undefined ? true : options.showLabel;
  return (
    <View keyboardShouldPersistTaps="handled">
      <Input
        {...options}
        inputStyle={{
          color: "#000",
          paddingHorizontal: 5,
          fontSize: 14,
          ...inputStyle,
        }}
        inputContainerStyle={{
          borderColor: "#000",
          paddingHorizontal: 10,
          ...globalStyles.buttonShadow,

          backgroundColor: "#FFF",
          height: 50,
          ...containerStyle,
        }}
        placeholder={label}
        leftIconContainerStyle={{ alignItems: "flex-start" }}
        rightIconContainerStyle={{ alignItems: "flex-start", marginRight: 7 }}
        labelStyle={{
          fontSize: 14,
          marginLeft: 15,
          color: "#ccc",
        }}
        errorMessage={error}
        errorStyle={{ color: Colors.color2 }}
        onChangeText={onChange}
        value={value}
        placeholderTextColor="#707070"
      />
    </View>
  );
}

export function renderIcon(name, type, options = {}) {
  return {
    name,
    type,
    color: "#000",
    size: 20,
    //opacity: 0.28,
    ...options,
  };
}

export function RenderButton({
  title,
  loading,
  Schema,
  startLoad,
  endLoad,
  email,
  password,
  setErrors,
  submit,
  styles = {},
  titleStyle = {},
  buttonStyle = {},
}) {
  return (
    <APpButton
      title={title}
      loading={loading}
      disabled={loading}
      styles={styles}
      titleStyle={titleStyle}
      buttonStyle={buttonStyle}
      onPress={async () => {
        let valide = await validate(
          Schema,
          startLoad,
          endLoad,
          email,
          password,
          submit
        );
        setErrors(valide);
      }}
    />
  );
}

export const validate = async (
  Schema,
  startLoad,
  endLoad,
  email,
  password,
  submit
) => {
  startLoad;
  let valide = await Schema.validate({ email, password }, { abortEarly: false })
    .then(() => {
      endLoad;
      submit();
    })
    .catch((ex) => {
      const errors = {};
      ex.inner.forEach((error) => {
        errors[error.path] = error.errors[0];
      });
      endLoad;
      return errors;
      //this.setState({ errors, loading: false });
    });
  return valide;
};
const style = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 5,
    width: "100%",
    paddingHorizontal: 5,
    paddingTop: 5,
    backgroundColor: "#f1f3f4",
  },
  inputFocused: {
    height: 36,
    marginBottom: 5,
    width: "100%",
    paddingHorizontal: 5,
    paddingTop: 5,
    backgroundColor: "#f1f3f4",
    borderBottomWidth: 2,
    borderBottomColor: "#db3974",
  },
  label: {
    fontSize: 16,
    color: "rgba(0,0,0,.6)",
    marginBottom: 10,
    marginLeft: 10,
  },
});

export default function APpButton({
  small = false,
  loading,
  styles = {},
  titleStyle = {},
  buttonStyle = {},
  ...props
}) {
  return (
    <Button
      buttonStyle={{
        backgroundColor: Colors.bgApp,
        height: 50,
        minWidth: "100%",
        paddingHorizontal: 25,
        ...buttonStyle,
      }}
      loading={loading}
      disabled={loading}
      iconContainerStyle={{ marginTop: 5, marginLeft: "auto" }}
      titleStyle={{
        color: "white",
        fontWeight: "bold",
        letterSpacing: 1,
        fontSize: 14,
        ...titleStyle,
      }}
      {...props}
    />
  );
}
