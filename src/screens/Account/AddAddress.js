import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { formStyle } from "../../styles/index";

export default function AddAddress() {
  return (
    <KeyboardAwareScrollView extraScrollHeight={25}>
      <View style={styles.container}>
        <Text style={styles.title}>Nueva direccion</Text>
        <TextInput label="Titulo" style={formStyle.input} />
        <TextInput label="Nombre y apellidos" style={formStyle.input} />
        <TextInput label="Direccion" style={formStyle.input} />
        <TextInput label="Codigo Postal" style={formStyle.input} />
        <TextInput label="Poblacion" style={formStyle.input} />
        <TextInput label="Estado" style={formStyle.input} />
        <TextInput label="Pais" style={formStyle.input} />
        <TextInput label="Telefono" style={formStyle.input} />
        <Button
          mode="contained"
          style={[formStyle.btnSucces, styles.btnSucces]}
        >
          Crear direccion
        </Button>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    paddingVertical: 20,
  },
  btnSucces: {
    marginBottom: 20,
  },
});
