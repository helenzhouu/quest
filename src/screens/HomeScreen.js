// screens/HomeScreen.js
import React from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { spacing, fonts, typography } from '../styles/theme';

const stories = [
    {
        id: 'space',
        title: 'Space Explorers',
        img: require('../../assets/space-explorers.png'),
    },
    {
        id: 'robot',
        title: 'Robo Rescue',
        img: require('../../assets/robo-rescue.png'),
    },
    {
        id: 'math',
        title: 'Math Wizards',
        img: require('../../assets/math-wizards.png'),
    },
    {
        id: 'nature2',
        title: 'Mystery in the Garden',
        img: require('../../assets/mystery-garden.png'),
    },
];

export default function HomeScreen() {
    const navigation = useNavigation();
    const startAdventure = storyType =>
        navigation.navigate('AvatarSelection', { storyType });

    const goBackToStart = () => {
        navigation.navigate('Start');
    };

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.headerBar}>
                <IconButton
                    icon="arrow-left"
                    iconColor="#FFFFFF"
                    size={28}
                    onPress={goBackToStart}
                    style={styles.backButton}
                />
                <Text style={styles.headerTitle}>STEM Quest</Text>
                <View style={styles.headerSpacer} />
            </View>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Welcome to STEM Quest</Text>
                    <Text style={styles.subtitle}>
                        Interactive STEM adventures{'\n'}for curious girls to learn and explore Science, Technology, Engineering, and Math
                    </Text>
                </View>
                <View style={styles.storyWrapper}>
                    <Text style={styles.sectionTitle}>Choose your adventure</Text>

                    <View style={styles.storyGrid}>
                        {stories.map(story => (
                            <TouchableOpacity
                                key={story.id}
                                style={styles.tile}
                                onPress={() => startAdventure(story.id)}
                                activeOpacity={0.8}
                            >
                                <Image source={story.img} style={styles.tileImg} />
                                <View style={styles.titleOverlay}>
                                    <Text style={styles.tileText}>{story.title}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#4A1A7A'
    },
    headerBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: spacing.md,
        paddingTop: spacing.md,
        paddingBottom: spacing.sm,
        backgroundColor: '#4A1A7A',
    },
    backButton: {
        margin: 0,
    },
    headerTitle: {
        fontSize: 24,
        fontFamily: fonts.titleBold,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    headerSpacer: {
        width: 48,
    },
    container: {
        flex: 1,
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.md,
        backgroundColor: 'transparent',
    },
    header: {
        alignItems: 'center',
        marginTop: spacing.lg,
        marginBottom: spacing.xl,
        zIndex: 1,
    },
    title: {
        fontSize: 32,
        fontFamily: fonts.titleBold,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: spacing.md,
    },
    subtitle: {
        fontSize: 18,
        fontFamily: fonts.body,
        color: '#FFFFFF',
        textAlign: 'center',
        lineHeight: 24,
    },

    storyWrapper: {
        flex: 1,
        marginBottom: spacing.xl,
        zIndex: 1,
    },
    sectionTitle: {
        fontSize: 24,
        fontFamily: fonts.title,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: spacing.xl,
    },
    storyGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: spacing.md,
    },
    tile: {
        width: '47%',
        aspectRatio: 0.85,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        marginBottom: spacing.lg,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 8,
        overflow: 'hidden',
        position: 'relative',
    },
    tileImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    titleOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    tileText: {
        fontSize: 16,
        fontFamily: fonts.button,
        color: '#FFFFFF',
        textAlign: 'center',
        lineHeight: 20,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
});
