import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import { IconButton } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import { set, size } from "lodash";
import { getAddressesApi } from "../../api/address";
import useAuth from "../../hooks/useAuth";

export default function Addresses() {
  const [addresses, setAddresses] = useState(null);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getAddressesApi(auth);
        setAddresses(response);
      })();
    }, [])
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mis Direcciones</Text>
      <TouchableWithoutFeedback
        onPress={() => console.log("creando nueva direccion")}
      >
        <View style={styles.addAddres}>
          <Text style={styles.addAddresText}>Añadir una Direccion</Text>
          <IconButton icon="arrow-right" color="#000" size={19} />
        </View>
      </TouchableWithoutFeedback>
      {!addresses ? (
        <ActivityIndicator size="large" style={styles.loading} />
      ) : size(addresses) === 0 ? (
        <Text style={styles.noAddresText}>Crea tu primera direccion</Text>
      ) : (
        <Text>Listado de direcciones</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
  },
  addAddres: {
    borderWidth: 0.9,
    borderRadius: 5,
    borderColor: "#ddd",
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addAddresText: {
    fontSize: 16,
  },
  loading: {
    marginTop: 20,
  },
  noAddresText: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
});
