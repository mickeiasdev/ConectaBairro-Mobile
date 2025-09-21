// src/screens/AuthScreen.js
// Tela para Login e Registo de utilizadores, agora com validação.

import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, gradients, fontSizes, fonts } from '../../theme';
import { AuthContext } from '../context/AuthContext';

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAuthentication = () => {

    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    signIn();
  };

  return (
    <LinearGradient {...gradients.background} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>{isLogin ? 'Login' : 'Criar Conta'}</Text>

            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu email"
              placeholderTextColor={colors.gray300}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="********"
              placeholderTextColor={colors.gray300}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity style={styles.button} onPress={handleAuthentication}>
              <LinearGradient {...gradients.primaryButton} style={styles.gradient}>
                <Text style={styles.buttonText}>{isLogin ? 'Entrar' : 'Registar'}</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { setIsLogin(!isLogin); setError(''); }}>
              <Text style={styles.toggleText}>
                {isLogin ? 'Não tem conta? Registe-se' : 'Já tem conta? Faça login'}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  keyboardView: { width: '100%', alignItems: 'center' },
  formContainer: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 24,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: fontSizes.title,
    fontFamily: fonts.heading,
    textAlign: 'center',
    marginBottom: 24,
  },
  label: {
    fontSize: fontSizes.small,
    fontFamily: fonts.body,
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    backgroundColor: colors.gray100,
    borderRadius: 8,
    padding: 16,
    fontSize: fontSizes.medium,
    borderWidth: 1,
    borderColor: colors.gray200,
  },
  button: {
    marginTop: 32,
    borderRadius: 8,
    overflow: 'hidden',
  },
  gradient: {
    padding: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSizes.large,
    fontFamily: fonts.heading,
  },
  toggleText: {
    color: colors.primary600,
    textAlign: 'center',
    marginTop: 24,
  },
  errorText: {
    color: colors.red500,
    textAlign: 'center',
    marginTop: 16,
    fontFamily: fonts.body,
  },
});

