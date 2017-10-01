import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    thumbnailStyle,
    headerContentStyles,
    headerTextStyle,
    thumbnailContainerStyle,
    imageStyle,
    cardStyle
    } = styles;
  return (
    <Card>
    <CardSection>
    <View style={thumbnailContainerStyle}>
      <Image
      style={thumbnailStyle}
      source={{ uri: thumbnail_image }}
      />
    </View>
    <View style={headerContentStyles}>
      <Text style={headerTextStyle}>{title}</Text>
      <Text>{artist}</Text>
    </View>
    </CardSection>

    <CardSection>
      <Image
        source={{ uri: image }}
        style={imageStyle} />
    </CardSection>

    <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
        Buy Now
        </Button>
    </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyles: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10

  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  cardStyle: {
    backgroundColor: '#D1F2EB'
  }
}

export default AlbumDetail;
