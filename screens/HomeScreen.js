import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Travel Planning Assistant!</Text>
      <Button
        title="Start Planning Your Trip"
        onPress={() => navigation.navigate('TravelPlanning')}
      />
    </View>
  );
};

export default HomeScreen;