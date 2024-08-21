import { StyleSheet, View } from 'react-native';
import { useCamera } from '@/hooks/useCamera';
import { AiPriseButton } from 'aiprise-react-native-sdk';

export default function HomeScreen() {
  const permission = useCamera();
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <AiPriseButton
          mode="SANDBOX"
          templateID="TEMPLATE_ID"
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
