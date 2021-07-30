import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    height: 150,
    flex: 2,
    resizeMode: 'contain',
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  star: {
    margin: 2,
  },
  quantityContainer: {
    marginVertical: 10,
    marginLeft: 5,
  },
});
