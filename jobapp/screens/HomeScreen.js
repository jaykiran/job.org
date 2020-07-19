/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Text>Hello Home</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

