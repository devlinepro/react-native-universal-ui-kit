import { Text } from "../../../lib";
import { Stack } from "../../../lib";
import { Divider } from "../../../lib";

export function BadgeScreen() {
	return (
		<Stack p="lg">
			<Text variant="h1">Badge</Text>
			<Divider />
			<Text variant="h3" mt="md">TODO</Text>
		</Stack>
	);
}
