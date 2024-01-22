import React, { cloneElement, useMemo } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { isArray } from "lodash";
import { Column, ColumProps } from "./column";
import { Row, RowProps } from "./row";
import { SizeType } from "../../theme/tokens/sizes";
import { theme } from "../../theme/theme";
import { ChildrenProp } from "../../theme/interfaces/common-props.interface";

interface GridProps {
	children: ChildrenProp;
	gap?: SizeType | number;
	padding?: SizeType | number;
	margin?: SizeType | number;
	style?: StyleProp<ViewStyle>;
}

type TGrid = React.FunctionComponent<GridProps> & {
	Row?: React.FunctionComponent<RowProps>;
	Column?: React.FunctionComponent<ColumProps>;
};

const Grid: TGrid = ({ children, padding, margin, gap, style }) => {
	const items: Row[] = (isArray(children) ? children : [children]).filter(i => !!i);

	items.forEach((item) => {
		if (item?.type?.['componentName'] !== "Row") {
			throw new Error("Children should be of Grid.Row type");
		}
	});

	const styles = useMemo(
		() => ({
			gap: theme.spacing[gap] || Number(gap) || 0,
			padding: theme.spacing[padding] || Number(padding) || 0,
			margin: theme.spacing[margin] || Number(margin) || 0,
			...style,
		}),
		[gap, padding, margin, style]
	);

	return (
		<View style={styles}>
			{items.map((item, index) =>
				cloneElement<Row>(item as any, {
					key: `grid-row-${index}`,
					_gap: gap,
					_marginHorizontal: gap ? -(gap / 2) : undefined,
				})
			)}
		</View>
	);
};

Grid.Row = Row;
Grid.Column = Column;

export { Grid };
