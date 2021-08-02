import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button';
import CartProductItem from '../../components/CartProductItem';
import cart from '../../data/cart';
import products from '../../data/products';

const ShoppingCartScreen = () => {
  const totalPrice = cart.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0,
  );
  const navigation = useNavigation();
  const onCheckout = () => {
    navigation.navigate('AddressScreen');
  };
  return (
    <View style={styles.page}>
      <FlatList
        data={cart}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={{fontSize: 18}}>
              Subtotal ({cart.length} items):
              <Text style={{color: '#e47911', fontWeight: 'bold'}}>
                {' '}
                ${totalPrice.toFixed(2)}
              </Text>
            </Text>
            <Button
              text="Proceed to checkout"
              onPress={onCheckout}
              containerStyle={{
                backgroundColor: '#f7e300',
                borderColor: '#c7b702',
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
