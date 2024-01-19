import { Text } from "../../../lib";
import { Stack } from "../../../lib";
import { Divider } from "../../../lib";

export function ScrollViewScreen() {
	return (
		<Stack p="lg">
			<Text variant="h1">ScrollView</Text>
			<Divider />
			<Text mt="md">
				Uses React Native's ScrollView on mobile and `react-scrollbars-custom` on the web.
			</Text>
		</Stack>
	);
}
