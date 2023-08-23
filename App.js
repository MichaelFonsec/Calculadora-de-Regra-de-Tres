import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularRegraTresSimples = () => {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);

    if (num1 !== 0) {
      const novoValor = (num2 * 1) / num1;
      setResultado(`Resultado: ${novoValor.toFixed(2)}`);
    } else {
      setResultado('Divisão por zero');
    }
  };

  const calcularRegraTresComposta = () => {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);

    if (num1 !== 0) {
      const novoValor = (num2 * 1) / num1;
      setResultado(`Resultado: ${novoValor.toFixed(2)}`);
    } else {
      setResultado('Divisão por zero');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de Regra de Três</Text>
      <TextInput
        placeholder="Valor 1"
        value={valor1}
        onChangeText={(text) => setValor1(text)}
        style={styles.input}
      />
      
      <TextInput
        placeholder="Valor 2"
        value={valor2}
        onChangeText={(text) => setValor2(text)}
        style={styles.input}
      />
      <View style={styles.espaco}></View>
      <Button title="Regra de Três Simples" onPress={calcularRegraTresSimples} />
      <View style={styles.espaco}></View>
      <Button title="Regra de Três Composta" onPress={calcularRegraTresComposta} />
      <label style={styles.resultText}>{resultado}</label>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },

  espaco:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  resultText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
