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
	mr?: SizeType | number | "auto";
	mb?: SizeType | number;
	ml?: SizeType | number | "auto";
	p?: SizeType | number;
	px?: SizeType | number;
	py?: SizeType | number;
	pt?: SizeType | number;
	pr?: SizeType | number;
	pb?: SizeType | number;
	pl?: SizeType | number;
}

export interface BorderProps {
	bw?: number;
	br?: number;
	bc?: ColorType | string;
}

export interface VisibilityProps {
	hidden?: boolean;
}

type Children = ReactElement | undefined | false;

export interface CommonProps<StyleType>
	extends SizeProps,
		ExactSizeProps,
		ColorProps,
		ExactColorProps,
		SpacingProps,
		VisibilityProps,
		BorderProps {
	children?: Children | Children[];
	disabled?: boolean;
	style?: StyleProp<StyleType> | undefined;
}
