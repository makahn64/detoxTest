import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {DetoxLogo} from '../../components/DetoxLogo';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

export const LandingScreen = props => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#45008f'}}
      testID="landing-screen">
      <View style={styles.container}>
        <Text style={styles.header} testID="landing-header">
          Detox Test
        </Text>
        <DetoxLogo />
        <Button
          title="START"
          onPress={() => navigation.navigate('Enter Secret Code')}
          style={styles.button}
          testID="start-button"
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
});
