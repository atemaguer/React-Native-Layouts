import React, { Component } from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

import { styles } from "./styles";
import themes from "../../themes";

const iconList = [
	{
		iconName: "ios-call",
		iconText: "Call",
	},
	{
		iconName: "ios-mail",
		iconText: "Email",
	},
	{
		iconName: "ios-map",
		iconText: "MapView",
	},
	{
		iconName: "ios-more",
		iconText: "More",
	},
];
export default class HomeDetail extends Component {
	renderDots = () => {
		return (
			<View style={[ themes.row, styles.dotsContainer ]}>
				<View style={styles.dot} />
				<View style={[ styles.dot, styles.activeDot ]} />
				<View style={styles.dot} />
			</View>
		);
	};
	renderHeader = () => {
		return (
			<View style={styles.headerContainer}>
				<ImageBackground
					style={[ styles.headerImage, themes.row ]}
					source={require("../../assets/vacation_home1.jpg")}>
					<Icon
						name="ios-arrow-round-back"
						size={40}
						color="white"
						onPress={() => this.props.navigation.navigate("List")}
					/>
					<View style={[ themes.row ]}>
						<Icon
							name="ios-search"
							size={28}
							color="white"
							style={{ marginRight: 10 }}
						/>
						<Icon name="ios-more" size={28} color="white" />
					</View>
				</ImageBackground>
			</View>
		);
	};

	renderContent = () => {
		return (
			<View style={styles.contentContainer}>
				<View style={[ themes.column, styles.contentHeader ]}>
					<View style={[ themes.row, themes.seperate ]}>
						<Text style={styles.priceText}>$1200</Text>
						<Text style={styles.availability}>Avl:2 Sep, 2018</Text>
					</View>
					<View
						style={[
							themes.row,
							themes.alignCenter,
							themes.seperate,
						]}>
						<View style={[ themes.row ]}>
							<MaterialIcon
								name="room"
								size={20}
								color="#bababa"
							/>
							<Text style={styles.addressText}>
								California, USA 1212
							</Text>
						</View>
						<View style={styles.planeContainer}>
							<View
								style={[
									themes.flex,
									{
										backgroundColor: "#ff79b0",
										borderRadius: 50,
									},
									themes.center,
								]}>
								<Icon
									name="ios-paper-plane"
									size={24}
									color="#fff"
								/>
							</View>
						</View>
					</View>
				</View>
				{this.renderIcons(iconList)}
				{this.renderPropertyDetails()}
			</View>
		);
	};

	renderIcons = (icons) => {
		return (
			<View style={[ styles.iconContainer, themes.row ]}>
				{icons.map((icon, index) => {
					return (
						<View
							style={[ themes.flex, themes.center ]}
							key={index}>
							<View style={styles.icon}>
								<Icon
									name={icon.iconName}
									size={38}
									color="#8e8e8e"
								/>
							</View>
							<Text style={styles.iconText}>{icon.iconText}</Text>
						</View>
					);
				})}
			</View>
		);
	};

	renderPropertyDetails = () => {
		return (
			<View style={styles.detailsContainer}>
				<Text style={styles.textHeader}>Property Details</Text>
				<View style={[ themes.row, { justifyContent: "flex-start" } ]}>
					<View
						style={[
							themes.row,
							themes.flex,
							styles.iconTextContainer,
						]}>
						<MaterialCommunityIcon
							name="car"
							size={20}
							color="#8d85ff"
						/>
						<Text>4 Beds</Text>
					</View>
					<View
						style={[
							themes.row,
							themes.flex,
							styles.iconTextContainer,
						]}>
						<MaterialCommunityIcon
							name="shower"
							size={20}
							color="#ffa7ac"
						/>
						<Text>2 Bathrooms</Text>
					</View>
					<View
						style={[
							themes.row,
							themes.flex,
							styles.iconTextContainer,
						]}>
						<Icon name="ios-browsers" size={20} color="#ff88c7" />
						<Text>16 sqft</Text>
					</View>
				</View>
				<View />
				<View style={styles.contentTextContainer}>
					<Text style={styles.contentText}>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis
						nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</Text>
				</View>
			</View>
		);
	};
	render() {
		return (
			<View style={[ themes.flex, styles.container ]}>
				{this.renderHeader()}
				{this.renderDots()}
				<ScrollView>{this.renderContent()}</ScrollView>
				<View style={styles.bookButton}>
					<Text style={styles.bookButtonText}>Book Online</Text>
				</View>
			</View>
		);
	}
}
