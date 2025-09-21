import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { colors, fontSizes, fonts } from '../../theme';

export default function PlaceholderScreen({ route }) {
  const { title } = route.params;
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
        <View style={styles.content}>
            <Text style={styles.title}>Em construção</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray100,
  },
  header: {
    padding: 20,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
  },
  headerTitle: {
    fontSize: fontSizes.title,
    fontFamily: fonts.heading,
    color: colors.primary600,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: fontSizes.large,
    fontFamily: fonts.body,
    color: colors.gray300,
  },
});

