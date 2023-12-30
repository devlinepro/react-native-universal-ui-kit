import { ReactElement } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { theme } from "../../theme/theme";
import { Row } from "./row";

export interface ColumProps {
	children?: ReactElement | ReactElement[];
	width?: number;
	offset?: number;
	fullHeight?: boolean;
	centered?: boolean;
	style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create<any>({
	container: (width, centered) => {
		const exactWidth = width > 0 && width <= theme.gridSize ? undefined : width;
		const flex = width > 0 && width <= theme.gridSize ? width : exactWidth ? undefined : 1;

		return {
			justifyContent: centered ? "center" : undefined,
			flex,
			width: exactWidth,
		};
	},
	cell: (_gap, _empty, fullHeight, style) => ({
		marginHorizontal: _gap / 2,
		height: fullHeight ? "100%" : undefined,
		...style,
	}),
});

function Column({ children, width, fullHeight, centered, style, _empty, _gap }: ColumProps) {
	return (
		<View style={styles.container(width, centered)}>
			<View style={styles.cell(_gap, _empty, fullHeight, style)}>{children}</View>
		</View>
	);
}

Column.componentName = "Column";

export { Column };
