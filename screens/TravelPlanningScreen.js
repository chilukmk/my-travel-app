import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TravelPlanningScreen = () => {
  const [destination, setDestination] = useState('');
  const [budget, setBudget] = useState('');
  const navigation = useNavigation();

  const handlePlanTrip = () => {
    // Log the user's destination and budget information to the console
    console.log('Destination:', destination);
    console.log('Budget:', budget);

    // Generate the travel plan
    const travelPlan = generateTravelPlan(destination, budget);

    // Navigate to the GenerateTravelPlanScreen with the travel plan
    navigation.navigate('GenerateTravelPlan', { travelPlan });
  };

  const generateTravelPlan = (destination, budget) => {
    console.log('Generating travel plan for:', destination, 'with a budget of:', budget);

    // Generate a sample travel plan
    const travelPlan = {
      destination: destination,
      budget: budget,
      transportation: {
        mode: 'flight',
        cost: 500,
      },
      accommodation: {
        type: 'hotel',
        cost: 200,
        duration: 3, // nights
      },
      activities: [
        {
          name: 'City Tour',
          cost: 50,
        },
        {
          name: 'Museum Visit',
          cost: 20,
        },
      ],
    };

    return travelPlan;
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Plan Your Trip</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => setDestination(text)}
        value={destination}
        placeholder="Enter destination"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => setBudget(text)}
        value={budget}
        placeholder="Enter budget"
        keyboardType="numeric"
      />
      <Button title="Plan Trip" onPress={handlePlanTrip} />
    </View>
  );
};

export default TravelPlanningScreen;