import React from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { Button } from "react-native-paper";
//import { useNavigation } from "@react-navigation/native";
import { map } from "lodash";
//import useAuth from "../../hooks/useAuth";
import colors from "../../styles/colors";

export default function AddressList(props) {
  const { addresses } = props;
  // console.log(addresses);
  //const navigation = useNavigation();
  //const { auth } = useAuth();

  return (
    <View style={styles.container}>
      {map(addresses, (address) => (
        <View key={address._id} style={styles.address}>
          <Text style={styles.title}>{address.title}</Text>
          <Text>{address.name_lastname}</Text>
          <Text>{address.address}</Text>
          <View style={styles.blockLine}>
            <Text>{address.state}, </Text>
            <Text>{address.city}, </Text>
            <Text>{address.postal_code}</Text>
          </View>
          <Text>{address.country}</Text>
          <Text>Numero de telefono: {address.phone}</Text>
          <View style={styles.actions}>
            <Button
              mode="contained"
              color={colors.primary}
              //onPress={() => goToUpdateAddress(address._id)}
            >
              Editar
            </Button>
            <Button
              mode="contained"
              color={colors.danger}
              //onPress={() => deleteAddressAlert(address)}
            >
              Eliminar
            </Button>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  address: {
    borderWidth: 0.9,
    borderRadius: 5,
    borderColor: "#ddd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 15,
  },
  title: {
    fontWeight: "bold",
    paddingBottom: 5,
  },
  blockLine: {
    flexDirection: "row",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
});
