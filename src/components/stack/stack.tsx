import { StyleProp, View, ViewStyle } from "react-native";
import { useMemo } from "react";
import { getStylesFromProps } from "../../theme/helpers";
import { ColorType } from "../../theme/tokens/colors";

export function Stack({
	children,
	horizontal,
	style,
	...props
}: {
	horizontal?: boolean;
	style?: StyleProp<ViewStyle>;
}) {
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
