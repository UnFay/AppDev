import { FlatList, View, Text, Button, TouchableOpacity, Image, ScrollView, StyleSheet, } from 'react-native';
import {movieData} from './MovieData'
import { useState, useEffect } from 'react';
const HomeScreen = () => {
    const [recommended, setRecommended] = useState([]);
    const [topViews, setTopViews] = useState([]);
    const compareRating = (a,b) => {
        const ratingA = a.rating;
        const ratingB = b.rating;
        if (ratingA > ratingB){
            return -1;
        }else if (ratingA < ratingB){
            return 1;
        }else{
            return 0;
        }
    }
    const compareViews = (a,b) => {
        const viewsA = a.viewers;
        const viewsB = b.viewers;
        if (viewsA > viewsB){
            return -1;
        }else if (viewsA < viewsB){
            return 1;
        }else{
            return 0;
        }
    }
    useEffect(()=>{
        const sortRecommended = [...movieData].sort(compareRating);
        setRecommended(sortRecommended);
        const sortViews = [...movieData].sort(compareViews);
        setTopViews(sortViews);
    },[]);
    return (
        <View style={ styleSheet.mainContainer}>
            <Text style={styleSheet.listHeader}>Most viewed</Text>
            <FlatList
                horizontal
                height = {500}
                data={topViews}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styleSheet.smallContainerRow}
                renderItem={({ item }) => {
                    return (
                        <View style={styleSheet.dataContainerRow}>
                            <Image source={{uri:item.imageLink}} style={styleSheet.movieImageRow}/>
                            <View style={styleSheet.textContainerRow}>
                                <Text style={styleSheet.titleTextRow}>{item.title}</Text>
                                <Text style={styleSheet.normalText}>{item.viewers} views</Text>
                            </View>
                        </View>
                    )
                }}

            />
            <FlatList
                data={recommended}
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
                ListHeaderComponent={
                    <View>
                        <Text style={styleSheet.listHeader}>Recommended by rating</Text>
                    </View>
                }
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
    },
    dataContainerRow:{
        margin: 8,
        backgroundColor: '#2c2d47',
        borderRadius: 10,
        width: 150,
        padding: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center'
    },
    textContainerRow:{
        textAlign: 'center',
        flex: 1,
        height: '100%',
        paddingVertical:10
    },
    movieImageRow:{
        width: 130,
        height: 200,
        borderRadius: 10,
        borderWidth:2,
        borderColor: 'white'
    },
    titleTextRow:{
        color: 'white',
        marginBottom: 5,
        fontSize: 13,
        fontWeight: 'bold',
    },
    listHeader:{
        fontWeight: 'bold',
        fontSize: 20,
    }
})
export default HomeScreen;
