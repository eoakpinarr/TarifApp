import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './MealCard.style'

const MealCard = ({meal, onSelectMeal}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onSelectMeal}
        >
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: meal.strMealThumb }}
                />
                <View style={styles.name_container}>
                    <Text style={styles.name}>{meal.strMeal}</Text>
                </View>
            </View>


        </TouchableOpacity>
    )
}

export default MealCard