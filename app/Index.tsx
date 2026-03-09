import { Link } from 'expo-router';
import { StyleSheet, ScrollView, View } from 'react-native';
import {card} from '../components/card.jsx';
export default function ModalScreen() {
  return (
    <ScrollView>
    <View style={styles.container}>
    <card style={styles.card}></card>
    <card style={styles.card}></card>
    <card style={styles.card}></card>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 20,
    width: '100%',
    height:'40%',
    backgroundColor: '#fff',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  card:{
    width: '30%', 
    height: 80,
    backgroundColor: '#1b1b1d',
    borderRadius: 20,
  },
});
