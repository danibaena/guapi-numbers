import React from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View, Alert} from 'react-native';

/* Helpers */

const isNumeric = (num) => {
  return ((!isNaN(num))&&(num!=''));
}

const isInteger = (value) => {
  return ((typeof value === "number") && ((value%1) === 0));
};

const isInRange = (value) => {
  return ((value > 0) && (value <= 10));
}

/* Class */

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.handleText = this.handleText.bind(this);
  }

  /* Method to handle user input */

  handleText(event) {
    let message = 'Mete sólo un número';

    if(this.state.text == '') {
      message = 'Ha de introducir un número'
    }

    if(isNumeric(this.state.text)) {
      if(isInRange(this.state.text)) {
        parseInt(this.state.text) === 5 ? message = '¡¡¡Premio!!! Por el culo te la hinco': message = '¡¡¡Uyyy!!! Más suerte la próxima vez';
      } else {
        message = 'Recuerda! Tiene que estar entre 1 y 10';
      }
    }

    Alert.alert(message)
  }

  /* Component markup */

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Guapi numbers!!</Text>
        <Text style={styles.description}>Introduce un número del 1 al 10</Text>
        <TextInput
          style={styles.textInput}
          autofocus={true}
          editable = {true}
          maxLength = {2}
          keyboardType={'numeric'}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          autoCorrect={false}
        />
        <TouchableHighlight 
          onPress={this.handleText}
          style={styles.highlight}
          underlayColor='#00695c'
          activeOpacity={0.5}
          >
          <Text>Voy a tener suerte</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

/* Component styles */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b2dfdb',
    alignItems: 'center',
    padding: 100,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  title: {
    color: '#00695c',
    fontSize: 24
  },
  description: {
    marginVertical: 20,
    color: '#00695c',
    fontSize: 16,
  },
  button: {
    marginTop: 20
  },
  textInput: {
    marginBottom: 20,
    color: '#00695c',
    width: 150,
    height: 40,
    borderColor: '#00695c',
    borderWidth: 1,
  },
  highlight: {
    padding: 20,
    backgroundColor: '#80cbc4',
    borderColor: '#00695c',
    borderWidth: 1,
    borderRadius: 10
  }
});