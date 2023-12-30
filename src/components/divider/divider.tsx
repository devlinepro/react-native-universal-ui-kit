import { Platform, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { theme } from "../../theme/theme";

const styles = StyleSheet.create<any>({
	divider: (vertical, style) => {
		return [
			{
				backgroundColor: theme.colors.separator,
			},
			vertical
				? {
						width: Platform.OS === "web" ? 1 : StyleSheet.hairlineWidth,
						marginHorizontal: theme.spacing.sm,
				  }
				: {
						height: Platform.OS === "web" ? 1 : StyleSheet.hairlineWidth,
						marginVertical: theme.spacing.sm,
				  },
			style,
		];
	},
});

interface DividerProps {
	vertical?: boolean;
	style?: StyleProp<ViewStyle>;
}

export function Divider({ vertical, style }: DividerProps) {
	return <View style={styles.divider(vertical, style)} />;
}
