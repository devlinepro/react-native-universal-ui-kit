import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from "../lib";
import { Grid } from "../lib";
import { ScrollView } from "../lib";
import { List } from "../lib";
import { Text } from "../lib";
import { useNavigation } from "@react-navigation/native";
import { OverviewScreen } from "./screens/getting-started/overview.screen";
import { UsageScreen } from "./screens/getting-started/usage.screen";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { GridScreen } from "./screens/layout/grid.screen";
import { ButtonScreen } from "./screens/components/button.screen";
import { StackScreen } from "./screens/layout/stack.screen";
import { TextScreen } from "./screens/layout/text.screen";
import { ListScreen } from "./screens/components/list.screen";
import { AvatarScreen } from "./screens/components/avatar.screen";
import { BadgeScreen } from "./screens/components/badge.screen";
import { DividerScreen } from "./screens/components/divider.screen";
import { IconScreen } from "./screens/components/icon.screen";
import { SwitchScreen } from "./screens/components/switch.screen";
import { TouchableScreen } from "./screens/interactions/touchable.screen";
import { ScrollViewScreen } from "./screens/layout/scroll-view.screen";
import { useEffect, useRef } from "react";
import { SurfaceScreen } from "./screens/layout/surface.screen";

const Nav = createNativeStackNavigator();
const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: theme.colors["background.light"],
	},
	grid: {
		flex: 1,
		backgroundColor: theme.colors.background,
		maxWidth: 1280,
		width: "100%",
		marginHorizontal: "auto",
	},
	sidebar: {
		flex: 1,
		borderRightWidth: 1,
		borderRightColor: theme.colors.separator,
	},
	nav: {
		paddingVertical: theme.spacing.md,
		gap: theme.spacing.md,
	},
	content: {
		flex: 1,
	},
});
const screenOptions = {
	headerShown: false,
	contentStyle: {
		backgroundColor: theme.colors.background,
	},
};

