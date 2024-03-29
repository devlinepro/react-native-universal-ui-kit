import { View, ViewStyle } from "react-native";
import { useMemo } from "react";
import { getStylesFromProps } from "../../theme/helpers";
import { CommonProps, SizeProps } from "../../theme/interfaces/common-props.interface";

interface StackProps extends Omit<CommonProps<ViewStyle>, SizeProps> {
	horizontal?: boolean;
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
