import React, { Component } from "react";
import { View } from "react-native";
import { Input, Button, CheckBox } from "react-native-elements";

import Colors from "../constants/Colors";
import globalStyles from "../constants/globalStyles";
import APpButton from "./AppButton";
import _ from "lodash";

class Form extends Component {
  Schema = {};
  renderInput(name, label, options = {}, inputStyle = {}, containerStyle = {}) {
    const error = this.state.errors ? this.state.errors[name] : null;
    return (
      <View keyboardShouldPersistTaps="handled">
        <Input
          inputStyle={{
            color: "#000",
            paddingHorizontal: 15,
            fontSize: 16,
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
          {...options}
          onChangeText={(lastName) => this.setState({ [name]: lastName })}
          value={this.state[name]}
          placeholderTextColor="#707070"
        />
      </View>
    );
  }

  renderIcon(name, type, options = {}) {
    return {
      name,
      type,
      color: "#000",
      size: 20,
      //opacity: 0.28,
      ...options,
    };
  }
  renderCheckbox(name, options = {}) {
    let value = this.state[name];
    let onChange = () => this.setState({ [name]: !value });
    return (
      <View>
        <CheckBox
          center
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={onChange}
          {...options}
          uncheckedColor={"#FFF"}
          checkedColor={"#FFF"}
          checked={value}
        />
      </View>
    );
  }
  renderButton(title, styles = {}) {
    return (
      <APpButton
        title={title}
        loading={this.state.loading}
        disabled={this.state.loading}
        onPress={() => {
          this.validate(Object.keys(this.Schema.fields));
        }}
      />
    );
  }
  validate = (fields) => {
    this.setState({ loading: true });
    const data = _.pick(this.state, fields);
    this.Schema.validate(data, { abortEarly: false })
      .then(() => {
        this.setState({ loading: false, errors: {} });
        this.submit(data);
      })
      .catch((ex) => {
        const errors = {};
        ex.inner.forEach((error) => {
          errors[error.path] = error.errors[0];
        });
        this.setState({ errors, loading: false });
      });
  };
  renderPasswordIcon() {
    const { showPassword } = this.state;
    let icon = "eye";
    if (showPassword) {
      icon = "eye-with-line";
    }
    return {
      type: "entypo",
      color: Colors.grey,
      name: icon,
      onPress: () => this.setState({ showPassword: !showPassword }),
    };
  }

  render() {
    return null;
  }
}

export default Form;
