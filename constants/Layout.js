import { Dimensions, StatusBar, Platform } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default {
  window: {
    width,
    height,
    paddingTop: Platform.OS === "ios" ? 0 : 0,
  },
  isSmallDevice: width < 375,
  numberOfColumn: width < 375 ? 1 : 2,
  headerHeight: Platform.OS === "ios" ? 69 : 50,
};
