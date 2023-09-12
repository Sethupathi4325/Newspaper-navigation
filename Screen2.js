import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const file = [
  {
    content:
      "Russian missiles strike an apartment building, killing at least 4 in Ukrainian leader's hometown",
    image:
      "https://th-i.thgim.com/public/incoming/op3tp3/article67141903.ece/alternates/LANDSCAPE_1200/2023-07-31T100750Z_1977125098_RC2AE2AP13I8_RTRMADP_3_UKRAINE-CRISIS-ATTACK-KRYVYIRIH.JPG",
  },
  {
    content:
      "Four crew members on Australian army helicopter that crashed off coast didn't survive: Officials",
    image:
      "https://th-i.thgim.com/public/incoming/h4d3ev/article67141341.ece/alternates/LANDSCAPE_1200/Australia_Ditched_Helicopter_31990.jpg",
  },
  {
    content:
      "Pakistan and China ink six agreements to expedite cooperation under CPEC",
    image:
      "https://th-i.thgim.com/public/incoming/2l3tdm/article67141955.ece/alternates/LANDSCAPE_1200/AFP_33QD8TP.jpg",
  },
  {
    content: "Sharad Pawar to fete PM Modi as his men protest Manipur inaction",
    image:
      "https://th-i.thgim.com/public/news/42gp78/article35382717.ece/alternates/LANDSCAPE_1200/Pawar-Modi",
  },
  {
    content:
      "Clashes break out between two groups during VHP procession in Haryana’s Nuh; prohibitory orders imposed",
    image:
      "https://th-i.thgim.com/public/incoming/jo5gr/article67142754.ece/alternates/LANDSCAPE_1200/20230731260L.jpg",
  },
  {
    content:
      "If Stokes texts me again I will delete it’: Moeen Ali again calls retirement after 5th Ashes Test",
    image:
      "https://th-i.thgim.com/public/incoming/8b4jt6/article67145159.ece/alternates/LANDSCAPE_1200/2023-07-31T162616Z_1541354120_UP1EJ7V19NPIP_RTRMADP_3_CRICKET-TEST-ENG-AUS.JPG",
  },
  {
    content:
      "Pakistan PM Shehbaz Sharif says 'neutral' person to be picked interim premier; elder brother to be PM again if party wins elections",
    image:
      "https://th-i.thgim.com/public/news/international/v4qshp/article65497093.ece/alternates/LANDSCAPE_1200/IMG_FL06_PAK_PM_2_1_OL9NDKI6.jpg",
  },
  {
    content:
      "Russia halts wartime deal that allows Ukraine to ship grain in a hit to global food security",
    image:
      "https://th-i.thgim.com/public/incoming/r2kvxx/article67089845.ece/alternates/LANDSCAPE_1200/2023-07-17T030123Z_158684587_RC2M32A4WOZQ_RTRMADP_3_UKRAINE-CRISIS-GRAINS.JPG",
  },
];

const Item = ({ image, content }) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <TouchableOpacity>
        <Image style={styles.image} source={{ uri: image }} />
      </TouchableOpacity>
    </View>

    <View style={styles.row}>
      <Text style={styles.title}>{content}</Text>
    </View>
  </View>
);

const Map = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={file}
        renderItem={({ item }) => (
          <Item content={item.content} image={item.image} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "grey",
  },
  item: {
    backgroundColor: "grey",
    paddingTop: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    paddingBottom: 10,
  },
  title: {
    padding: 30,
    fontSize: 28,
  },

  image: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    marginVertical: 6,
    borderWidth: 5,
    borderColor: "white",
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 100,
    padding: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Map;
