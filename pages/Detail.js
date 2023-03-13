import { View, StyleSheet, FlatList, Linking} from "react-native";
import React from 'react'
import DetailCard from '../components/DetailCard'
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Detail = ({ route }) => {

  const { idMeal } = route.params;
  const { data, loading, error } = useFetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + idMeal);

  if (loading) { return <Loading /> }
  if (error) { return <Error /> }

  const renderDetailMeal = ({ item }) => (
    <DetailCard
      mealDetail={item}
      onSelectDetail={() => { Linking.openURL(item.strYoutube) }}
    />
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={data.meals}
        renderItem={renderDetailMeal}
        keyExtractor={item => item.idMeal}
      />
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

