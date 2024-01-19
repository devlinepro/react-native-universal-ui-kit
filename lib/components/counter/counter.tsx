import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../theme/theme";
import { SizeType } from "../../theme/tokens/sizes";

export type CounterVariant = "primary" | "accent" | "default" | "transparent" | "muted";

const colorMap = {
	// ["primary"]: theme.colors.primary.main,
	// ["accent"]: colors.secondary.main,
	// ["default"]: colors.primary.light,
	// ["transparent"]: "transparent",
	// ["muted"]: "transparent",
};

const textColorMap = {
	// ["primary"]: colors.primary.contrastText,
	// ["accent"]: colors.secondary.contrastText,
	// ["default"]: colors.primary.contrastText,
	// ["transparent"]: colors.text.primary,
	// ["muted"]: colors.text.tertiary,
};

const styles = StyleSheet.create<any>({
	container: (size, variant, style) => [
		{
			minWidth: size,
			paddingHorizontal: theme.spacing.sm,
			height: size,
			borderRadius: size / 2,
			backgroundColor: colorMap[variant],
			alignItems: "center",
			justifyContent: "center",
		},
		style,
	],
	text: (variant, textStyle) => [
		{
			color: textColorMap[variant],
			fontWeight: ["primary", "accent", "default"].includes(variant as any) ? "800" : undefined,
		},
		textStyle,
	],
});

export function Counter({
	text,
	variant = "default",
	size = theme.sizes.md,
	style,
	textStyle,
}: {
	text: string;
	variant?: CounterVariant | undefined;
	size?: SizeType | undefined;
	style?: any;
	textStyle?: any;
}) {
	return (
		<View style={styles.container(size, variant, style)}>
			<Text style={styles.text(variant, textStyle)}>{text}</Text>
		</View>
	);
}
