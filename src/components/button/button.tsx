import { useCallback } from "react";
import {
	ActivityIndicator,
	Pressable,
	StyleProp,
	StyleSheet,
	TextProps,
	TextStyle,
	View,
	ViewProps,
	ViewStyle,
} from "react-native";
import { CommonProps } from "../../theme/interfaces/common-props.interface";
import { PressableProps } from "react-native/Libraries/Components/Pressable/Pressable";
import {
	extractCommonProps,
	getColorFromProps,
	getContrastColorFromProps,
	getSizeFromProps,
} from "../../theme/helpers";
import { theme } from "../../theme/theme";
import { Text } from "../typography/text";
import { isString } from "lodash";
import { Icon } from "../icon/icon";

interface StyleFuncProps {
	size: number;
	color: string;
	contrastColor: string;
	hovered: boolean;
	pressed: boolean;
	disabled: boolean;
	style: StyleProp<any>;
}

let styles = {
	defaults: StyleSheet.create<any>({
		container: {
			flexDirection: "row",
			gap: theme.spacing.xs,
			borderRadius: theme.sizes.xs,
			paddingVertical: theme.spacing.xs,
			paddingHorizontal: theme.spacing.lg,
			alignItems: "center",
			justifyContent: "center",
			borderWidth: 2,
		},
	}),
	filled: StyleSheet.create<any>({
		container: (props: StyleFuncProps) => ({
			...styles.defaults.container,
			backgroundColor: props.color,
			borderColor: props.color,
			opacity: props.pressed ? 0.5 : props.hovered ? 0.85 : 1,
			...props.style,
		}),
		text: (props: StyleFuncProps) => ({
			color: props.contrastColor,
			...props.style,
		}),
	}),
	outlined: StyleSheet.create<any>({
		container: (props: StyleFuncProps) => ({
			...styles.defaults.container,
			borderColor: props.color,
			opacity: props.pressed ? 0.5 : props.hovered ? 0.85 : 1,
			...props.style,
		}),
		text: (props: StyleFuncProps) => ({
			color: props.color,
			...props.style,
		}),
	}),
	text: StyleSheet.create<any>({
		container: (props: StyleFuncProps) => ({
			...styles.defaults.container,
			opacity: props.pressed ? 0.5 : props.hovered ? 0.85 : 1,
			borderColor: "transparent",
			...props.style,
		}),
		text: (props: StyleFuncProps) => ({
			color: props.color,
			...props.style,
		}),
	}),
};

interface ButtonComponentProps extends CommonProps<ViewStyle>, PressableProps {
	variant?: "filled" | "outlined" | "text";
	iconBefore?: string;
	iconAfter?: string;
	loading?: boolean;
	textProps?: TextProps;
	textStyle?: StyleProp<TextStyle>;
}

export function Button(props: ButtonComponentProps) {
	const { common, rest } = extractCommonProps<ButtonComponentProps, ViewProps>(props, [
		"variant",
		"iconBefore",
		"iconAfter",
		"loading",
		"textProps",
		"textStyle",
	]);

	const button = useCallback(
		({ pressed, hovered }) => {
			const variant = props.variant || "filled";
			const color = getColorFromProps(common);
			const contrastColor = getContrastColorFromProps(common);
			const size = getSizeFromProps(common) || theme.sizes.md;
			const styleProps = {
				size,
				color,
				contrastColor,
				hovered,
				pressed,
				disabled: props.disabled,
				style: props.textStyle,
			};
			const containerStyle = styles[variant].container(styleProps);
			const textStyle = styles[variant].text(styleProps);

			return (
				<View style={containerStyle}>
					{common.iconBefore && common.loading && <ActivityIndicator size={16} color={"white"} />}
					{!common.iconBefore && !common.iconAfter && common.loading && <ActivityIndicator size={16} color={"white"} />}
					{common.iconBefore && !common.loading && <Icon name={common.iconBefore} color={color} size={size} />}
					{isString(common.children) ? (
						<Text
							variant={common.large ? "bodyLarge" : common.small ? "bodySmall" : "body"}
							style={textStyle}
							{...props.textProps}
						>
							{common.children}
						</Text>
					) : (
						common.children
					)}
					{common.iconAfter && common.loading && <ActivityIndicator size={16} color={"white"} />}
					{common.iconAfter && !common.loading && <Icon name={common.iconAfter} color={color} size={size} />}
				</View>
			);
		},
		[common]
	);

	return (
		<Pressable disabled={props.disabled || props.loading} {...rest}>
			{button}
		</Pressable>
	);
}
