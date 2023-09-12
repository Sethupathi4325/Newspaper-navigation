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
      "Bill to replace Delhi Services Ordinance tabled by MoS for Home Affairs Nityanand Rai; discussion begins in Lok Sabha",
    image:
      "https://static.toiimg.com/thumb/imgsize-152410,msid-102258943,width-400,resizemode-4/102258943.jpg",
  },
  {
    content:
      "Mr. Modi is in Pune to receive the Lokmanya Tilak National Award; during the day, the Prime Minister will flag off metro trains marking the inauguration of completed sections of Pune Metro phase I",
    image:
      "https://th-i.thgim.com/public/incoming/1jvpjo/article67145304.ece/alternates/LANDSCAPE_1200/PTI08_01_2023_000066B.jpg",
  },
  {
    content:
      "The decision was taken at the Lok Sabha's business advisory committee meeting which was boycotted by the Opposition bloc INDIA and the Bharat Rashtra Samithi",
    image:
      "https://th-i.thgim.com/public/incoming/wux8ls/article67145322.ece/alternates/LANDSCAPE_1200/20230731223L.jpg",
  },
  {
    content:
      "The Monsoon Session has seen disruptions since its beginning on July 20 with the Opposition pressing for a detailed discussion on Manipur and a statement from the PM",
    image:
      "https://th-i.thgim.com/public/incoming/6zyocs/article67144872.ece/alternates/LANDSCAPE_1200/20230731252L.jpg",
  },
  {
    content:
      "The two policemen present initially refused to help, saying, ‘There is no ignition key’, and later, after stopping the vehicle near the 1,000-strong mob, they ‘got down and disappeared from the spot",
    image:
      "https://th-i.thgim.com/public/incoming/fwi97j/article67143569.ece/alternates/LANDSCAPE_1200/IMG_Women_of_Kwairamband_2_1_L1BI0LSS.jpg",
  },
  {
    content:
      "Bumrah, who had undergone surgery for a lower back stress fracture earlier this year, was going through a rehabilitation process at the National Cricket Academy (NCA) in Bengaluru",
    image:
      "https://th-i.thgim.com/public/incoming/tk6fpv/article67143740.ece/alternates/LANDSCAPE_1200/2023-07-31T152755Z_1659896815_RC2RBV9E53ZX_RTRMADP_3_CRICKET-INDIA.JPG",
  },
  {
    content:
      "Indian Army Jawan goes missing from Jammu & Kashmir's Kulgam district; search operation launched",
    image:
      "https://www.livemint.com/lm-img/img/2023/07/30/600x338/indian_army_1690694093968_1690694094141.jpg",
  },

  {
    content:
      "Military department working on joint usage of common systems by Defence Forces",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202307/image-169-064618-16x9.jpg?VersionId=MgLSpvuVIHg13FVxmoYNXMkPGqgZleD5&size=690:388",
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
    borderRadius: 25,
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
