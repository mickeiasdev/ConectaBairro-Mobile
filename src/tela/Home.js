import { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fontSizes, fonts } from '../../theme';
import { VAGAS } from '../arrays/arrays';
import JobCard from '../componentes/JobCard';
import { AuthContext } from '../context/AuthContext';

export default function HomeScreen() {
  const { signOut } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Vagas</Text>
        <TouchableOpacity onPress={() => signOut()} style={styles.logoutButton}>
          <Ionicons name="exit-outline" size={32} color={colors.red500} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={VAGAS}
        renderItem={({ item }) => <JobCard vaga={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
  },
  headerTitle: {
    fontSize: fontSizes.title,
    fontFamily: fonts.heading,
    color: colors.primary600,
  },
  logoutButton: {
    padding: 8,
  },
  list: {
    padding: 16,
  },
});

