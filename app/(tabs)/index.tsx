import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useCamera } from '@/hooks/useCamera';
import { AiPriseButton } from 'aiprise-react-native-sdk';

export default function HomeScreen() {
  const permission = useCamera();
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <AiPriseButton
          mode="SANDBOX"
          templateID="060b3bcd-c309-46fa-be6a-0f15cb4d9a3a"
          key="ai-prise-button"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
