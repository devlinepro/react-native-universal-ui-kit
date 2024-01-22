import { StyleProp, View, ViewStyle } from "react-native";
import { useMemo } from "react";
import { CommonProps, SizeProps } from "../../theme/interfaces/common-props.interface";
import { getStylesFromProps } from "../../theme/helpers";

interface SurfaceProps extends Omit<CommonProps<ViewStyle>, SizeProps> {
	horizontal?: boolean;
}

export function Surface({ children, horizontal, style, ...props }: SurfaceProps) {
	const styles: StyleProp<ViewStyle> = useMemo(
		() => ({
			flexDirection: horizontal ? "row" : "column",
			...getStylesFromProps(props),
			...style,
		}),
		[horizontal, props, style]
	);

	return <View style={styles}>{children}</View>;
}
