import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './components/Cadastro';
import ContatosList from './components/ContatosList';

export default function App() {
  const [contatos, setContatos] = useState([]);

  const adicionarContato = (contato) => {
    setContatos([...contatos, contato]);
  };

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cadastro">
          {(props) => <Cadastro {...props} adicionarContato={adicionarContato} />}
        </Stack.Screen>
        <Stack.Screen name="ContatosList">
          {(props) => <ContatosList {...props} contatos={contatos} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
