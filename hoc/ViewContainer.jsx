import React from "react"
import {StyleSheet, View} from "react-native"
import {StatusBar} from "expo-status-bar"

const ViewContainer = ({children, style}) => {
	const passedStyles = Array.isArray(style)
	? Object.assign({}, ...style)
	: style
	return (
		<>
			<StatusBar style="auto" />
			<View style={[styles.container, {...passedStyles}]}>
				{children}
			</View>
		</>
	)
}

export default ViewContainer

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFF",
		flex: 1,
		padding: 30,
		paddingBottom: 0,
		marginBottom: 0,
	},
})
