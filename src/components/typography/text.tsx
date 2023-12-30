import { StyleSheet, Text as TextNative, TextProps, TextStyle } from "react-native";
import { CommonProps, SizeProps } from "../../theme/interfaces/common-props.interface";
import { extractCommonProps, getColorFromProps, getStylesFromProps } from "../../theme/helpers";
import { FontType } from "../../theme/tokens/typography";
import { theme } from "../../theme/theme";

interface TextComponentProps extends Omit<CommonProps<TextStyle>, keyof SizeProps> {
	variant?: FontType;
	semiBold?: boolean | undefined;
	bold?: boolean | undefined;
	centered?: boolean | undefined;
}

const textStyle = StyleSheet.create<any>({
	text: (common: TextComponentProps) => {
		const textStyle = {
			fontSize: theme.typography.size[common.variant],
			lineHeight: theme.typography.lineHeight[common.variant],
			color: getColorFromProps(common, true),
			fontWeight: "400",
			textAlign: "left",
			...getStylesFromProps(common),
		};

		common.bold && (textStyle.fontWeight = "800");
		common.semiBold && (textStyle.fontWeight = "600");
		common.centered && (textStyle.textAlign = "center");

		return [textStyle, common.style];
	},
});

export function Text(props: TextComponentProps & TextProps) {
	const { common, rest } = extractCommonProps<TextComponentProps, TextProps>(props, [
		"variant",
		"semiBold",
		"bold",
		"centered",
	]);

	return (
		<TextNative style={textStyle.text(common)} {...rest}>
			{common.children}
		</TextNative>
	);
}
