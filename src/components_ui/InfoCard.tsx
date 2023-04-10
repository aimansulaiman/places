import {View, Text, StyleSheet} from "react-native";
import React from "react";
import {Card} from "@ant-design/react-native";

interface InfoCardProps {
    cardTitle: string
    topContentText: string
    middleContentText: string
    bottomContentText: string
}

const InfoCard = (props:InfoCardProps) => {
    const {
        cardTitle,
        topContentText,
        middleContentText,
        bottomContentText
    } = props

    return (
     <Card>
       <Card.Header
       title={cardTitle}
       />
       <Card.Body>
       <View style={{ height: 42 }}>
           <Text style={styles.cardContent}>{topContentText}</Text>
           {middleContentText?
             <Text style={styles.cardContent}>Latitude:{middleContentText}</Text> :
              null
           }
           {bottomContentText?
               <Text style={styles.cardContent}>Longitude:{bottomContentText}</Text> :
               null
           }
       </View>
       </Card.Body>
     </Card>
    )
};

const styles = StyleSheet.create({
    cardContent: {
        marginLeft: 16
    },
})


export default InfoCard
