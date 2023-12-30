import { StyleProp, View, ViewStyle } from "react-native";
import { ReactElement, useMemo } from "react";
import { SizeType } from "../../theme/tokens/sizes";
import { ColorType } from "../../theme/tokens/colors";
import { theme } from "../../theme/theme";

interface SurfaceProps {
	children?: ReactElement | ReactElement[];
	row?: boolean;
	padding?: SizeType | number;
	margin?: SizeType | number;
	color?: ColorType | number;
	style?: StyleProp<ViewStyle>;
}

export function Surface({ children, row, padding, margin, color, style }: SurfaceProps) {
	const styles: StyleProp<ViewStyle> = useMemo(
		() => ({
			flexDirection: row ? "row" : "column",
			padding: theme.spacing[padding] || Number(padding),
			margin: theme.spacing[margin] || Number(margin),
			color: theme.colors[color] || color,
			...style,
		}),
		[row, padding, margin, color, style]
	);

	return <View style={styles}>{children}</View>;
}
