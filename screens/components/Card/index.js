import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
  } from 'react-native';

const Height = Dimensions.get('window').height;
   
export default Card = (props) => {
    const {item} = props;

    return (
        <View style={styles.mainWrapper}>
            <View style={styles.cardWrapper}>   
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={{uri:item.banner}}/>
                </View>
                <View style={styles.child}>
                    <Text style={styles.mainTitle}>{item.title}</Text>
                </View>
                <View style={styles.child}>
                    <Text style={styles.title}>{item.summary}</Text>
                </View>
                <View style={styles.child}>
                    <Text style={styles.title}>Reading Time : {item.totalReadingTime}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainWrapper:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        padding:10,
    },
    cardWrapper: {
        backgroundColor:"#ddd",
        display:"flex",
        flexDirection: 'column', 
        flexWrap: 'wrap',
        borderRadius:14,
        marginBottom:0,
        width:"100%"
    },
    imageWrapper:{
        borderRadius:14,
        width: '100%', 
    },
    image:{
        width:"100%",
        height:Height/4,
        objectFit:"contain",
        borderRadius:10
    },
    mainTitle:{
        fontWeight:"bold",
        fontSize:Height/40
    },
    title:{
        fontSize:Height/55
    },
    child: {
        borderRadius:14,
        width: '100%', 
        padding: '2%', 
        fontWeight:'bold'
    }
})