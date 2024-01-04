import { StyleProp, View, ViewStyle } from "react-native";
import { useMemo } from "react";
import { getStylesFromProps } from "../../theme/helpers";
import {
	ExactColorProps,
	ExactSizeProps,
	SpacingProps,
	VisibilityProps,
} from "../../theme/interfaces/common-props.interface";

interface StackProps extends SpacingProps, VisibilityProps, ExactColorProps, ExactSizeProps {
	horizontal?: boolean;
	style?: StyleProp<ViewStyle>;
}

export function Stack({ children, horizontal, style, ...props }: StackProps) {
	const styles = useMemo(
		() => ({
			flexDirection: horizontal ? "row" : "column",
			...getStylesFromProps(props),
			...style,
		}),
		[horizontal, props, style]
	);

	return <View style={styles}>{children}</View>;
}
