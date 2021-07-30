import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import product from '../../data/product';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import {styles} from './style';

const ProductScreen = () => {
  const [selectedValue, setSelectedValue] = useState(
    product.options ? product.options[0] : null,
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>
      {/*  */}
      <ImageCarousel Images={product.images} />
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        {product.options.map((option, ind) => (
          <Picker.Item key={ind} label={option} value={option} />
        ))}
      </Picker>

      <Text style={styles.price}>
        from ${product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> {product.oldPrice}</Text>
        )}
      </Text>
      <Text style={styles.description}>{product.description}</Text>
      {/* QuantitySelector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      {/* Buttton */}
      <Button text={'Add to Cart'} onPress={() => {}} />
      <Button text={'Buy now'} onPress={() => {}} />
    </ScrollView>
  );
};

export default ProductScreen;
