import { Button, StyleSheet, View } from 'react-native';
import { useNavigation } from '../../common/hooks/use-navigation';
import { SafeAreaView } from 'react-native-safe-area-context';

const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Go to Counter App"
        onPress={() => navigation.navigate('CounterApp')}
      />
      <Button
        title="Anime App"
        onPress={() => navigation.navigate('AnimeApp')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});

export default Dashboard;
