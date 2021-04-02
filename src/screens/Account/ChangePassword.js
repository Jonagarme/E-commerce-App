import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";
import Toast from "react-native-root-toast";
import useAuth from "../../hooks/useAuth";
import { updateUserApi } from "../../api/user";
import { formStyle } from "../../styles";

export default function ChangePassword() {
  const { auth, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      try {
        const response = await updateUserApi(auth, formData);
        if (response.statusCode) throw "Error al cambiar la contraseña";
        navigation.goBack();
        //logout();
      } catch (error) {
        Toast.show(error, {
          position: Toast.positions.CENTER,
        });
        setLoading(false);
      }
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        label="Nueva Contraseña"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        value={formik.values.password}
        error={formik.errors.password}
        secureTextEntry
      />
      <TextInput
        label="Repetir nueva Contraseña"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        value={formik.values.repeatPassword}
        error={formik.errors.repeatPassword}
        secureTextEntry
      />
      <Button
        mode="contained"
        style={formStyle.btnSucces}
        loading={loading}
        onPress={formik.handleSubmit}
      >
        Cambiar Contraseña
      </Button>
    </View>
  );
}

function initialValues() {
  return {
    password: "",
    repeatPassword: "",
  };
}

function validationSchema() {
  return {
    password: Yup.string().min(4, true).required(true),
    repeatPassword: Yup.string()
      .min(4, true)
      .oneOf([Yup.ref("password")], true)
      .required(true),
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
