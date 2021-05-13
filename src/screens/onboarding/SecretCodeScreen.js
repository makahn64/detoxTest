import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Button, Icon, Input} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

export const SecretCodeScreen = () => {
  const [code, setCode] = useState('');
  const [fail, setFail] = useState('');
  const navigation = useNavigation();

  const handleCodePress = () => {
    if (code !== 'SECRET_CODE_123') {
      setFail('TRY AGAIN');
      setTimeout(() => {
        setFail('');
        setCode('');
      }, 3000);
    } else {
      navigation.navigate('Success');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#45008f'}}>
      <View style={styles.container}>
        <Text style={styles.header} testID="secret-screen-header">
          Please Enter Secret Code
        </Text>
        <View style={styles.inputContainer}>
          {fail ? <Text style={styles.fail}>{fail}</Text> : null}
          <Input
            placeholder="SECRET CODE"
            value={code}
            onChangeText={setCode}
            leftIcon={<Icon name="lock" size={24} color="#909090" />}
            testID="input-secret-code"
          />
        </View>
        <Button
          title="ENTER"
          onPress={handleCodePress}
          style={styles.button}
          testID="button-submit-secret-code"
          disabled={!code}
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
  inputContainer: {
    maxHeight: 200,
    backgroundColor: '#e3d5ff',
    marginHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
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
  fail: {
    color: '#ff0000',
    fontSize: 14,
    textAlign: 'center',
  },
});
