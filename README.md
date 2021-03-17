This project is a login page with built-in buttons

#### This package is currently only maintained for Expo managed React Native projects, support for bare React Native projects is coming soon

## Installation

Add the dependency:

```
npm i volkeno-login
```

or

```
yarn add volkeno-login
```

## Peer Dependencies

##### IMPORTANT! You need install them.

```json
 "react": "^16.0.0-beta.5",
 "react-native": "^0.49.1"
```

## Basic Usage

**First step:** import the component:

```javascript
import LoginVolkeno from "volkeno-login";
```

**Second step:** Use the login

```jsx
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
      <LoginVolkeno
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
        OnSubmit={submit}
      />
    </View>
  );
}
```

Here we have a submit function which reacts when the login button is clicked.
showPassword and setShowPassword allows you to activate or deactivate the visibility of the password.
email and setEmail allows you to enter and modify the email variable when typing it.
password and setPassword are used to enter and modify the password variable when typed.
the variables errors and setErrors are mandatory. They allow you to display errors when validating the email and password
