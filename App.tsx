import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff7f1' }}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 32 }}>
        <View style={{ backgroundColor: '#ff7a59', borderRadius: 28, padding: 24, marginBottom: 16 }}>
          <Text style={{ color: '#fff3d9', fontSize: 12, fontWeight: '800', letterSpacing: 2, marginBottom: 8 }}>
            EAT THE RAINBOW
          </Text>
          <Text testID="app-title" style={{ fontSize: 38, fontWeight: '900', color: '#fffaf5', marginBottom: 8 }}>
            PlentyPlants
          </Text>
        </View>

        <View testID="variety-summary" style={{ backgroundColor: '#2d6a4f', borderRadius: 24, padding: 20, marginBottom: 16 }}>
          <Text style={{ color: '#fff', fontWeight: '700', fontSize: 18, lineHeight: 26 }}>
            Your rainbow is looking vibrant — 11 colorful foods logged this week.
          </Text>
        </View>

        <View testID="prebiotic-card" style={{ backgroundColor: '#fffefc', borderRadius: 24, padding: 20, borderWidth: 1, borderColor: '#f5d98b' }}>
          <Text style={{ color: '#2f1f1e', fontSize: 22, fontWeight: '800', marginBottom: 8 }}>
            Prebiotic picks
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
