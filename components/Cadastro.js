import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  nome: Yup.string().required('Nome é obrigatório'),
  telefone: Yup.string()
    .matches(/^\d+$/, 'Telefone deve conter apenas números')
    .min(10, 'Telefone deve ter pelo menos 10 dígitos')
    .max(15, 'Telefone deve ter no máximo 15 dígitos')
    .required('Telefone é obrigatório'),
  email: Yup.string()
    .email('Email inválido')
    .required('Email é obrigatório'),
});

export default function Cadastro({ navigation, adicionarContato }) {
  const handleSubmit = (values, { resetForm }) => {
    adicionarContato(values);
    resetForm();
    navigation.navigate('ContatosList');
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ nome: '', telefone: '', email: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              onChangeText={handleChange('nome')}
              onBlur={handleBlur('nome')}
              value={values.nome}
            />
            {touched.nome && errors.nome && <Text style={styles.error}>{errors.nome}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Telefone"
              onChangeText={handleChange('telefone')}
              onBlur={handleBlur('telefone')}
              value={values.telefone}
              keyboardType="numeric"
            />
            {touched.telefone && errors.telefone && <Text style={styles.error}>{errors.telefone}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <Button
              title="Cadastrar"
              onPress={handleSubmit}
              color="#6200ee" 
            />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,

  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 12,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});
