import React, {useCallback, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

interface ImageProp {
  Images: string[];
}

const ImageCarousel = ({Images}: ImageProp) => {
  const widthDimention = useWindowDimensions().width;
  const [avtiveIndex, setActiveIndex] = useState(0);

  const onFlatListUpdate = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);
  return (
    <View style={styles.root}>
      <FlatList
        data={Images}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: widthDimention - 40}]}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={widthDimention - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onFlatListUpdate}
      />
      <View style={styles.dots}>
        {Images.map((image, ind) => (
          <View
            key={ind}
            style={[
              styles.dot,
              {
                backgroundColor: ind === avtiveIndex ? '#c9c9c9' : '#ededed',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  root: {},
  image: {
    margin: 10,
    height: 250,
    resizeMode: 'contain',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#c9c9c9',
    margin: 5,
    backgroundColor: '#ededed',
  },
});
