export const screenOptions = {
  gestureEnabled: true,
  gestureDirection: "vertical",
  cardStyleInterpolator: ({ current, layouts }) => {
    const translateY = current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [layouts.screen.height, 0],
    });

    return {
      cardStyle: {
        transform: [{ translateY }],
      },
    };
  },
};

const Constantes = {
  transaction: {
    types: {
      depot: "depot",
      retrait: "retrait",
    },
  },
  TR: 0.01,
  DATE_RETRAIT: 3,
  screenOptions,
};

export default Constantes;
