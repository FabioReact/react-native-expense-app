import React from "react"
import {View, SectionList} from "react-native"
import ListItem from "../components/ListItem"
import ChartOverview from "../components/ChartOverview"
import MyText from "../hoc/MyText"
import { transactions } from "../utils"
import ViewContainer from "../hoc/ViewContainer"
// import Constants from 'expo-constants';
// const statusBarHeight = Constants.statusBarHeight
// console.log(statusBarHeight)


const HomeHeader = () => {
	return (
		<View>
			<MyText style={{fontSize: 32}}>Hello,</MyText>
			<MyText style={{fontSize: 32, marginTop: -10}} weight={600} >Priscilla</MyText>
		</View>
	)
} 

const HomeScreen = () => {
	return (
			<ViewContainer>
				<HomeHeader />
				<ChartOverview />
				<SectionList
					sections={transactions}
					keyExtractor={(item, index) => item + index}
					renderItem={({item}) => <ListItem {...item} />}
					renderSectionHeader={({section: {date}}) => <MyText style={{paddingVertical: 8, color: "#777"}}>{date}</MyText>}
				/>
			</ViewContainer>
	)
}

export default HomeScreen
