import React from "react"
import {Text, StyleSheet} from "react-native"

const MyText = ({children, weight, style, ...rest}) => {
	const passedStyles = Array.isArray(style)
		? Object.assign({}, ...style)
		: style

	let textStyle
	switch (weight) {
		case 400:
			textStyle = styles.regular
			break
		case 500:
			textStyle = styles.medium
			break
		case 600:
			textStyle = styles.semiBold
			break
		default:
			textStyle = styles.regular
			break
	}

	return (
		<Text {...rest} style={[textStyle, {...passedStyles}]}>
			{children}
		</Text>
	)
}

const styles = StyleSheet.create({
	regular: {
		fontFamily: "Poppins_400Regular",
	},
	medium: {
		fontFamily: "Poppins_500Medium",
	},
	semiBold: {
		fontFamily: "Poppins_600SemiBold",
	},
})

export default MyText
