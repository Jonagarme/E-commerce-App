import React, { useState, useCallback } from "react";
import { Text, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import StatusBar from "../components/StatusBar";
import Search from "../components/Search/Search";
import { getMeApi } from "../api/user";
import useAuth from "../hooks/useAuth";
import colors from "../styles/colors";

export default function Account() {
  const [user, setUser] = useState(null);
  const { auth } = useAuth();

  console.log(auth);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getMeApi(auth.token);
        console.log(response);
      })();
    }, [])
  );

  return (
    <>
      <StatusBar backgroundColor={colors.bgDark} barStyle="light-content" />
      <Search />
      <ScrollView>
        <Text>ACCOUNT</Text>
      </ScrollView>
    </>
  );
}
