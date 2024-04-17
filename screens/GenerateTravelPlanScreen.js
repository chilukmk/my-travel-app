import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const GenerateTravelPlanScreen = ({ route }) => {
  const { travelPlan } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        Your Travel Plan
      </Text>
      <ScrollView>
        <Text>Destination: {travelPlan.destination}</Text>
        <Text>Budget: {travelPlan.budget}</Text>
        <Text>Transportation: {travelPlan.transportation.mode} (${travelPlan.transportation.cost})</Text>
        <Text>
          Accommodation: {travelPlan.accommodation.type} (${travelPlan.accommodation.cost} for {travelPlan.accommodation.duration} nights)
        </Text>
        <Text>Activities:</Text>
        {travelPlan.activities.map((activity, index) => (
          <Text key={index}>- {activity.name} (${activity.cost})</Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default GenerateTravelPlanScreen;