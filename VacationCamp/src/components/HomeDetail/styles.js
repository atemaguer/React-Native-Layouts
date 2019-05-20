import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
	container: {
		position: "relative",
	},
	headerContainer: {
		flex: 0.7,
		marginBottom: 250,
	},
	headerImage: {
		height: height * 0.4,
		flexDirection: "row",
		paddingTop: 35,
		paddingHorizontal: 20,
		justifyContent: "space-between",
	},
	contentContainer: {
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		backgroundColor: "#fff",
		flexGrow: 1,
		padding: 20,
	},
	contentHeader: {
		flex: 0.2,
		paddingBottom: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#f2f2f2",
		marginBottom: 10,
	},
	availability: {
		color: "#39bd1f",
	},
	priceText: {
		fontSize: 25,
		color: "#494949",
		fontWeight: "700",
	},
	addressText: {
		color: "#bababa",
		fontSize: 15,
	},
	planeContainer: {
		borderRadius: 50,
		padding: 3,
		height: 40,
		width: 40,
		borderColor: "#ff79b0",
		borderTopWidth: 0,
		borderLeftWidth: 0,
		borderBottomWidth: 2,
		borderRightWidth: 2,
	},
	bookButton: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		height: height * 0.1,
		backgroundColor: "#ff7a8e",
		justifyContent: "center",
		alignItems: "center",
	},
	bookButtonText: {
		color: "white",
		fontSize: 16,
	},
	iconContainer: {
		flex: 0.2,
		marginTop: 10,
	},
	icon: {
		height: 80,
		width: 80,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#eaeaea",
		borderRadius: 50,
	},
	iconText: {
		fontSize: 16,
		fontWeight: "400",
	},
	detailsContainer: {
		marginTop: 10,
		justifyContent: "flex-start",
		marginBottom: 100,
	},
	textHeader: {
		fontSize: 30,
		color: "#4a4a4a",
		fontWeight: "500",
	},
	iconTextContainer: {
		marginRight: 10,
	},

	contentTextContainer: {
		marginTop: 10,
	},
	contentText: {
		fontSize: 18,
		color: "#b7b8b8",
	},
	dotsContainer: {
		position: "absolute",
		top: 200,
		left: 0,
		right: 0,
		zIndex: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	dot: {
		height: 8,
		width: 8,
		borderRadius: 50,
		margin: 10,
		backgroundColor: "white",
	},
	activeDot: {
		backgroundColor: "#ff78b4",
	},
});
