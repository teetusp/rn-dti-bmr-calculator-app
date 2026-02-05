import React, { useState } from "react";
import {
    Alert,
    Image,
    ImageBackground,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Bmr() {
  const [gender, setGender] = useState<"male" | "female" | null>(null);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmr, setBmr] = useState("0");
  const [age, setAge] = useState("");

  const handleCalculate = () => {
    if (!gender) {
      Alert.alert("กรุณาเลือกเพศ");
      return;
    }

    if (!weight) {
      Alert.alert("กรุณากรอกน้ำหนัก");
      return;
    }

    if (!height) {
      Alert.alert("กรุณากรอกส่วนสูง");
      return;
    }

    if (!age) {
      Alert.alert("กรุณากรอกอายุ");
      return;
    }

    let bmrValue = 0;

    if (gender === "male") {
      bmrValue =
        66 +
        13.8 * parseFloat(weight) +
        5 * parseFloat(height) -
        6.8 * parseFloat(age);
    } else {
      bmrValue =
        655 +
        9.6 * parseFloat(weight) +
        1.8 * parseFloat(height) -
        4.7 * parseFloat(age);
    }

    setBmr(bmrValue.toFixed(2));
  };

  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView
          contentInsetAdjustmentBehavior="never"
          showsVerticalScrollIndicator={false}
        >
          <ImageBackground
            source={require("@/assets/images/bmrlogo.jpg")}
            style={[styles.header, { paddingTop: insets.top }]}
          >
            <View style={styles.overlay} />
            <View>
              <Text style={styles.title}>BMR Calculator</Text>
              <Text style={styles.subtitle}>
                อัตราการเผาผลาญพลังงานพื้นฐานของร่างกาย
              </Text>
            </View>
          </ImageBackground>

          <View style={styles.content}>
            <Text style={styles.label}>เพศ (Gender)</Text>

            <View style={styles.genderRow}>
              <TouchableOpacity
                style={[
                  styles.genderCard,
                  gender === "male" && styles.genderSelected,
                ]}
                onPress={() => setGender("male")}
                activeOpacity={0.8}
              >
                <Image
                  source={require("@/assets/images/man.png")}
                  style={styles.genderImage}
                />
                <Text
                  style={[
                    styles.genderText,
                    gender === "male" && styles.genderTextSelected,
                  ]}
                >
                  ชาย
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.genderCard,
                  gender === "female" && styles.genderSelected,
                ]}
                onPress={() => setGender("female")}
                activeOpacity={0.8}
              >
                <Image
                  source={require("@/assets/images/woman.png")}
                  style={styles.genderImage}
                />
                <Text
                  style={[
                    styles.genderText,
                    gender === "female" && styles.genderTextSelected,
                  ]}
                >
                  หญิง
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>น้ำหนัก (KG)</Text>
                <TextInput
                  placeholder="เช่น 60"
                  keyboardType="numeric"
                  style={styles.textInput}
                  value={weight}
                  onChangeText={setWeight}
                  placeholderTextColor="#b294b8ff"
                />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.label}>ส่วนสูง (CM)</Text>
                <TextInput
                  placeholder="เช่น 170"
                  keyboardType="numeric"
                  style={styles.textInput}
                  value={height}
                  onChangeText={setHeight}
                  placeholderTextColor="#b294b8ff"
                />
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={styles.label}>อายุ (ปี)</Text>
              <TextInput
                placeholder="เช่น 25"
                keyboardType="numeric"
                style={styles.textInput}
                value={age}
                onChangeText={setAge}
                placeholderTextColor="#b294b8ff"
              />
            </View>

            <TouchableOpacity style={styles.calbtn} onPress={handleCalculate}>
              <Text style={styles.calbtntxt}>คำนวณ BMR</Text>
            </TouchableOpacity>

            <View style={styles.cardResult}>
              <Text style={[styles.textResult, { fontSize: 20 }]}>
                BMR ของคุณคือ
              </Text>
              <Text style={styles.bmrValue}>{bmr}</Text>
              <Text style={styles.bmrUnit}>แคลอรี่/วัน</Text>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 200,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#0f172a99",
  },

  title: {
    color: "#f2e0f1ff",
    fontSize: 26,
    fontFamily: "Kanit_700Bold",
  },
  subtitle: {
    color: "#dbb2dfff",
    fontSize: 14,
    marginTop: 6,
    marginBottom: 12,
    fontFamily: "Kanit_400Regular",
  },
  content: {
    marginTop: -24,
    padding: 20,
    backgroundColor: "#f8f1f9ff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  label: {
    fontSize: 16,
    fontFamily: "Kanit_700Bold",
    color: "#0F172A",
  },
  genderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  genderCard: {
    flex: 1,
    marginHorizontal: 6,
    paddingVertical: 18,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  genderSelected: {
    backgroundColor: "#f5ccfbff",
    borderWidth: 2,
    borderColor: "#aa14b8ff",
  },
  genderImage: {
    width: 56,
    height: 56,
    marginBottom: 8,
  },
  genderText: {
    fontSize: 14,
    color: "#995a9bff",
    fontFamily: "Kanit_400Regular",
  },
  genderTextSelected: {
    color: "#6a0f76ff",
    fontFamily: "Kanit_700Bold",
  },
  row: {
    flexDirection: "row",
    marginTop: 20,
    gap: 12,
  },
  textInput: {
    width: "100%",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    marginTop: 8,
    fontFamily: "Kanit_400Regular",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  calbtn: {
    backgroundColor: "#ca2cc2ff",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 24,
  },
  calbtntxt: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Kanit_700Bold",
  },
  cardResult: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    marginTop: 24,
    alignItems: "center",
  },
  textResult: {
    fontFamily: "Kanit_700Bold",
    color: "#2a0f2aff",
  },
  bmrValue: {
    fontSize: 30,
    fontFamily: "Kanit_700Bold",
    color: "#c94daaff",
    marginVertical: 4,
  },
  bmrUnit: {
    fontSize: 16,
    color: "#8a648bff",
    fontFamily: "Kanit_400Regular",
  },
});
