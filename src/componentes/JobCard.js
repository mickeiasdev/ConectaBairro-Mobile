import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, fonts, fontSizes, gradients } from '../../theme';

export default function JobCard({ vaga }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{vaga.title}</Text>
      <Text style={styles.company}>{vaga.company}</Text>
      <Text style={styles.location}>{vaga.location}</Text>
      <TouchableOpacity style={styles.button}>
        <LinearGradient {...gradients.primaryButton} style={styles.gradient}>
          <Text style={styles.buttonText}>Ver Vaga</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  title: {
    fontSize: fontSizes.large,
    fontFamily: fonts.heading,
    color: colors.text,
  },
  company: {
    fontSize: fontSizes.medium,
    fontFamily: fonts.body,
    color: colors.gray300,
    marginVertical: 8,
  },
  location: {
    fontSize: fontSizes.small,
    fontFamily: fonts.body,
    color: colors.text,
    marginBottom: 16,
  },
  button: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  gradient: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.heading,
    fontSize: fontSizes.medium,
  },
});

