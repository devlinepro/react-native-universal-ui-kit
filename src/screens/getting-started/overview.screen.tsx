import { Text } from "../../../lib";
import { Stack } from "../../../lib";
import { Divider } from "../../../lib";
import { List } from "../../../lib";
import { useNavigation } from "@react-navigation/native";
import { SurfaceScreen } from "../layout/surface.screen";

export function OverviewScreen() {
	const { navigate } = useNavigation<any>();

	return (
		<Stack p="lg">
			<Text variant="h1">Overview</Text>
			<Divider />
			<Text mt="md">
				React Native Universal Kit is a set of components for quick development for both Mobile and Web.
			</Text>
			<Text mt="md">
				Some Universal components use different components "under the hood". For example, native ScrollView on mobile
				and `react-scrollbars-custom` on web, native action sheet on mobile and context menu on web.
			</Text>
			<Text mt="md">Also it provides useful props for most of components for spacing, sizing, color, etc.</Text>
			<Text mt="md">
				Overall roadmap is in the left Sidebar. Below listed implemented components and implementation queue.
			</Text>
			<Text variant="h3" mt="lg" mb="md">
				Next in queue
			</Text>
			<List>
				<List.Item disabled>Input</List.Item>
				<List.Item disabled>Dialog</List.Item>
			</List>
			<Text variant="h3" mt="lg" mb="md">
				Implemented
			</Text>
			<Text variant="h4" mt="md" mb="md">
				Layout
			</Text>
			<List>
				<List.Item onPress={() => navigate("GridScreen")}>Grid</List.Item>
				<List.Item onPress={() => navigate("StackScreen")}>Stack</List.Item>
				<List.Item onPress={() => navigate("SurfaceScreen")}>Surface</List.Item>
				<List.Item onPress={() => navigate("TextScreen")}>Text</List.Item>
				<List.Item onPress={() => navigate("ScrollViewScreen")}>ScrollView</List.Item>
			</List>
			<Text variant="h4" mt="md" mb="md">
				Components
			</Text>
			<List>
				<List.Item onPress={() => navigate("ListScreen")}>List</List.Item>
				<List.Item onPress={() => navigate("ButtonScreen")}>Button</List.Item>
				<List.Item onPress={() => navigate("BadgeScreen")}>Badge</List.Item>
				<List.Item onPress={() => navigate("DividerScreen")}>Divider</List.Item>
				<List.Item onPress={() => navigate("AvatarScreen")}>Avatar</List.Item>
				<List.Item onPress={() => navigate("IconScreen")}>Icon</List.Item>
				<List.Item onPress={() => navigate("SwitchScreen")}>Switch</List.Item>
			</List>
			<Text variant="h4" mt="md" mb="md">
				Interactions
			</Text>
			<List>
				<List.Item onPress={() => navigate("TouchableScreen")}>Touchable</List.Item>
			</List>
		</Stack>
	);
}
