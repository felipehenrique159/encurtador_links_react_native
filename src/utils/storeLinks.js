import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getLinksSave(key) {
    try {
       const myLinks =  await AsyncStorage.getItem(key)
       let linkSaves = JSON.parse(myLinks) || []
       return linkSaves
    } catch (error) {
        console.log(error);
    }
}

export async function saveLink(key,newLink) {
    let linksStored = await getLinksSave(key)
    const hasLink = linksStored.some(link => link.id === newLink.id)

    if(hasLink){
       console.log('link ja existente'); 
       return
    }

    linksStored.push(newLink)

    await AsyncStorage.setItem(key,JSON.stringify(linksStored))
    console.log('link salvo');
}

export async function deleteLink(links,id) {
    
    let myLinks = links.filter((item)=>{ 
        return item.id !== id
    })
    
    try {
        await AsyncStorage.setItem('linksSalvos',JSON.stringify(myLinks))
    } catch (error) {
        console.log(error);
    }

     return myLinks

}