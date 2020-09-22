import React from "react"
import {View, StyleSheet, Image} from "react-native"
import {categories} from "../utils"
import MyText from "../hoc/MyText"

const ListItem = ({title, price, categoryId}) => {
	const category = categories.find(c => c.id === categoryId)
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={category.icon} style={styles.image} />
			</View>
			<View style={styles.textContainer}>
				<View>
					<MyText weight={500}>{title}</MyText>
					<MyText style={{fontSize: 12, color: "#777"}}>{category.name}</MyText>
				</View>
				<MyText style={styles.itemText}>-{price}€</MyText>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginVertical: 5,
	},
	textContainer: {
		flex: 1,
		flexDirection: "row",
		marginTop: 5,
		justifyContent: "space-between",
	},
	imageContainer: {
		height: 50,
		width: 50,
		borderRadius: 50 / 3,
		backgroundColor: "#F7F4F7",
		marginRight: 15,
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: 28,
		height: 28,
	},
})

export default ListItem
