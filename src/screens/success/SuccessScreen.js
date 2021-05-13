import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

export const SuccessScreen = props => {
  const navigation = useNavigation();

  const handleStartOver = () => {
    navigation.popToTop();
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#45008f'}}>
      <View style={styles.container}>
        <Text style={styles.header} testID="success-header">
          Success!
        </Text>
        <Text style={styles.text} testID="success-cta">
          Nice job entering the secret code. Push the button below to start
          over.
        </Text>
        <Button
          title="START OVER"
          onPress={handleStartOver}
          style={styles.button}
          testID="button-start-over"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 100,
    fontSize: 40,
    fontWeight: '600',
    color: '#d0d0d0',
    textAlign: 'center',
  },
  button: {
    marginBottom: 100,
    marginHorizontal: 20,
  },
  text: {
    color: '#d0d0d0',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 40,
  },
});
