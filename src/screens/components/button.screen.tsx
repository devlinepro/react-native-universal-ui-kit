import { Text } from "../../components/typography/text";
import { Stack } from "../../components/stack/stack";
import { Divider } from "../../components/divider/divider";
import { theme } from "../../theme/theme";
import { View } from "react-native";
import { Button } from "../../components/button/button";

export function ButtonScreen() {
	return (
		<Stack p="lg">
			<Text variant="h1">Button</Text>
			<Divider />
			<View style={{ gap: theme.spacing.lg }}>
				<View style={{ gap: theme.spacing.sm }}>
					<Text variant="h3" mt="md">Variants</Text>
					<View style={{ flexDirection: "row", gap: theme.spacing.sm }}>
						<Button primary variant="filled">
							Filled
						</Button>
						<Button primary variant="outlined">
							Button
						</Button>
						<Button primary variant="text">
							Text
						</Button>
					</View>
				</View>

				<View style={{ gap: theme.spacing.sm }}>
					<Text variant="h3">Sizes</Text>
					<View style={{ flexDirection: "row", gap: theme.spacing.sm }}>
						<Button primary large>
							Large
						</Button>
						<Button primary>Medium</Button>
						<Button primary small>
							Small
						</Button>
					</View>
				</View>

				<View style={{ gap: theme.spacing.sm }}>
					<Text variant="h3">Colors</Text>
					<View style={{ flexDirection: "row", gap: theme.spacing.sm }}>
						<Button primary variant="filled">
							Primary
						</Button>
						<Button secondary variant="filled">
							Secondary
						</Button>
						<Button error variant="filled">
							Error
						</Button>
						<Button color="primary.light" textStyle={{ color: theme.colors["primary.contrastText"] }} variant="filled">
							Pallete: "primary.light"
						</Button>
						<Button color="#abcabc" textStyle={{ color: "green" }} variant="filled">
							Custom: "#abcabc"
						</Button>
					</View>
				</View>

				<View style={{ gap: theme.spacing.sm }}>
					<Text variant="h3">With icons</Text>
					<View style={{ flexDirection: "row", gap: theme.spacing.sm }}>
						<Button primary iconBefore="delete">
							Delete
						</Button>
						<Button primary iconAfter="delete" variant="outlined">
							Delete
						</Button>
						<Button primary variant="outlined" iconBefore="delete" />
					</View>
				</View>

				<View style={{ gap: theme.spacing.sm }}>
					<Text variant="h3">States</Text>
					<View style={{ flexDirection: "row", gap: theme.spacing.sm }}>
						<Button primary disabled>
							Disabled
						</Button>
						<Button primary loading>
							<Text color={theme.colors["primary.contrastText"]}>Loading</Text>
						</Button>
						<Button primary loading />
					</View>
				</View>

				<View style={{ gap: theme.spacing.sm }}>
					<Text variant="h3">Custom</Text>
					<View style={{ flexDirection: "row", gap: theme.spacing.sm }}>
						<Button primary>
							<Text color="primary.contrastText" bold>
								Notiifcations
							</Text>
							<View
								style={{
									backgroundColor: "white",
									width: 30,
									height: 30,
									borderRadius: 15,
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Text bold>12</Text>
							</View>
						</Button>
					</View>
				</View>
			</View>
		</Stack>
	);
}
