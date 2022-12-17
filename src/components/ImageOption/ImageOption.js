import React from 'react';
import  { Text, View, Image, Pressable} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';


const ImageOption = ({ image, text,  isSelected, onPress }) => {
    //const { image, text } = props;
    return (
      <Pressable
        onPress={onPress}
       style={[styles.optionContainer, isSelected ? styles.selectedContainer : {}]}>
        <Image source={{
          uri: image
          }}
          resizeMode="contain"
          style={styles.optionImage}
        />
        <Text style={isSelected ?  styles.selectedText : styles.optionText }>{text}</Text>
      </Pressable>
    )
  };

  ImageOption.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    onPress:PropTypes.func,

  }
  ImageOption.defaultProps = {
    text: "Default",
    isSelected: false,
    onPress: () => {},
  }

export default ImageOption;