import { ReactElement } from "react";
import { StyleProp } from "react-native";
import { ColorType } from "../tokens/colors";
import { SizeType } from "../tokens/sizes";

export interface SizeProps {
	small?: boolean;
	medium?: boolean;
	large?: boolean;
	size?: SizeType | number;
}

export interface ExactSizeProps {
	width?: SizeType | number;
	height?: SizeType | number;
}

export interface ColorProps {
	primary?: boolean;
	secondary?: boolean;
	tertiary?: boolean;
	error?: boolean;
}

export interface ExactColorProps {
	color?: ColorType | string;
	bg?: ColorType | string;
}

export interface SpacingProps {
	gap?: SizeType | number;
	m?: SizeType | number;
	mx?: SizeType | number;
	my?: SizeType | number;
	mt?: SizeType | number;
	mr?: SizeType | number;
	mb?: SizeType | number;
	ml?: SizeType | number;
	p?: SizeType | number;
	px?: SizeType | number;
	py?: SizeType | number;
	pt?: SizeType | number;
	pr?: SizeType | number;
	pb?: SizeType | number;
	pl?: SizeType | number;
}

export interface VisibilityProps {
	hidden?: boolean;
}

export interface CommonProps<StyleType>
	extends SizeProps,
		ExactSizeProps,
		ColorProps,
		ExactColorProps,
		SpacingProps,
		VisibilityProps {
	children?: ReactElement | ReactElement[];
	disabled?: boolean;
	style?: StyleProp<StyleType> | undefined;
}
