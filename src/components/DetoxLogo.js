import React from 'react';
import {Image, StyleSheet} from 'react-native';

export const DetoxLogo = props => {
  return (
    <Image
      source={require('../assets/images/DetoxLogo.png')}
      style={styles.logo}
      testID="robot-logo"
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
