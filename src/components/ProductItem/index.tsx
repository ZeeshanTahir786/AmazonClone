import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import FontAwsome from 'react-native-vector-icons/FontAwesome';

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = ({item}: ProductItemProps) => {
  return (
    <View style={styles.root}>
      {/* Render Product Component */}
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        <View style={styles.ratingContainer}>
          <FontAwsome
            style={styles.star}
            name="star"
            size={18}
            color={'#e47911'}
          />
          <FontAwsome
            style={styles.star}
            name="star"
            size={18}
            color={'#e47911'}
          />
          <FontAwsome
            style={styles.star}
            name="star"
            size={18}
            color={'#e47911'}
          />
          <FontAwsome
            style={styles.star}
            name="star-half-full"
            size={18}
            color={'#e47911'}
          />
          <FontAwsome
            style={styles.star}
            name="star-o"
            size={18}
            color={'#e47911'}
          />
          <Text>{item.ratings}</Text>
        </View>
        <Text style={styles.price}>
          from ${item.price}
          {item.oldPrice && (
            <Text style={styles.oldPrice}> {item.oldPrice}</Text>
          )}
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;
