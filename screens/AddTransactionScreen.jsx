import React, {useState, useReducer} from "react"
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	ScrollView,
	TouchableHighlight,
	Dimensions,
} from "react-native"
import Picker from "@react-native-community/picker/js/Picker"
import ViewContainer from "../hoc/ViewContainer"
import MyText from "../hoc/MyText"
import {categories} from "../utils"
import Svg, {Path} from "react-native-svg"
import DateTimePicker from "@react-native-community/datetimepicker"

const ratio = 55 / 375
const windowWidth = Dimensions.get("window").width
const height = windowWidth * ratio

const Wave = () => (
	<Svg
		viewBox="0 0 1440 209"
		style={{height: height, position: "relative", top: -5}}
	>
		<Path
			fill="#42224A"
			d="M0 128l80-16c80-16 240-48 400-21.3C640 117 800 203 960 208s320-69 400-106.7l80-37.3V0H0z"
		/>
	</Svg>
)

const initialState = {
	shopname: "",
	categoryId: 1,
	amount: "",
	date: new Date().toLocaleDateString(),
	displayCalendar: false,
}

const reducer = (state, action) => {
	switch (action.type) {
		case "UPDATE_FIELD":
			return {
				...state,
				displayCalendar: false,
				[action.field]: action.value,
			}
		case "SWITCH_DISPLAY_CALENDAR":
			return {
				...state,
				displayCalendar: !state.displayCalendar
			}
		default:
			return state
	}
}

const AddTransactionScreen = ({db}) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const onChangeDate = (event, selectedDate) => {
		const date = new Date(selectedDate).toLocaleDateString()
		console.log(date)
		dispatch({type: "UPDATE_FIELD", field: "date", value: date})
	}

	const onSubmit = () => {
		db.transaction((tx) => {
			tx.executeSql(
				"INSERT INTO transactions(SHOPNAME, AMOUNT, CATEGORY, DATE) VALUES (?, ?, ?, ?)",
				[state.shopname, state.amount, state.categoryId, state.date],
				(trans, res) => {
					console.log(trans, res)
				}
			)
		})
	}

	return (
		<ViewContainer style={{padding: 0}}>
			<View style={styles.header}>
				<MyText style={{fontSize: 32, textAlign: "center", color: "#FFF"}}>
					Add Transaction
				</MyText>
				<View style={styles.round1} />
				<View style={styles.round2} />
				<View style={styles.round3} />
			</View>
			<Wave />
			<ScrollView style={styles.main}>
				<MyText style={StyleSheet.flatten(styles.label)}>Shop name:</MyText>
				<TextInput
					style={styles.input}
					contextMenuHidden
					placeholder="Shop name"
					autoCapitalize="words"
					maxLength={20}
					onChangeText={(text) =>
						dispatch({type: "UPDATE_FIELD", field: "shopName", value: text})
					}
				/>
				<MyText style={StyleSheet.flatten(styles.label)}>Category:</MyText>
				<Picker
					selectedValue={state.categoryId}
					style={{height: 40, width: "100%"}}
					onValueChange={(selected) =>
						dispatch({
							type: "UPDATE_FIELD",
							field: "categoryId",
							value: selected,
						})
					}
					itemStyle={{height: 40}}
				>
					{categories.map((c) => (
						<Picker.Item key={c.id} label={c.name} value={c.id} />
					))}
				</Picker>
				<MyText style={StyleSheet.flatten(styles.label)}>Amount:</MyText>
				<TextInput
					style={styles.input}
					placeholder="Amount"
					keyboardType="numeric"
					maxLength={10}
					onChangeText={(value) =>
						dispatch({type: "UPDATE_FIELD", field: "amount", value: value})
					}
				/>
				<MyText style={StyleSheet.flatten(styles.label)}>Date:</MyText>
				<TouchableHighlight
					onPress={() => dispatch({type: "SWITCH_DISPLAY_CALENDAR"})}
					activeOpacity={0.6}
					underlayColor="#FFF"
				>
					<View>
						<MyText>{state.date}</MyText>
					</View>
				</TouchableHighlight>
				{state.displayCalendar && <DateTimePicker
					testID="dateTimePicker"
					value={new Date()}
					mode="date"
					// is24Hour={true}
					display="default"
					onChange={onChangeDate}
				/>}
				<TouchableHighlight
					activeOpacity={0.6}
					underlayColor="#5d3069"
					onPress={onSubmit}
					style={styles.button}
				>
					<View>
						<MyText style={{color: "#FFF", textAlign: "center", fontSize: 16}}>
							Submit
						</MyText>
					</View>
				</TouchableHighlight>
			</ScrollView>
		</ViewContainer>
	)
}

export default AddTransactionScreen

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#42224A",
		padding: 30,
		height: 200,
		paddingTop: height + 30,
		justifyContent: "center",
	},
	round1: {
		position: "absolute",
		borderRadius: 90 / 2,
		right: 40,
		top: 30,
		height: 80,
		width: 80,
		backgroundColor: "hsla(275, 100%, 60%, 0.15)",
	},
	round2: {
		backgroundColor: "hsla(275, 50%, 60%, 0.60)",
		position: "absolute",
		height: 40,
		width: 40,
		borderRadius: 40 / 2,
		top: 150,
		left: 40,
	},
	round3: {
		backgroundColor: "hsla(275, 70%, 60%, 0.40)",
		position: "absolute",
		height: 35,
		width: 35,
		borderRadius: 40 / 2,
		top: 50,
		left: 150,
	},
	image: {
		height: 55,
		zIndex: 1,
	},
	label: {
		fontSize: 20,
	},
	input: {
		fontSize: 16,
		paddingBottom: 15,
	},
	main: {
		padding: 30,
	},
	button: {
		backgroundColor: "#42224A",
		padding: 10,
		borderRadius: 14,
	},
})
