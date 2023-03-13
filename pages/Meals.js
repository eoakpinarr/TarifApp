import React from "react";
import { Text, FlatList, ActivityIndicator, StyleSheet, SafeAreaView } from "react-native";
import useFetch from "../hooks/useFetch";
import MealCard from '../components/MealCard'

const Meals = ({ route, navigation }) => {

    const { strCategory } = route.params;

    const { loading, data, error } = useFetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + strCategory)

    const handleItem = (idMeal) => { navigation.navigate("Detail", {idMeal}) }

    const renderMeal = ({ item }) => <MealCard meal={item} onSelectMeal={() => handleItem(item.idMeal)} />

    if (loading) { return <ActivityIndicator size={"large"} /> }

    else if (error) { return <Text>{error}</Text> }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                keyExtractor={item => item.idMeal}
                data={data.meals}
                renderItem={renderMeal}
            />
        </SafeAreaView>
    )
}

export default Meals

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        padding: 10,
    }
})