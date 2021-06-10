import React, { useState } from 'react'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Modal, ActivityIndicator } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import StatusBarPage from '../../components/StatusBarPage'
import Menu from '../../components/Menu'
import ModalLink from '../../components/ModalLink'
import { Feather } from '@expo/vector-icons'
import {
    ContainerLogo, Logo, Title, SubTitle, ContainerContent,
    ContainerInput, BoxIcon, Input, ButtonLink, ButtonLinkText
} from './styles'
import api from '../../services/api'
import {saveLink} from '../.././utils/storeLinks'


export default function Home() {

    const [input, setInput] = useState('')
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [urlEncurtada, setUrlEncurtada] = useState('')
    const [modalVisible, setModalVisible] = useState(false)

    async function handleShortLink() {
        if (input != '') {

            setLoading(true)

            try {
                const response = await api.post('/shorten', {
                    long_url: input
                })
                setData(response.data)
                Keyboard.dismiss()
                setModalVisible(!modalVisible)
                setUrlEncurtada(response.data.link)
                setLoading(false)
                setInput('')

                await saveLink('linksSalvos',response.data)

            } catch (error) {
                alert('Erro ao gerar link')
                Keyboard.dismiss()
                setLoading(false)
            }
        }
        
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
                            {
                                loading ? (
                                    <ActivityIndicator color="#121212" size={24} />
                                ) :
                                    (
                                        <ButtonLinkText>Gerar Link</ButtonLinkText>
                                    )
                            }

                        </ButtonLink>

                    </ContainerContent>
                </KeyboardAvoidingView>

                <Modal
                    visible={modalVisible}
                    transparent
                    animationType="slide"
                >
                    <ModalLink onClose={() => setModalVisible(false)} data={data} />
                </Modal>

            </LinearGradient>
        </TouchableWithoutFeedback>

    )
}