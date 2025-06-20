import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ImageSourcePropType,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./style";

const { width } = Dimensions.get("window");

// Definir o tipo para os itens do FlatList
interface RecommendedItem {
  id: string;
  image: ImageSourcePropType;
  salonName: string;
  location: string;
  nextDate: string;
  price: string;
}

const TravelSearchScreen = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [budget, setBudget] = useState("");

  // Data para o slider
  const recommendedItems: RecommendedItem[] = [
    {
      id: "1",
      image: require("../../../assets/images/salao1.webp"),
      salonName: "Salão Aurora",
      location: "Rio de Janeiro, Brasil",
      nextDate: "13 de julho",
      price: "R$250 por serviço",
    },
    {
      id: "2",
      image: require("../../../assets/images/salao3.jpg"),
      salonName: "Salão Sol",
      location: "São Paulo, Brasil",
      nextDate: "15 de julho",
      price: "R$300 por serviço",
    },
    {
      id: "3",
      image: require("../../../assets/images/salao2.png"),
      salonName: "Salão Maré",
      location: "Salvador, Brasil",
      nextDate: "20 de julho",
      price: "R$280 por serviço",
    },
  ];

  const flatListRef = useRef<FlatList<RecommendedItem>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % recommendedItems.length;
        if (flatListRef.current) {
          flatListRef.current.scrollToIndex({
            index: nextIndex,
            animated: true,
          });
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [recommendedItems.length]);

  const handleSearch = () => {
    console.log("Searching for:", { destination, startDate, budget });
  };

  const renderItem = ({ item }: { item: RecommendedItem }) => (
    <View style={styles.recommendedItem}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.recommendedItemInfo}>
        <Text style={styles.salonName}>{item.salonName}</Text>
        <Text>
          <FontAwesome name="map-marker" size={24} color="#800080" />
          {item.location}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/world map.png")}
        style={styles.dateBudgetContainer}
      >
        <Text style={styles.subtitle}>
          Encontre os salões mais próximos de si!
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar por um serviço?"
          value={destination}
          onChangeText={setDestination}
        />
      </ImageBackground>

      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Pesquisar</Text>
      </TouchableOpacity>
      <View style={styles.filterContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.line} />
          <Text style={styles.filterText}>Tente pesquisar por</Text>
          <View style={styles.line} />
        </View>
        <ScrollView
          horizontal={true}
          style={styles.filterIcons}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.filterItem}>
            <FontAwesome name="paint-brush" size={24} color="#800080" />
            <Text>Aplicação de Unhas</Text>
          </View>
          <View style={styles.filterItem}>
            <FontAwesome name="smile-o" size={24} color="#800080" />
            <Text>Pirruca</Text>
          </View>
          <View style={styles.filterItem}>
            <FontAwesome name="scissors" size={24} color="#800080" />
            <Text>Cortes Masculinos</Text>
          </View>
          <View style={styles.filterItem}>
            <FontAwesome name="product-hunt" size={24} color="#800080" />
            <Text>Produtos de Cabelos</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.titleContainer}>
        <View style={styles.line} />
        <Text style={styles.recommendedTitle}>Salões Recomendados</Text>
        <View style={styles.line} />
      </View>
      <FlatList
        ref={flatListRef}
        data={recommendedItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScrollToIndexFailed={(info) => {
          const wait = new Promise((resolve) => setTimeout(resolve, 500));
          wait.then(() => {
            if (flatListRef.current) {
              flatListRef.current.scrollToIndex({
                index: info.index,
                animated: true,
              });
            }
          });
        }}
      />
    </View>
  );
};

export default TravelSearchScreen;
