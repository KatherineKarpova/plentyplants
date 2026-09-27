/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

test('renders the PlentyPlants rainbow app shell', async () => {
  const component = ReactTestRenderer.create(<App />);

  const appTitle = component.root.findByProps({ testID: 'app-title' });
  const varietySummary = component.root.findByProps({ testID: 'variety-summary' });
  const prebioticCard = component.root.findByProps({ testID: 'prebiotic-card' });

  expect(appTitle.props.children).toBe('PlentyPlants');
  expect(varietySummary.props.children).toContain('rainbow');
  expect(prebioticCard.props.children).toContain('Prebiotic picks');
});
