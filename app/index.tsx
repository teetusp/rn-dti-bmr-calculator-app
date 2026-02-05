import { Image } from "expo-image";
import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/bmr");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.outer}>
        <View style={styles.middle}>
          <View style={styles.inner}>
            <Image
              source={require("@/assets/images/bmrlogo.jpg")}
              style={styles.imglogo}
            />
          </View>
        </View>
      </View>

      <Text style={[styles.appname, { fontSize: 40, marginBottom: 20 }]}>
        BMR Calculator
      </Text>
      <ActivityIndicator
        size="large"
        color="#ffffff"
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const SIZE = 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fc7df1ff",
    alignItems: "center",
    justifyContent: "center",
  },

  appname: {
    color: "#690d62ff",
    marginTop: 14,
    fontFamily: "Kanit_700Bold",
    letterSpacing: 1,
  },

  outer: {
    width: SIZE + 75,
    height: SIZE + 75,
    borderRadius: (SIZE + 75) / 2,
    backgroundColor: "#fb91ffff",
    alignItems: "center",
    justifyContent: "center",
  },

  middle: {
    width: SIZE + 50,
    height: SIZE + 50,
    borderRadius: (SIZE + 50) / 2,
    backgroundColor: "#fdb5ffff",
    alignItems: "center",
    justifyContent: "center",
  },

  inner: {
    width: SIZE + 25,
    height: SIZE + 25,
    borderRadius: (SIZE + 25) / 2,
    backgroundColor: "#fcd6faff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#f5caf3ff",
    shadowOpacity: 0.4,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
  },
  imglogo: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
  },
});
