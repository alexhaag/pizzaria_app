import React, { useState } from 'react'

import { KeyboardAvoidingView, Platform } from 'react-native';

import { useAuth } from '@hooks/auth';

import { Input } from '@components/Input'
import {Button} from "@components/Button"

import brandImg from "@assets/brand.png"

import { 
    Container,
    Content,
    Title,
    Brand,
    ForgotPasswordButton,
    ForgotPasswordLabel 
} from './styles'

export function SignIn() {
    const { signIn, isLogging } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handleSignIn() {
       signIn(email, password)
    }

    return(
        <Container>
            <KeyboardAvoidingView behavior={ Platform.OS === 'ios' ? 'padding' : undefined }>
            <Content>
                <Brand source={brandImg} />
                <Title>Login</Title>
            <Input
                placeholder="E-mail"
                type="secondary"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={setEmail}
            />
            <Input
                placeholder="Senha"
                type="secondary"
                autoCorrect={false}
                secureTextEntry
                onChangeText={setPassword}
            />

            <ForgotPasswordButton>
                <ForgotPasswordLabel>
                    Esqueci a minha senha
                </ForgotPasswordLabel>
            </ForgotPasswordButton>

            <Button 
            title="Entrar" 
            type="primary"
            onPress={handleSignIn} 
            isLoading={isLogging}
            />
            </Content>
            </KeyboardAvoidingView>
        </Container>
    )
}