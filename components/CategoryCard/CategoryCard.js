import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './CategoryCard.style'

const CategoryCard = ({category, onSelectCategory}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onSelectCategory}
        >
            <Image
                source={{ uri: category.strCategoryThumb }}
                style={styles.image}
            />
            <Text style={styles.text}>{category.strCategory}</Text>
        </TouchableOpacity>            

    )
}

export default CategoryCard
