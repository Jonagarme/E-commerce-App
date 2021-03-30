import React from "react";
import { Text, ScrollView } from "react-native";
import StatusBar from "../components/StatusBar";
import Search from "../components/Search/Search";
import colors from "../styles/colors";

export default function Account() {
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
