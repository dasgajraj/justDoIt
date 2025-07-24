//GetStarted

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { colors } from '../common/colors'
import { MaterialIcons } from '@expo/vector-icons'

const { width, height } = Dimensions.get('window')

const GetStartedScreen = ({ navigation }) => {
  const { isDarkMode } = useSelector(state => state.theme)
  const theme = isDarkMode ? colors.dark : colors.light

  const handleGetStarted = () => {
    navigation.navigate('OnboardingScreen')
  }

return (
<View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
<View style={styles.heroSection}>
<View style={[styles.logoContainer, { backgroundColor: theme.primary }]}>
<MaterialIcons name="check-circle" size={60} color="#fff" />
</View>

<Text style={[styles.appName, { color: theme.textColor }]}>
JustDoIt
</Text>

<Text style={[styles.tagline, { color: theme.textSecondary }]}>
Turn your ideas into actions
</Text>
</View>

<View style={styles.featuresSection}>
<View style={[styles.featureItem, { backgroundColor: theme.cardBackground }]}>
<View style={[styles.featureIcon, { backgroundColor: theme.primary + '20' }]}>
<MaterialIcons name="assignment" size={24} color={theme.primary} />
</View>
<View style={styles.featureTextContainer}>
<Text style={[styles.featureTitle, { color: theme.textColor }]}>
Organize Tasks
</Text>
<Text style={[styles.featureDesc, { color: theme.textSecondary }]}>
Keep track of all your tasks in one place
</Text>
</View>
</View>

<View style={[styles.featureItem, { backgroundColor: theme.cardBackground }]}>
<View style={[styles.featureIcon, { backgroundColor: theme.primary + '20' }]}>
<MaterialIcons name="notifications-active" size={24} color={theme.primary} />
</View>
<View style={styles.featureTextContainer}>
<Text style={[styles.featureTitle, { color: theme.textColor }]}>
Smart Reminders
</Text>
<Text style={[styles.featureDesc, { color: theme.textSecondary }]}>
Never miss important deadlines again
</Text>
</View>
</View>

<View style={[styles.featureItem, { backgroundColor: theme.cardBackground }]}>
<View style={[styles.featureIcon, { backgroundColor: theme.primary + '20' }]}>
<MaterialIcons name="trending-up" size={24} color={theme.primary} />
</View>
<View style={styles.featureTextContainer}>
<Text style={[styles.featureTitle, { color: theme.textColor }]}>
Track Progress
</Text>
<Text style={[styles.featureDesc, { color: theme.textSecondary }]}>
Monitor your productivity and achievements
</Text>
</View>
</View>
</View>

<View style={styles.actionSection}>
<TouchableOpacity
style={[styles.getStartedBtn, { backgroundColor: theme.primary }]}
onPress={handleGetStarted}
activeOpacity={0.8}
>
<Text style={styles.getStartedText}>Get Started</Text>
<MaterialIcons name="arrow-forward" size={20} color="#fff" />
</TouchableOpacity>

<Text style={[styles.subtitle, { color: theme.textSecondary }]}>
Start organizing your life today
</Text>
</View>

<View style={[styles.decorativeCircle1, { backgroundColor: theme.primary + '10' }]} />
<View style={[styles.decorativeCircle2, { backgroundColor: theme.primary + '15' }]} />
</View>
)
}

export default GetStartedScreen

const styles = StyleSheet.create({
container: {
flex: 1,
paddingHorizontal: 20,
justifyContent: 'space-between',
paddingTop: 60,
paddingBottom: 40,
},
heroSection: {
alignItems: 'center',
paddingTop: 40,
},
logoContainer: {
width: 120,
height: 120,
borderRadius: 60,
justifyContent: 'center',
alignItems: 'center',
marginBottom: 30,
shadowColor: '#000',
shadowOffset: {
width: 0,
height: 8,
},
shadowOpacity: 0.2,
shadowRadius: 10,
elevation: 10,
},
appName: {
fontSize: 36,
fontWeight: 'bold',
marginBottom: 10,
letterSpacing: 1,
},
tagline: {
fontSize: 18,
textAlign: 'center',
fontStyle: 'italic',
opacity: 0.8,
},
featuresSection: {
paddingVertical: 40,
},
featureItem: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 20,
paddingHorizontal: 20,
paddingVertical: 16,
borderRadius: 12,
shadowColor: '#000',
shadowOffset: {
width: 0,
height: 3,
},
shadowOpacity: 0.1,
shadowRadius: 6,
elevation: 4,
},
featureIcon: {
width: 50,
height: 50,
borderRadius: 25,
justifyContent: 'center',
alignItems: 'center',
marginRight: 20,
},
featureTextContainer: {
flex: 1,
},
featureTitle: {
fontSize: 18,
fontWeight: '600',
marginBottom: 4,
},
featureDesc: {
fontSize: 14,
lineHeight: 20,
},
actionSection: {
alignItems: 'center',
},
getStartedBtn: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
paddingVertical: 16,
paddingHorizontal: 40,
borderRadius: 30,
marginBottom: 15,
shadowColor: '#000',
shadowOffset: {
width: 0,
height: 4,
},
shadowOpacity: 0.3,
shadowRadius: 8,
elevation: 8,
minWidth: 200,
},
getStartedText: {
color: '#fff',
fontSize: 18,
fontWeight: '600',
marginRight: 8,
},
subtitle: {
fontSize: 14,
textAlign: 'center',
opacity: 0.7,
},
decorativeCircle1: {
position: 'absolute',
width: 150,
height: 150,
borderRadius: 75,
top: -75,
right: -75,
opacity: 0.3,
},
decorativeCircle2: {
position: 'absolute',
width: 100,
height: 100,
borderRadius: 50,
bottom: -50,
left: -50,
opacity: 0.2,
},
})