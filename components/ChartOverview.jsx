import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MyText from "../hoc/MyText"

const barStyles = StyleSheet.create({
	container: {
		flex: 1,
	},
	bar: {
		flex: 1,
		flexDirection: "column-reverse",
		marginHorizontal: 3,
	}
})

const Bar = ({data, index, max}) => {
	let barCustomStyle = {
		height: `${data.amount / max *100}%`,
		borderRadius: 8,
	}
	if (index === 8) {
		barCustomStyle.backgroundColor = "#EF8767"
	} else if (index % 2) {
		barCustomStyle.backgroundColor = "hsla(0, 0%, 65%, 0.4)"
	} else {
		barCustomStyle.backgroundColor = "hsla(0, 0%, 65%, 0.2)"
	}
	return (
		<View style={barStyles.container}>
			<View style={[barStyles.bar]}>
				<View style={barCustomStyle}></View>
			</View>
			<MyText style={{color: "#AAA", fontSize: 12, textAlign: "center"}}>{index % 2 === 0 ? data.month.substring(0, 3) : " "}</MyText>
		</View>
	)
}

const ChartOverview = () => {
	const data = [
		{month: "Janvier",amount: 700},
		{month: "Février",amount: 600},
		{month: "Mars",amount: 1000},
		{month: "Avril",amount: 300},
		{month: "Mai",amount: 470},
		{month: "Juin",amount: 940},
		{month: "Juillet",amount: 720},
		{month: "Août",amount: 580},
		{month: "Septembre",amount: 820},
	]

	const max = Math.max.apply(Math, data.map(el => el.amount))

	return (
		<View style={styles.container}>
			<View style={styles.round1}></View>
			<View style={styles.round2}></View>
			<View>
				<MyText style={StyleSheet.flatten([styles.text, styles.label])}>Outcome</MyText>
				<MyText weight={600} style={StyleSheet.flatten([styles.text, styles.outcome])}>12,560.00€</MyText>
			</View>
			<View style={styles.barsContainer}>
				{data.map((el, index) => <Bar key={index} max={max} index={index} data={el} />)}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		overflow: "hidden",
		marginVertical: 20,
		backgroundColor: "#42224A",
		height: 200,
		borderRadius: 30,
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	label: {
		// lineHeight: 16
		paddingTop: 6,
	},
	text: {
		color: "#FFF"
	},
	outcome: {
		fontSize: 28,
		lineHeight: 34,
	},
	barsContainer: {
		flexDirection: "row",
		flex: 1,
	},
	round1: {
		position: "absolute",
		borderRadius: 90 / 2,
		right: -20,
		top: -20,
		height: 90,
		width: 90,
		backgroundColor: "hsla(275, 100%, 60%, 0.15)"
	},
	round2: {
		backgroundColor: "hsla(275, 50%, 80%, 0.60)",
		position: "absolute",
		height: 40,
		width: 40,
		borderRadius: 40 / 2,
		top: 30,
		right: 40,
	}
})


export default ChartOverview
