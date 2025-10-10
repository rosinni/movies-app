import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from '@/components/ui/Text';
import { ACADEMY } from '@/lib/academy';
import rigobertoImg from '../../../assets/rigo-baby.jpg';

export default function BrandHeader() {
    return (
        <View style={styles.wrapper} accessibilityRole="header">
            <View style={styles.row}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>{ACADEMY.name}</Text>
                    <Text style={styles.subtitle}>React Native Starter</Text>
                </View>
                <Image source={rigobertoImg} resizeMode="contain" accessible />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: { paddingVertical: 8, marginBottom: 8 },
    row: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    mascot: { width: 120, height: 120, borderRadius: 12 },
    title: { fontSize: 22, fontWeight: '700', color: '#0F172A', textAlign: 'center' },
    subtitle: { color: '#64748B', textAlign: 'center' },
});
