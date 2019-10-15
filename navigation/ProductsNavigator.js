import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import ProductsScreen from '../screens/ProductsScreen';
import SingleProductScreen from '../screens/SingleProductScreen';
import SingleProductGalleryScreen from '../screens/SingleProductGalleryImageScreen';


const ProductsNavigator = createStackNavigator({
    Products: ProductsScreen,
    SingleProduct : SingleProductScreen,
    SingleProductGallery: SingleProductGalleryScreen
   /* SingleProduct : {
        screen: SingleProductScreen
        }
    */
})


export default createAppContainer(ProductsNavigator)