import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import axios from 'axios';

const PersonContainer = ({route}) => {

    const { person } = route.params;

    const [personData, setPersonData] = useState({});

    useEffect(() => {
        axios.get(`https://api.github.com/users/${person}`).then(response => {
            setPersonData(response.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.avatar} source={{uri: personData?.avatar_url ?? null}} />
                <View>
                    <Text style={styles.name}>{personData?.name ?? ''}</Text>
                    <Text style={styles.location}>{personData?.location ?? ''}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    avatar: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    name: {
        color: '#252525',
        fontSize: 20,
        marginBottom: 5,
    },
    location: {
        color: '#bdbdbd',
        fontSize: 16,
    }
});

export default PersonContainer;