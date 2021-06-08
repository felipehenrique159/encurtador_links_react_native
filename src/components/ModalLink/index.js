import React from 'react'
import {
    ModalContainer, Container, Header, LinkArea, Title, LongUrl, ShortLinkArea
    , ShortLinkUrl
} from './styles'
import { Text, TouchableOpacity, View,TouchableWithoutFeedback } from 'react-native'
import { Feather } from '@expo/vector-icons'


export default function ModalLink({onClose}) {
    return (
        <ModalContainer>
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={{flex:1}}></View>
            </TouchableWithoutFeedback>

            <Container>
                <Header>
                    <TouchableOpacity onPress={onClose}>
                        <Feather
                            name="x"
                            color="#212743"
                            size={30}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Feather
                            name="share"
                            color="#212743"
                            size={30}
                        />
                    </TouchableOpacity>


                </Header>

                <LinkArea>
                    <Title>Link Encurtado</Title>
                    <LongUrl numberOfLines={1}>https://kajsdlkadslkh</LongUrl>

                    <ShortLinkArea
                        activeOpacity={1}
                    >
                        <ShortLinkUrl numberOfLines={1}>https://bit.ly.com</ShortLinkUrl>
                        <TouchableOpacity>
                            <Feather
                                name="copy"
                                color="#FFF"
                                size={25}
                            />
                        </TouchableOpacity>
                    </ShortLinkArea>

                </LinkArea>

            </Container>
        </ModalContainer>
    )
}