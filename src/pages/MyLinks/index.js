import React from 'react'
import {View,Text} from 'react-native'
import StatusBarPage from '../../components/StatusBarPage'
import {Container, Title,ListLinks} from './styles'
import Menu from '../../components/Menu'
import ListItem from '../../components/ListItem'


export default function MyLinks(){
    return(
        
        <Container>

            <StatusBarPage
                barStyle="light-content"
                backgroundColor="#132742"
            />

            <Menu/>

            <Title>Meus links</Title>
            <ListLinks
                data={[{id:1 , link:'teste.com'},{id:2 , link:'teste2.com'},{id:3, link:'teste2.com'}]}
                keyExtractor={ (item) => String(item.id) }
                renderItem={ ({item}) => <ListItem/> }
                contentContainerStyle={{paddingBottom:20}}
                showsVerticalScrollIndicator={false}
            />

        </Container>
    )
}