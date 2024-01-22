import { Avatar, Text } from "../../../lib";
import { Stack } from "../../../lib";
import { Divider } from "../../../lib";
import userImage from "../../../assets/user.jpg";

export function AvatarScreen() {
	return (
		<Stack p="lg">
			<Text variant="h1">Avatar</Text>
			<Divider />
			<Stack gap="md">
				<Text>Variants</Text>
				<Stack horizontal gap="xs">
					<Avatar src={userImage} size={"lg"} />
					<Avatar name={"Artem"} bg={"primary"} color={"primary.contrastText"} size={"lg"} />
					<Avatar name={"John"} bg={"secondary"} color={"secondary.contrastText"} size={"lg"} />
					<Avatar name={"Peter"} bg={"error"} color={"error.contrastText"} size={"lg"} />
				</Stack>
				<Text>Sizes</Text>
				<Stack horizontal gap="xs">
					<Avatar src={userImage} size={"xs"} />
					<Avatar src={userImage} size={"sm"} />
					<Avatar src={userImage} size={"md"} />
					<Avatar src={userImage} size={"lg"} />
					<Avatar src={userImage} size={"xl"} />
				</Stack>
				<Text>Icons</Text>
				<Stack horizontal gap="xs">
					<Avatar icon={"account"} size={"lg"}/>
					<Avatar icon={"folder"} size={"lg"} bg={"orange"} color={"blue"}/>
					<Avatar icon={"cog"} bg={"secondary"} size={"lg"}/>
				</Stack>
				<Text>Fallback</Text>
				<Stack horizontal gap="xs">
					<Avatar size={"lg"} />
				</Stack>
			</Stack>
		</Stack>
	);
}
