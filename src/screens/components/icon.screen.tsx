import { Text } from "../../components/typography/text";
import { Stack } from "../../components/stack/stack";
import { Divider } from "../../components/divider/divider";

export function IconScreen() {
	return (
		<Stack p="lg">
			<Text variant="h1">Icon</Text>
			<Divider />
			<Text variant="h3" mt="md">TODO</Text>
		</Stack>
	);
}
