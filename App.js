import React, { useEffect } from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import HomeScreen from "./screens/HomeScreen"
import SettingsScreen from "./screens/SettingsScreen"
// import TestScreen from "./screens/TestScreen"
// import MyTabBar from "./components/MyTabBar"
import TabBarButton from "./components/TabBarButton"
// import { useFonts } from 'expo-font'
import { AppLoading } from 'expo'
import {
	useFonts,
	Poppins_400Regular,
	Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins'
import AddTransactionScreen from "./screens/AddTransactionScreen"
import * as SQLite from 'expo-sqlite'

const Tab = createBottomTabNavigator()

const db = SQLite.openDatabase("expensedb.db")

const createDb = "CREATE TABLE IF NOT EXISTS transactions ( ID INTEGER PRIMARY KEY AUTOINCREMENT, SHOPNAME TEXT, AMOUNT INTEGER, CATEGORY INTEGER, DATE TEXT );"

export default function App() {
	console.log(db)
	const [fontsLoaded] = useFonts({Poppins_400Regular,Poppins_500Medium, Poppins_600SemiBold})
	useEffect(() => {
		db.transaction(tx => {
			tx.executeSql(createDb)
			tx.executeSql("SELECT * FROM transactions", null, (trans, results) => {
				console.log(results)
				console.log(trans)
			})
		})
	}, [])
	if (!fontsLoaded) return <AppLoading />
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="Discover"
				// tabBar={(props) => <MyTabBar {...props} />}
				screenOptions={({route}) => ({
					tabBarIcon: ({focused, color, size}) => {
						if (route.name === "Discover") {
							return <Ionicons name="md-compass" size={size} color={color} />
						} else if (route.name === "Stats") {
							return <MaterialCommunityIcons name="chart-bar" size={size} color={color} />
						} else if (route.name === "Add") {
							return <TabBarButton />
						}
					},
				})}
				tabBarOptions={{
					keyboardHidesTabBar: true,
					activeTintColor: "#42224A",
					inactiveTintColor: "gray",
					style: {
						height: 60,
						borderTopWidth: 0,
						shadowColor: "#eee",
						shadowOpacity: .6,
						shadowOffset: {
							height: -2,
							width: 0,
						},
						shadowRadius: 2,
						elevation: 10,
					},
					tabStyle: {
						// justifyContent: "center",
						// alignItems: "flex-start"
						// height: 50,
						// width: "auto"
					},
					labelStyle: {
						marginBottom: 15
					}
				}}
			>
				{/* <Tab.Screen name="Discover" component={HomeScreen} />
				<Tab.Screen name="Add" component={AddTransactionScreen} />
				<Tab.Screen name="Stats" component={SettingsScreen} /> */}
				<Tab.Screen name="Discover" component={HomeScreen} /*children={() => <HomeScreen db={db} />}*/ />
				<Tab.Screen name="Add" children={() => <AddTransactionScreen db={db} />} />
				<Tab.Screen name="Stats" children={() => <SettingsScreen db={db} />} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}
