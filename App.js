import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import React from "react";

export default function Card() {
  return (
    <View style={styles.card}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "data:image/jpeg;base64,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",
        }}
      />
      <Text style={styles.title}>Fatma</Text>
      <Text style={styles.content}>Kuwait</Text>

      <View style={{ flexDirection: "row" }}>
        <View style={{ margin: 10, alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 20, marginTop: 10 }}>
            80K
          </Text>
          <Text style={{ color: "white", fontSize: 20, marginTop: 10 }}>
            Followers
          </Text>
        </View>
        <View style={{ margin: 10, alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 20, marginTop: 10 }}>
            104K
          </Text>
          <Text style={{ color: "white", fontSize: 20, marginTop: 10 }}>
            Likes
          </Text>
        </View>
        <View style={{ margin: 10, alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 20, marginTop: 10 }}>
            1.4K
          </Text>
          <Text style={{ color: "white", fontSize: 20, marginTop: 10 }}>
            photos
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#e3d5ca",
    borderRadius: 10,
    padding: 20,
    margin: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: "#000814",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
