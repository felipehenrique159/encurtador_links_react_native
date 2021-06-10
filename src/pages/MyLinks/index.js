import React, { useState, useEffect } from 'react'
import { View, Text, Modal, ActivityIndicator } from 'react-native'
import StatusBarPage from '../../components/StatusBarPage'
import { Container, Title, ListLinks, WarningText, ContainerEmpty } from './styles'
import Menu from '../../components/Menu'
import ListItem from '../../components/ListItem'
import { useIsFocused } from '@react-navigation/native'
import { getLinksSave, deleteLink } from '../.././utils/storeLinks'
import ModalLink from '../../components/ModalLink'

export default function MyLinks() {
    const isFocused = useIsFocused()
    const [links, setLinks] = useState([])
    const [dataModal, setDataModal] = useState({})
    const [modalVisible, setModalVisible] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getLinks() {
            setLoading(true)
            try {
                const response = await getLinksSave('linksSalvos')
                setLinks(response)
                setLoading(false)
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        }
        getLinks()

    }, [isFocused])

    function handleItem(item) {
        setDataModal(item)
        setModalVisible(true)
    }

    async function handleDelete(id) {
        try {
            const res = await deleteLink(links, id)
            setLinks(res)
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <Container>

            <StatusBarPage
                barStyle="light-content"
                backgroundColor="#132742"
            />

            <Menu />

            <Title>Meus links</Title>

            {loading && (
                <ContainerEmpty>
                    <ActivityIndicator color="#FFF" size={25} />
                </ContainerEmpty>
            )}

            {links.length === 0 && (
                <ContainerEmpty>
                    <WarningText>Você ainda não possui nenhum link!</WarningText>
                </ContainerEmpty>
            )}

            <ListLinks
                data={links}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <ListItem data={item} selectedItem={handleItem} deleteItem={handleDelete} />}
                contentContainerStyle={{ paddingBottom: 22 }}
                showsVerticalScrollIndicator={false}
            />

            <Modal
                visible={modalVisible}
                transparent
                animationType="slide"
            >
                <ModalLink onClose={() => setModalVisible(false)} data={dataModal} />
            </Modal>

        </Container>
    )
}