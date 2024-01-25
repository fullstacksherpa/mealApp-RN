import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategorygridTile from "../components/CategoryGridTile";

function renderCategoryItem(itemData) {
  return (
  <CategorygridTile title={itemData.item.title} color={itemData.item.color} />);
}

function CategoriesScreen() {
  return (
  <FlatList
    data={CATEGORIES}
    keyExtractor={(item) => item.id}
    renderItem={renderCategoryItem}
    numColumns={2}
  />);
}
export default CategoriesScreen;
