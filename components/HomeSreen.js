import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet, Keyboard, SafeAreaView, ActivityIndicator, FlatList } from 'react-native';

const HomeScreen = ({navigation}) => {
  const [recipes, setRecipes] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const [numberofRecipes, setNumberofRecipes] = useState('100')
  const [loading, setLoading] = useState(false);

  const apiId = '3a4847c3'
  const apiKey = `9701efe1d032ef49b47d83f1765942fd`;
  const apiUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${apiId}&app_key=${apiKey}&from=0&to=${numberofRecipes}&calories=591-722&health=alcohol-free`;

  async function apiCall() {
    setLoading(true);
    let resp = await fetch(apiUrl);
    let respJson = await resp.json();
    setRecipes(respJson.hits);
    setLoading(false);
    Keyboard.dismiss()
    setSearchQuery('')
  }
  
  useEffect(() => {
    setLoading(true)
    apiCall()
  }, [])

  return(
    <View style={styles.container}>
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <TextInput placeholder='Search Recipe...'
      style={styles.inputField}
      onChangeText={text => setSearchQuery(text)}
      />
      </View>

      <TouchableOpacity style={styles.button}
      onPress={apiCall}
      title='submit'>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      <SafeAreaView style={{flex: 1}}>
        {loading ? <ActivityIndicator size='large' color='#ffba00'/> :
        <FlatList
        style={styles.recipes}
        data={recipes}
        renderItem={({item}) => (
          <View style={styles.recipe}>
            <Image style={styles.image}
            source={{uri: `${item.recipe.image}`}}
            />
            <View style={{padding: 20, flexDirection: 'row'}}>
              <Text style={styles.label}>{item.recipe.label}</Text>
              <TouchableOpacity onPress={() => {navigation.navigate('Details', {recipe: item.recipe})}}>
                <Text style={{marginLeft: 50, fontSize: 20, color: '#ffba00'}}>
                  Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()} />}
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  inputField: {
    height: '120%',
    width: '97%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 10,
    paddingLeft: 15
  },
  buttons:{
    flexDirection: 'row'
  },
  button: {
    backgroundColor: '#ffba00',
    width: '97%',
    height: '120%',
    alignItems: 'center',
    margin: 15,
    height: 35,
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 30
  },
  buttonText: {

    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20
  },
  label: {
    fontSize: 15,
    width: '60%',
    color: '#ffba00',
    fontWeight: '700'
  },
  recipe: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    margin: 5,
    marginBottom: 5
  }
})
export default HomeScreen;