export function Navigation({ routeName }) {
	const { navigate } = useNavigation<any>();
	const scrollViewRef = useRef<ScrollView>();

	useEffect(() => {
		scrollViewRef.current?.scrollTop();
	}, [routeName]);

	return (
		<SafeAreaView style={styles.safeArea}>
			<Grid style={styles.grid}>
				<Grid.Row style={{flex: 1}}>
					<Grid.Column width={300} fullHeight style={styles.sidebar}>
						<ScrollView>
							<View style={styles.nav}>
								<List>
									<List.Item isHeader>Getting started</List.Item>
									<List.Item selected={routeName === "OverviewScreen"} onPress={() => navigate("OverviewScreen")}>
										Overview
									</List.Item>
									<List.Item disabled selected={routeName === "UsageScreen"} onPress={() => navigate("UsageScreen")}>
										Usage
									</List.Item>
									<List.Item disabled>Theme</List.Item>
								</List>
								<List>
									<List.Item isHeader>Layout</List.Item>
									<List.Item selected={routeName === "GridScreen"} onPress={() => navigate("GridScreen")}>
										Grid
									</List.Item>
									<List.Item selected={routeName === "StackScreen"} onPress={() => navigate("StackScreen")}>
										Stack
									</List.Item>
									<List.Item selected={routeName === "SurfaceScreen"} onPress={() => navigate("SurfaceScreen")}>
										Surface
									</List.Item>
									<List.Item selected={routeName === "TextScreen"} onPress={() => navigate("TextScreen")}>
										Text
									</List.Item>
									<List.Item selected={routeName === "ScrollViewScreen"} onPress={() => navigate("ScrollViewScreen")}>
										ScrollView
									</List.Item>
								</List>
								<List>
									<List.Item isHeader>Navigation</List.Item>
									<List.Item disabled>Universal</List.Item>
									<List.Item disabled>App Bar</List.Item>
									<List.Item disabled>Bottom Bar</List.Item>
								</List>
								<List>
									<List.Item isHeader>Components</List.Item>
									<List.Item disabled>Action Sheet</List.Item>
									<List.Item selected={routeName === "AvatarScreen"} onPress={() => navigate("AvatarScreen")}>
										Avatar
									</List.Item>
									<List.Item disabled>Autocomplete</List.Item>
									<List.Item selected={routeName === "BadgeScreen"} onPress={() => navigate("BadgeScreen")}>
										Badge
									</List.Item>
									<List.Item disabled>Bottom Action Sheet</List.Item>
									<List.Item selected={routeName === "ButtonScreen"} onPress={() => navigate("ButtonScreen")}>
										Button
									</List.Item>
									<List.Item disabled>Card</List.Item>
									<List.Item disabled>Checkbox</List.Item>
									<List.Item disabled>DateTime Picker</List.Item>
									<List.Item disabled>Dialog</List.Item>
									<List.Item selected={routeName === "DividerScreen"} onPress={() => navigate("DividerScreen")}>
										Divider
									</List.Item>
									<List.Item disabled>Floating Action Button</List.Item>
									<List.Item disabled>Gallery</List.Item>
									<List.Item selected={routeName === "IconScreen"} onPress={() => navigate("IconScreen")}>
										Icon
									</List.Item>
									<List.Item disabled>Input</List.Item>
									<List.Item selected={routeName === "ListScreen"} onPress={() => navigate("ListScreen")}>
										List
									</List.Item>
									<List.Item disabled>Menu</List.Item>
									<List.Item disabled>Message</List.Item>
									<List.Item disabled>Portal</List.Item>
									<List.Item disabled>Select</List.Item>
									<List.Item disabled>Segmented Buttons</List.Item>
									<List.Item selected={routeName === "SwitchScreen"} onPress={() => navigate("SwitchScreen")}>
										Switch
									</List.Item>
									<List.Item disabled>Table</List.Item>
									<List.Item disabled>Tabs</List.Item>
									<List.Item disabled>Tree</List.Item>
								</List>
								<List>
									<List.Item isHeader>Forms</List.Item>
									<List.Item disabled>Basic</List.Item>
								</List>
								<List>
									<List.Item isHeader>Interactions</List.Item>
									<List.Item selected={routeName === "TouchableScreen"} onPress={() => navigate("TouchableScreen")}>
										Touchable
									</List.Item>
								</List>
							</View>
						</ScrollView>
					</Grid.Column>
					<Grid.Column style={styles.content}>
						<ScrollView ref={scrollViewRef}>
							<View style={{ flex: 1 }}>
								<Nav.Navigator screenOptions={screenOptions}>
									<Nav.Screen name="OverviewScreen" component={OverviewScreen} />
									<Nav.Screen name="UsageScreen" component={UsageScreen} />
									<Nav.Screen name="GridScreen" component={GridScreen} />
									<Nav.Screen name="StackScreen" component={StackScreen} />
									<Nav.Screen name="SurfaceScreen" component={SurfaceScreen} />
									<Nav.Screen name="TextScreen" component={TextScreen} />
									<Nav.Screen name="ButtonScreen" component={ButtonScreen} />
									<Nav.Screen name="ListScreen" component={ListScreen} />
									<Nav.Screen name="AvatarScreen" component={AvatarScreen} />
									<Nav.Screen name="BadgeScreen" component={BadgeScreen} />
									<Nav.Screen name="DividerScreen" component={DividerScreen} />
									<Nav.Screen name="IconScreen" component={IconScreen} />
									<Nav.Screen name="SwitchScreen" component={SwitchScreen} />
									<Nav.Screen name="TouchableScreen" component={TouchableScreen} />
									<Nav.Screen name="ScrollViewScreen" component={ScrollViewScreen} />
								</Nav.Navigator>
							</View>
						</ScrollView>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</SafeAreaView>
	);
}
