import React from "react";
import Colors from "../constants/Colors";
import { Button, Icon } from "react-native-elements";
import { TouchableOpacity, View, Text } from "react-native";

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
        height: small ? 38 : 50,
        minWidth: small ? "25%" : "100%",
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
        //fontFamily: "Montserrat-Bold",
        fontSize: 14,
        ...titleStyle,
      }}
      {...props}
    />
  );
}
export function APpButtonSmall({ loading, ...props }) {
  return (
    <Button
      buttonStyle={{
        backgroundColor: Colors.bgApp2,
        height: 50,
        borderRadius: 50,
        width: 50,
      }}
      containerStyle={{
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
      }}
      loading={loading}
      disabled={loading}
      {...props}
    />
  );
}
export function APpButtonOutline({
  small = false,
  loading,
  color = Colors.bgApp2,
  ...props
}) {
  return (
    <Button
      buttonStyle={{
        backgroundColor: "#FFF",
        height: small ? 38 : 50,
        borderRadius: small ? 38 : 50,
        minWidth: small ? "25%" : "100%",
        borderWidth: 1,
        borderColor: color,
        paddingHorizontal: 25,
      }}
      loading={loading}
      disabled={loading}
      iconContainerStyle={{ marginTop: 5, marginLeft: "auto" }}
      titleStyle={{
        color: color,
        fontWeight: "bold",
        letterSpacing: 1,
        fontSize: 16,
      }}
      {...props}
    />
  );
}

export function QuizButton({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 50,
        backgroundColor: "#ECFBF9",
        borderRadius: 30,
        alignItems: "center",
        paddingHorizontal: 20,
        justifyContent: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon name="extension" color={Colors.bgApp2} size={24} />
        <Text style={{ marginLeft: 10 }}>Testez vos connaissances</Text>
      </View>
    </TouchableOpacity>
  );
}
