import { Text } from "../../components/typography/text";
import { Stack } from "../../components/stack/stack";
import { Divider } from "../../components/divider/divider";

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
