import { Text } from "../../components/typography/text";
import { Stack } from "../../components/stack/stack";
import { Divider } from "../../components/divider/divider";

export function StackScreen() {
	return (
		<Stack p="lg">
			<Text variant="h1">Stack</Text>
			<Divider />
			<Text mt="md">Just a View with helper props.</Text>
			<Text mt="md">To Do: write detailed documentation</Text>
			<Text variant="h3" mt="lg" mb="md">
				Variations
			</Text>
			<Stack gap="md">
				<Stack
					bg="background.light"
					p="sm"
					gap="sm"
					style={{
						width: 128,
						height: 128,
					}}
				>
					<Text>Vertical stack</Text>
					<Text>1</Text>
					<Text>2</Text>
					<Text>3</Text>
				</Stack>
				<Stack
					horizontal
					gap="sm"
					bg="background.light"
					p="sm"
					style={{
						width: 512,
						height: 128,
					}}
				>
					<Text>Horizontal stack</Text>
					<Text>1</Text>
					<Text>2</Text>
					<Text>3</Text>
				</Stack>
				<Stack
					horizontal
					bg="primary"
					p="lg"
					gap="lg"
					my="sm"
					style={{
						width: 512,
						height: 128,
					}}
				>
					<Text color="primary.contrastText">Helper props</Text>
					<Text color="primary.contrastText">p="lg"</Text>
					<Text color="primary.contrastText">gap="lg"</Text>
					<Text color="primary.contrastText">my="sm"</Text>
					<Text color="primary.contrastText">bg="primary"</Text>
				</Stack>
			</Stack>
		</Stack>
	);
}
