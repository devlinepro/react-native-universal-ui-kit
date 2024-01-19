import { Text } from "../../../lib";
import { Stack } from "../../../lib";
import { Divider } from "../../../lib";

export function TextScreen() {
	return (
		<Stack p="lg">
			<Text variant="h1">Text</Text>
			<Divider />
			<Text mt="md">To Do: write detailed documentation</Text>
			<Divider />
			<Stack gap="md">
				<Text variant="h1">Header 1</Text>
				<Text variant="h2">Header 2</Text>
				<Text variant="h3">Header 3</Text>
				<Text variant="h4">Header 4</Text>
				<Text variant="h5">Header 5</Text>
				<Text variant="h6">Header 6</Text>
				<Text variant="bodyLarge">Body large</Text>
				<Text variant="body">Body default</Text>
				<Text variant="bodySmall">Body small</Text>
				<Text>Primary</Text>
				<Text secondary>Secondary</Text>
				<Text tertiary>Tertiary</Text>
				<Text bold>Bold</Text>
				<Text semiBold>Semibold</Text>
				<Text centered>Centered</Text>
			</Stack>
		</Stack>
	);
}
