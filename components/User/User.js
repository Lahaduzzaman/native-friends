import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function User(props) {
    return (
        <View style={styles.container}>
            <Text>{props.user.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:'green',
        margin:7,
        padding:8,
        borderRadius:100
    }
})