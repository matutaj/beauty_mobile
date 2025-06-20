import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
    color: "#fff",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  dateBudgetContainer: {
    width: "100%",
    height: 200,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  searchButton: {
    backgroundColor: "#800080",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  searchButtonText: { color: "#fff", fontWeight: "bold" },
  filterContainer: { marginVertical: 10 },
  filterText: { textAlign: "center", fontSize: 15 },
  filterIcons: {
    paddingTop: 5,
    paddingBottom: 15,
    flexDirection: "row",
    marginTop: 5,
  },
  filterItem: { alignItems: "center", marginHorizontal: 10 },
  recommendedItemInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 5,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
    paddingBottom: 10,
  },
  recommendedTitle: {
    fontSize: 15,
    textAlign: "center",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#800080",
    marginHorizontal: 10,
  },
  recommendedItem: {
    alignItems: "center",
    width: Dimensions.get("window").width,
    paddingHorizontal: 10,
  },
  image: { width: "100%", height: 200, borderRadius: 10 },
  salonName: { fontSize: 16, fontWeight: "bold" },
  price: { color: "#800080", fontWeight: "bold" },
});

export default styles;
