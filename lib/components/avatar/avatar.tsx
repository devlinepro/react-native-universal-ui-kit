import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Image } from "expo-image";
import { isString } from "lodash";
import { Text } from "../typography/text";
import { theme } from "../../theme/theme";
import { SizeType } from "../../theme/tokens/sizes";

const styles = StyleSheet.create<any>({
	container: (size, backgroundColor, style) => [
		{
			width: size,
			height: size,
			backgroundColor: backgroundColor,
			borderRadius: size / 2,
			alignItems: "center",
			justifyContent: "center",
		},
		style,
	],
	image: (size) => ({
		width: "100%",
		height: "100%",
		borderRadius: size / 2,
	}),
	text: (textColor) => ({
		textTransform: "uppercase",
		color: textColor,
	}),
});

export function Avatar({
	src,
	name,
	size = theme.sizes.md,
	backgroundColor = theme.colors.background,
	textColor = theme.colors["primary.contrastText"],
	style,
}: {
	src?: string | undefined;
	size?: SizeType | undefined;
	name?: string | undefined;
	backgroundColor?: string | undefined;
	textColor?: string | undefined;
	style?: StyleProp<ViewStyle> | undefined;
}) {
	return (
		<View style={styles.container(size, backgroundColor, style)}>
			{src ? (
				<Image source={isString(src) ? { uri: src } : src} style={styles.image(size)} />
			) : (
				<Text style={styles.text(textColor)}>{name?.replace("@", "")[0] || ""}</Text>
			)}
		</View>
	);
}
