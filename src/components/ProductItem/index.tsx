import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

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
const MAX_RATING = 5;
const MIN_RATING = 1;

const ProductItem = ({item}: ProductItemProps) => {
  const navigation = useNavigation();
  const [rating] = useState<number>(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING,
  );
  const onPress = () => {
    navigation.navigate('ProductScreen', {id: item.id});
  };
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={styles.root}>
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
          {Array(rating)
            .fill(null)
            .map((_, ind) => (
              <FontAwsome
                key={ind}
                style={styles.star}
                name={ind < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                size={18}
                color={'#e47911'}
              />
            ))}
          <Text>{item.ratings}</Text>
        </View>
        <Text style={styles.price}>
          from ${item.price}
          {item.oldPrice && (
            <Text style={styles.oldPrice}> {item.oldPrice}</Text>
          )}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
