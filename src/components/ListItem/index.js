import React from 'react'
import { Feather } from '@expo/vector-icons'
import { ContainerButton, Item,ActivityContainer } from './styles'
import  Swipeable  from 'react-native-gesture-handler/Swipeable'
import {  View } from 'react-native'
export default function ListItem({ data, selectedItem,deleteItem }) {
    function rightActions(){
        
        return(
            <ActivityContainer  onPress={() => deleteItem(data.id)} >
                <Feather
                    name="trash"
                    color="#FFF"
                    size={24}
                />
            </ActivityContainer>
        )
    }

    return (
        <View>
            <Swipeable renderRightActions={rightActions}>
                <ContainerButton activeOpacity={0.9} onPress={() => selectedItem(data)}>
                    <Feather
                        name="link"
                        color="#FFF"
                        size={24}
                    />
                    <Item numberOfLines={1}>{data.long_url}</Item>
                </ContainerButton>
            </Swipeable>
        </View>
    )
}