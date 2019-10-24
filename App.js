import React, { Component } from 'react'
import ProductsNavigator from './navigation/ProductsNavigator';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import authReducer from './store/reducers/auth';
import { YellowBox } from 'react-native';

const rootReducer = combineReducers({
  auth: authReducer
})

const store = createStore(
rootReducer,
compose(applyMiddleware(thunk))
)


class App extends Component {

  componentDidMount(){
    console.ignoredYellowBox = ['Remote debugger'];
    YellowBox.ignoreWarnings([
     'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
    ]);
  }



  render() {

   
    return (
      <Provider store={store}>
        <ProductsNavigator />
      </Provider>

    )
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
