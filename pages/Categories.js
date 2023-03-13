import React from "react";
import { View, FlatList, StyleSheet } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import useFetch from '../hooks/useFetch';
import Loading from "../components/Loading";
import Error from "../components/Error";

const Categories = ({ navigation }) => {

  const { data, loading, error } = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');

  if (loading) { return <Loading /> }

  if (error) { return <Error /> }

  const CategorySelect = (strCategory) => { navigation.navigate("Meals", { strCategory }) }

  const renderCategory = ({ item }) => <CategoryCard category={item} onSelectCategory={() => CategorySelect(item.strCategory)} />

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.idCategory}
        renderItem={renderCategory}
        data={data.categories}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange'
  },

})
