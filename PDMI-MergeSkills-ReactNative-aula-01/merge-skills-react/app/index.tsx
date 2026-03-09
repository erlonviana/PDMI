import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
    const router = useRouter();

    const aplicarFundamentos= () => {
        console.log("TESTE")
    }
    
    useEffect(() => {
        aplicarFundamentos();

    }, []);
    
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Ionicons name="person" size={100} color="#ff0000" />
                <Text style={styles.logoText}>Merge Skills</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoContainer: {
        alignItems: 'center'
    },
    logoText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 16
    }
});
