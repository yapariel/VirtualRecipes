import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const Details = ({route}) => {
  const {recipe} = route.params;

  return(
    <ScrollView>
      <View style={styles.details}>
      <View style={styles.item}>
          <Text style={{fontSize: 22, color: '#ffba00', fontWeight: '800'}}>
            Name:
          </Text>
          <Text style={styles.ingredients}> {`${recipe.label}`}</Text>
        </View>

        <View style={styles.item}>
        <Text style={{fontSize: 22, color: '#ffba00', fontWeight: '800'}}>
          Ingredients:
        </Text>
        <Text style={styles.ingredients}> {`${recipe.ingredients.map((item) => item['food'])}`}</Text>
        </View>

        <View style={styles.item}>
          <Text style={{fontSize: 22, color: '#ffba00', fontWeight: '800'}}>
            Category:
          </Text>
          <Text style={styles.ingredients}> {`${recipe.ingredients.map((item) => item['foodCategory'])}`}</Text>
        </View>

        <View style={styles.item}>
          <Text style={{fontSize: 22, color: '#ffba00', fontWeight: '800'}}>
            Calories:
          </Text>
          <Text style={styles.ingredients}> {`${recipe.calories}`}</Text>
        </View>

        <View style={styles.item}>
          <Text style={{fontSize: 22, color: '#ffba00', fontWeight: '800'}}>
            Meal Type:
          </Text>
          <Text style={styles.ingredients}> {`${recipe.mealType}`}</Text>
        </View>

        <View style={styles.item}>
          <Text style={{fontSize: 22, color: '#ffba00', fontWeight: '800'}}>
            Description:
          </Text>
          <Text style={styles.ingredients}> {`${recipe.ingredientLines}`}</Text>
        </View>

        <View style={styles.item}>
          <Text style={{fontSize: 22, color: '#ffba00', fontWeight: '800'}}>
            Diet:
          </Text>
          <Text style={styles.ingredients}> {`${recipe.dietLabels}`}</Text>
        </View>

        <View style={styles.item}>
          <Text style={{fontSize: 22, color: '#ffba00', fontWeight: '800'}}>
            Cuisine:
          </Text>
          <Text style={styles.ingredients}> {`${recipe.cuisineType}`}</Text>
        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  details: {
    marginBottom: 30,
    padding: 2
  },
  ingredients: {
    fontSize: 20,
    color: '#ffba00'
  },
  item: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset:{ width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 15,
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})
export default Details;