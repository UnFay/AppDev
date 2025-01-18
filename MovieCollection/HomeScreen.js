import React from 'react';
import { FlatList, View, Text, Button, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import {movieData} from './MovieData'
const HomeScreen = () => {
    return (
        <View style={ styleSheet.mainContainer}>
            <Text>Home screen</Text>
            <FlatList
                data={movieData}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styleSheet.smallContainer}
                renderItem={({ item }) => {
                    return (
                        <View style={styleSheet.dataContainer}>
                            <Image source={{uri:item.imageLink}} style={styleSheet.movieImage}/>
                            <View style={styleSheet.textContainer}>
                                <Text style={styleSheet.titleText}>{item.title}</Text>
                                <Text style={styleSheet.normalText}>{item.year}</Text>
                                <Text style={styleSheet.normalText}>Rated {item.rating}/5</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )};

const styleSheet = StyleSheet.create({
    smallContainer:{
        margin:8,
        padding: 8,
    },
    dataContainer:{
        margin: 8,
        backgroundColor: '#2c2d47',
        borderRadius: 10,
        padding:8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center'
    },
    mainContainer:{
        flex:1 
    },
    movieImage:{
        width: 130,
        height: 200,
        borderRadius: 10,
        borderWidth:2,
        borderColor: 'white'
    },
    titleText:{
        color: 'white',
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    textContainer:{
        paddingLeft:20,
        textAlign: 'left',
        flex: 1,
        height: '100%',
        paddingVertical:10
    },
    normalText:{
        color: '#cacbed'
    }
})
export default HomeScreen;
