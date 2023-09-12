import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={{
          height: 100,
          width: 100,
        }}
        source={{
          uri: "https://th.bing.com/th/id/OIP.CYt-sI4Rk88etVn0zt32PQHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.7&pid=1.7 ",
        }}
      ></Image>
      <br></br>

      <Text style={styles.sethu}>
        <center>
          <b>Sethupathi.S</b>
        </center>
      </Text>
      <Text style={styles.sethu1}>
        <b>REACTNATIVE STUDENT</b>
      </Text>

      <div style={styles.sethu3}>
        <Text style={styles.vino}>
          <b>contact Information</b>
        </Text>
        <br></br>
        <Text> phone:6374867439</Text>
        <br></br>
        <Text>Email:sethupathi7439@gmail.com</Text>
        <br></br>
        <br></br>
        <Text style={styles.vino}>
          <b>skills summary</b>
        </Text>
        <br></br>
        <Text>C programming</Text>
        <br></br>
        <Text>Html, css </Text>
        <br></br>
        <Text>Javascript</Text>
        <br></br>
        <Text>React native</Text>
        <br></br>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 100,
    backgroundColor: "grey",
  },
  sethu: {
    fontSize: 15,

    paddingRight: 1400,
  },
  sethu1: {
    fontSize: 40,
    paddingBottom: 100,
    paddingLeft: 600,
  },
  sethu3: {
    fontSize: 30,
    paddingLeft: 600,
    marginBottom: 20,
  },
  vino: {
    fontSize: 20,
  },
});
