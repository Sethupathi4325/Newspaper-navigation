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
      "Every morning and evening during the Aadi festival, Alaghar's war instrument, Chakrathathalwar chariot, crawls through the road",
    image:
      "https://images.news18.com/tamil/uploads/2023/08/Madurai-temple-16908510823x2.jpg?impolicy=website&width=540&height=339",
  },
  {
    content:
      "In Madurai, the price of tomatoes has risen sharply again..! Here is the price list of vegetables.",
    image: "https://images.news18.com/tamil/uploads/2023/07/madurai-39.jpg",
  },
  {
    content:
      "With MTC buses still plying from the old terminus, the new one at Tambaram Sanatorium is underutilised, reports T. Madhavan",
    image:
      "https://th-i.thgim.com/public/migration_catalog/article11564101.ece/alternates/LANDSCAPE_1200/08DCTBRM-_LEAD",
  },
  {
    content:
      "Like any other locality in Chennai, Mylapore is plagued by mosquitoes. But, unlike most of them, it has an advantage while dealing with the problem, a long-time resident tells K. Sarumathi",
    image:
      "https://th-i.thgim.com/public/migration_catalog/article11722166.ece/alternates/LANDSCAPE_1200/01DCMYPR-MOSQUITOES",
  },
  {
    content:
      "Chennai Metro’s data till July 29 shows that the daily average number of travellers touched 2.68 lakh whereas in June the figure was 2.46 lakh passengers",
    image:
      "https://th-i.thgim.com/public/incoming/c5me3b/article67143095.ece/alternates/LANDSCAPE_1200/4871_31_7_2023_18_59_2_1_20230731_175933.JPG",
  },
  {
    content: "Sharad Pawar to fete PM Modi as his men protest Manipur inaction",
    image:
      "https://th-i.thgim.com/public/migration_catalog/article11713157.ece/alternates/LANDSCAPE_1200/17DCTNGR-_USMAN_ROADHAWKER_",
  },
  {
    content:
      "Neyveli Lignite Corporation tells Justice S.M. Subramaniam that it is willing to pay compensation for the crops that had to be cleared using earthmovers for diversion of Upper Paravanar canal",
    image:
      "https://th-i.thgim.com/public/incoming/7svw0r/article67142993.ece/alternates/LANDSCAPE_1200/IMG_High_Court_Building_2_1_F9BGEGBR.jpg",
  },
  {
    content:
      "Medavakkam panchayat struggles to handle the mounting problem of unsegregated waste",
    image:
      "https://th-i.thgim.com/public/incoming/lcq73m/article67139268.ece/alternates/LANDSCAPE_1200/Medavakkam%20Garbage%20Dumping%20Ground%204.jpg",
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
