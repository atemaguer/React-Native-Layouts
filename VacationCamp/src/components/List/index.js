import React, { Component } from "react";
import {
	View,
	Text,
	TextInput,
	ScrollView,
	ImageBackground,
	TouchableWithoutFeedback,
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Ionicon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

import { styles } from "./styles";
import themes from "../../themes";
import BottomTabNavigator from "../bottomNavigator";
import { locations } from "./locations";

export default class List extends Component {
	state = {
		activeTab: 0,
	};

	renderHeader = () => {
		return (
			<View>
				<View style={[ themes.row, styles.header, themes.center ]}>
					<View style={{ flex: 0.1 }}>
						<Ionicon name="ios-search" size={28} color="#d2d3d2" />
					</View>
					<View style={{ flex: 1 }}>
						<TextInput
							placeholder="Search home,address,city..."
							placeholderTextColor="#d2d3d2"
							style={{ fontSize: 18 }}
						/>
					</View>
					<View style={{ flex: 0.1, paddingHorizontal: 5 }}>
						<Ionicon name="ios-options" size={30} color="#ff878d" />
					</View>
				</View>
				<View style={styles.subHeader}>
					<Text style={styles.subHeaderText}>Quick Search</Text>
				</View>
			</View>
		);
	};

	renderFilters = () => {
		return (
			<View style={[ themes.row, styles.filterContainer ]}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<TouchableWithoutFeedback
						onPress={() => this.setState({ activeTab: 0 })}>
						<View
							style={[
								styles.filter,
								this.state.activeTab === 0 &&
									styles.activeFilter,
							]}>
							<Text
								style={[
									styles.filterText,
									this.state.activeTab === 0 &&
										styles.activeText,
								]}>
								Sublet
							</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback
						onPress={() => this.setState({ activeTab: 1 })}>
						<View
							style={[
								styles.filter,
								this.state.activeTab === 1 &&
									styles.activeFilter,
							]}>
							<Text
								style={[
									styles.filterText,
									this.state.activeTab === 1 &&
										styles.activeText,
								]}>
								Office Space
							</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback
						onPress={() => this.setState({ activeTab: 2 })}>
						<View
							style={[
								styles.filter,
								this.state.activeTab === 2 &&
									styles.activeFilter,
							]}>
							<Text
								style={[
									styles.filterText,
									this.state.activeTab === 2 &&
										styles.activeText,
								]}>
								4 Beds
							</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback
						onPress={() => this.setState({ activeTab: 3 })}>
						<View
							style={[
								styles.filter,
								this.state.activeTab === 3 &&
									styles.activeFilter,
							]}>
							<Text
								style={[
									styles.filterText,
									this.state.activeTab === 3 &&
										styles.activeText,
								]}>
								3 Beds
							</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback
						onPress={() => this.setState({ activeTab: 4 })}>
						<View
							style={[
								styles.filter,
								this.state.activeTab === 4 &&
									styles.activeFilter,
							]}>
							<Text
								style={[
									styles.filterText,
									this.state.activeTab === 4 &&
										styles.activeText,
								]}>
								4 Beds
							</Text>
						</View>
					</TouchableWithoutFeedback>
				</ScrollView>
			</View>
		);
	};

	renderCard = (location, index) => {
		return (
			<TouchableWithoutFeedback
				onPress={() => this.props.navigation.navigate("HomeDetail")}
				key={`${location.name}-${index}`}>
				<View style={styles.cardContainer}>
					<ImageBackground
						source={location.image}
						style={[ themes.column, styles.imageContainer ]}>
						<View style={[ themes.flex, themes.right ]}>
							<MaterialIcon
								name="bookmark"
								size={32}
								color="white"
							/>
						</View>
						<View style={[ themes.row, styles.addressContainer ]}>
							<MaterialIcon
								name="room"
								size={20}
								color="#fdfdfd"
							/>
							<Text style={styles.addressText}>
								{location.name}
							</Text>
						</View>
					</ImageBackground>
					<View style={[ themes.column, styles.cardContent ]}>
						<View
							style={[
								themes.row,
								{
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 10,
								},
							]}>
							<Text style={styles.priceText}>
								${location.price}
							</Text>
							<Text style={styles.availability}>
								Avl: {location.availability}{" "}
							</Text>
						</View>
						<View
							style={[
								themes.row,
								{ justifyContent: "flex-start" },
							]}>
							<View
								style={[
									themes.row,
									themes.flex,
									styles.iconContainer,
								]}>
								<MaterialCommunityIcon
									name="car"
									size={20}
									color="#8d85ff"
								/>
								<Text>{location.beds} Beds</Text>
							</View>
							<View
								style={[
									themes.row,
									themes.flex,
									styles.iconContainer,
								]}>
								<MaterialCommunityIcon
									name="shower"
									size={20}
									color="#ffa7ac"
								/>
								<Text>{location.bathrooms} Bathrooms</Text>
							</View>
							<View
								style={[
									themes.row,
									themes.flex,
									styles.iconContainer,
								]}>
								<Ionicon
									name="ios-browsers"
									size={20}
									color="#ff88c7"
								/>
								<Text>{location.squareArea} sqft</Text>
							</View>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	};

	render() {
		return (
			<View style={[ themes.flex, styles.container ]}>
				<ScrollView showsVerticalScrollIndicator={false}>
					{this.renderHeader()}
					{this.renderFilters()}
					<View style={[ themes.flex, styles.listContainer ]}>
						{locations.map((location, index) => {
							return this.renderCard(location, index);
						})}
					</View>
				</ScrollView>
				<BottomTabNavigator />
			</View>
		);
	}
}
