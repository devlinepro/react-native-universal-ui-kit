import { Text } from "../../../lib";
import { Stack } from "../../../lib";
import { Divider } from "../../../lib";

export function TouchableScreen() {
	return (
		<Stack p="lg">
			<Text variant="h1">Touchable</Text>
			<Divider />
			<Text variant="h3" mt="md">TODO</Text>
		</Stack>
	);
}
