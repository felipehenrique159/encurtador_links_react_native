import React, { useState } from 'react'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import StatusBarPage from '../../components/StatusBarPage'
import Menu from '../../components/Menu'
import { Feather } from '@expo/vector-icons'
import {
    ContainerLogo, Logo, Title, SubTitle, ContainerContent,
    ContainerInput, BoxIcon, Input, ButtonLink, ButtonLinkText
} from './styles'
export default function Home() {

    const [input,setInput] = useState('')

    function handleShortLink() {
        alert('url digitada: ' + input)
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>


            <LinearGradient
                colors={['#1ddbb9', '#132742']}
                style={{ flex: 1, justifyContent: 'center' }}
            >

                <StatusBarPage
                    barStyle="light-content"
                    backgroundColor="#1ddbb9"
                />

                <Menu />

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'android' ? 'padding' : 'position'}
                    enabled
                >

                    <ContainerLogo>
                        <Logo source={require('../../assets/Logo.png')} resizeMode="contain" />
                    </ContainerLogo>

                    <ContainerContent>
                        <Title>SujeitoLink</Title>
                        <SubTitle>Cole seu link para encurtar</SubTitle>

                        <ContainerInput>
                            <BoxIcon>
                                <Feather name="link" size={22} color="#FFF" />
                            </BoxIcon>
                            <Input
                                placeholder="Cole seu link"
                                placeholderTextColor="white"
                                autoCapitalize="none"
                                autoCorrect={false}
                                KeyboardType="url"
                                value={input}
                                onChangeText={e => setInput(e)}
                            />
                        </ContainerInput>

                        <ButtonLink onPress={handleShortLink}>
                            <ButtonLinkText>Gerar Link</ButtonLinkText>
                        </ButtonLink>

                    </ContainerContent>
                </KeyboardAvoidingView>
            </LinearGradient>
        </TouchableWithoutFeedback>

    )
}