import { View, Text, Image, TouchableOpacity, Linking, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './DetailCard.style'

const DetailCard = ({ mealDetail, onSelectDetail }) => {

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={{ uri: mealDetail.strMealThumb }}
                style={styles.image}
            />
            <View style={styles.scroll}>
                <Text style={styles.textHeader}>{mealDetail.strMeal}</Text>
                <Text syle={styles.description}>{mealDetail.strArea}</Text>
                <Text style={styles.instruction}>{mealDetail.strInstructions}</Text>

            <TouchableOpacity onPress={onSelectDetail} style={styles.button}>
                <Text style={styles.text_button}>Watch on Youtube</Text>
            </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default DetailCard