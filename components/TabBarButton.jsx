import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


const TabBarButton = () => {
	return (
		<View style={styles.container} textAlign="center">
			<Ionicons name="md-add" size={32} color="#FFF" style={{textAlign: "center"}}/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#EF8767",
		width: 50,
		height: 50,
		// textAlign: "center",
		justifyContent: "center",
		borderRadius: 50 / 2,
		position: "relative",
		top: -15
	}
})

export default TabBarButton
