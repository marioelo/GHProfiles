import React, {useMemo} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const HomeContainer = props => {
    const persons = useMemo(() => [ "GrahamCampbell","fabpot","weierophinney","rkh","josh"], []);

    const personSelectedHandler = person => {
        props.navigation.navigate('Person', {person});
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Top 5 GitHub Users</Text>
            <Text style={styles.subtitle}>Tap the username to see more information</Text>
            {persons.map((person, index) => (
                <TouchableOpacity key={index} style={styles.button} onPress={() => personSelectedHandler(person)}>
                    <Text style={styles.buttonText}>{person}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 26,
        color: '#252525',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        color: '#252525',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#b177e4',
        marginVertical: 5,
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '500'
    }
});

export default HomeContainer;