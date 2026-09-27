import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const colorFoods = [
  {name: 'Beet', color: '#ff6b6b', prebiotic: true},
  {name: 'Carrot', color: '#ff9f43', prebiotic: true},
  {name: 'Mango', color: '#feca57', prebiotic: false},
  {name: 'Spinach', color: '#2ecc71', prebiotic: true},
  {name: 'Blueberry', color: '#4dabf7', prebiotic: true},
  {name: 'Purple cabbage', color: '#845ef7', prebiotic: true},
];

const nutrientHighlights = [
  {label: 'Fermentable fiber', value: '8 foods', tone: '#8be9a8'},
  {label: 'Vitamin C', value: '11 foods', tone: '#ffd166'},
  {label: 'Potassium', value: '9 foods', tone: '#7bdff2'},
  {label: 'Prebiotics', value: '6 foods', tone: '#ff9fcb'},
];

const todayLog = [
  {meal: 'Breakfast', item: 'Rainbow smoothie', detail: 'Spinach, mango, berries'},
  {meal: 'Lunch', item: 'Crunchy bowl', detail: 'Cabbage, carrot, beet'},
  {meal: 'Snack', item: 'Fruit + seeds', detail: 'Blueberry + pumpkin seeds'},
];

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#ff6b6b" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.heroCard}>
          <Text style={styles.kicker}>EAT THE RAINBOW</Text>
          <Text testID="app-title" style={styles.title}>
            PlentyPlants
          </Text>
          <Text style={styles.subtitle}>
            Whole-food tracking for gut health, colorful variety, and intuitive eating.
          </Text>
        </View>

        <View style={styles.pillRow}>
          <View style={styles.pill}>
            <Text style={styles.pillText}>No calories</Text>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillText}>Gut-friendly</Text>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillText}>Prebiotic focus</Text>
          </View>
        </View>

        <View testID="variety-summary" style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>This week’s rainbow</Text>
          <Text style={styles.summaryText}>
            Your rainbow is looking vibrant — 11 colorful foods logged this week.
          </Text>
        </View>

        <View testID="prebiotic-card" style={styles.prebioticCard}>
          <Text style={styles.sectionHeading}>Prebiotic picks</Text>
          <Text style={styles.sectionCopy}>
            Foods that help feed your microbiome and support better variety.
          </Text>

          <View style={styles.foodRow}>
            {colorFoods
              .filter(food => food.prebiotic)
              .map(food => (
                <View key={food.name} style={[styles.foodChip, {backgroundColor: food.color}]}>
                  <Text style={styles.foodChipText}>{food.name}</Text>
                </View>
              ))}
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeading}>Nutrient snapshot</Text>
          <View style={styles.nutrientGrid}>
            {nutrientHighlights.map(item => (
              <View key={item.label} style={[styles.nutrientTile, {borderColor: item.tone}]}>
                <Text style={[styles.nutrientValue, {color: item.tone}]}>{item.value}</Text>
                <Text style={styles.nutrientLabel}>{item.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeading}>Daily log</Text>
          {todayLog.map(entry => (
            <Pressable key={`${entry.meal}-${entry.item}`} style={styles.logRow}>
              <Text style={styles.logMeal}>{entry.meal}</Text>
              <View style={styles.logMeta}>
                <Text style={styles.logItem}>{entry.item}</Text>
                <Text style={styles.logDetail}>{entry.detail}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff7f1',
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  heroCard: {
    backgroundColor: '#ff7a59',
    borderRadius: 28,
    padding: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.15,
    shadowRadius: 18,
    elevation: 8,
  },
  kicker: {
    color: '#fff3d9',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 8,
  },
  title: {
    fontSize: 38,
    fontWeight: '900',
    color: '#fffaf5',
    marginBottom: 8,
  },
  subtitle: {
    color: '#fffaf5',
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.9,
  },
  pillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 16,
  },
  pill: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ffd6a5',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  pillText: {
    color: '#3c2a25',
    fontWeight: '700',
    fontSize: 12,
  },
  summaryCard: {
    backgroundColor: '#2d6a4f',
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
  },
  summaryLabel: {
    color: '#d8f5df',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  summaryText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 26,
  },
  prebioticCard: {
    backgroundColor: '#fffefc',
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#f5d98b',
  },
  sectionHeading: {
    color: '#2f1f1e',
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 8,
  },
  sectionCopy: {
    color: '#5f4b48',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 14,
  },
  foodRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  foodChip: {
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 8,
  },
  foodChipText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 12,
  },
  sectionCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#f0eadb',
  },
  nutrientGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  nutrientTile: {
    width: '48%',
    backgroundColor: '#fffaf3',
    borderRadius: 18,
    padding: 16,
    borderWidth: 2,
  },
  nutrientValue: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 6,
  },
  nutrientLabel: {
    color: '#55413f',
    fontSize: 13,
    lineHeight: 18,
  },
  logRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#f9f7ff',
    borderRadius: 18,
    padding: 14,
    marginBottom: 10,
    gap: 12,
  },
  logMeal: {
    color: '#f2747d',
    fontWeight: '800',
    fontSize: 12,
    textTransform: 'uppercase',
    width: 72,
  },
  logMeta: {
    flex: 1,
  },
  logItem: {
    color: '#2a1d1c',
    fontWeight: '800',
    fontSize: 16,
    marginBottom: 3,
  },
  logDetail: {
    color: '#65515e',
    fontSize: 13,
  },
});

export default App;
