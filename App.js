import React, { Component } from 'react'
import ProductsNavigator from './navigation/ProductsNavigator';

 class App extends Component {
  render() {
    return <ProductsNavigator />
  }
}

export default App




















/*export default function App() {
 
  const [listItems, setListItems] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)



  addInputHandler = input => {

    setListItems(currentListItems => [
      ...currentListItems,
      { id: Math.random().toString(), value: input }
    ]);

    setIsAddMode(false);


  };

  deleteInputHandler = inputId => {
    setListItems( currentListItems => { 
      return currentListItems.filter( i => i.id !== inputId)
    })
  }

  return (
    <View style={styles.container}>
      
      <Button title='add input' onPress={() => setIsAddMode(true)}/>
      <Input onAddInput={addInputHandler} visible={isAddMode}/>
      <FlatList
        contentContainerStyle
        data={listItems}
        scrollEnabled={true}
        keyExtractor={(item, index) => item.id} //Needed when we don't specify the key
        renderItem={itemData => (

          <Item title={itemData.item.value} id={itemData.item.id} onDelete={deleteInputHandler}/>
          
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },


});*/
