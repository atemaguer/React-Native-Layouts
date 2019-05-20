import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";

import { styles } from "./styles";

const tabs = [
	{
		title: "Nearby",
		key: "nearby",
		icon: "map",
	},
	{
		title: "Discover",
		key: "discover",
		icon: "grid",
	},
	{
		title: "Search",
		key: "search",
		icon: "magnifier",
	},
	{
		title: "Notifications",
		key: "notifications",
		icon: "bell",
	},
	{
		title: "Menu",
		key: "menu",
		icon: "menu",
	},
];
export default class BottomTabNavigator extends Component {
	state = {
		active: "nearby",
	};
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.tabContainer}>
					{tabs.map((tab) => {
						return (
							<TouchableWithoutFeedback
								key={tab.key}
								onPress={() =>
									this.setState({ active: tab.key })}>
								<View style={styles.tab}>
									<SimpleLineIcon
										name={tab.icon}
										size={28}
										color={
											this.state.active === tab.key ? (
												"#f881b0"
											) : (
												"#bfbfbf"
											)
										}
									/>

									<Text
										style={[
											styles.tabText,
											this.state.active === tab.key
												? styles.activeTabText
												: null,
										]}>
										{tab.title}
									</Text>
									{this.state.active === tab.key && (
										<View style={styles.activeTab} />
									)}
								</View>
							</TouchableWithoutFeedback>
						);
					})}
				</View>
			</View>
		);
	}
}
