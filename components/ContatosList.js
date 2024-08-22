import React from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function About({ navigation, contatos }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={contatos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.contato}>
            <View style={styles.iconContainer}>
              <Icon name="person" size={40} color="#fff" />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.detalhe}>Telefone: {item.telefone}</Text>
              <Text style={styles.detalhe}>Email: {item.email}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
        color="#6200ee" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  contato: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#6200ee',
    borderRadius: 50,
    padding: 10,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  detalhe: {
    fontSize: 16,
    color: '#666',
  },
});
