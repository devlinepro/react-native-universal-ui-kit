import { cloneElement, Fragment, ReactElement, useMemo } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { isArray, sum } from "lodash";
import { Column } from "./column";
import { theme } from "../../theme/theme";
import { ChildrenProp } from "../../theme/interfaces/common-props.interface";

export interface RowProps {
	children?: ChildrenProp;
	space?: "between" | "around";
	style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create<any>({
	container: (_marginHorizontal, style) => ({
		flexDirection: "row",
		marginHorizontal: _marginHorizontal || undefined,
		...style,
	}),
});

const Row = function ({ children, space, style, _gap, _marginHorizontal }: RowProps) {
	const columns: ReactElement[] = useMemo(
		() => (isArray(children) ? (children as ReactElement[]) : [children as ReactElement]) || [],
		[children]
	);

	const { before, between, after } = useMemo(() => {
		const width = sum(columns.map((column) => (column.props.width || 0) + (column.props.offset || 0)));

		let before = 0;
		let between = 0;
		let after = theme.gridSize - width;
		if (!width) {
			after = 0;
		}
		if (space === "between") {
			between = (theme.gridSize - width) / (columns.length - 1);
			after = 0;
		}
		if (space === "around") {
			between = after = before = (theme.gridSize - width) / (columns.length + 1);
		}

		before < 0 && (before = 0);
		between < 0 && (between = 0);
		after < 0 && (after = 0);

		return { before, between, after };
	}, [columns, space]);

	return (
		<View style={styles.container(_marginHorizontal, style)}>
			{before > 0 && <Column _gap={_gap} _empty width={before} />}
			{columns.map((column, index) => (
				<Fragment key={`grid-row-${index}`}>
					{column.props.offset > 0 && <Column _empty _gap={_gap} width={column.props.offset} />}
					{column.type?.["componentName"] === "Column" ? (
						cloneElement<any>(column as any, { _gap })
					) : (
						<Column _gap={_gap}>{column}</Column>
					)}
					{between > 0 && index !== columns.length - 1 && <Column _empty _gap={_gap} width={between} />}
				</Fragment>
			))}
			{after > 0 && <Column _gap={_gap} _empty width={after} />}
		</View>
	);
};

Row.componentName = "Row";

export { Row };
