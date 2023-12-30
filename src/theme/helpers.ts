import { isNumber, isUndefined, omit, omitBy, pick } from "lodash";
import { ColorProps, CommonProps, SizeProps } from "./interfaces/common-props.interface";
import { theme } from "./theme";
import { StyleProp } from "react-native";

export function extractCommonProps<P1, P2>(
	all: P1 & P2,
	include: string[] = []
): {
	common: P1;
	rest: P2;
} {
	const commonProps = [
		"small",
		"medium",
		"large",
		"size",
		"primary",
		"secondary",
		"tertiary",
		"error",
		"color",
		"bg",
		"children",
		"disabled",
		"hidden",
		"gap",
		"m",
		"mx",
		"my",
		"mt",
		"mr",
		"mb",
		"ml",
		"p",
		"px",
		"py",
		"pt",
		"pr",
		"pb",
		"pl",
		"style",
		...include,
	];
	const common = pick(all, commonProps);
	const rest = omit(all, commonProps);

	return {
		common,
		rest,
	};
}

export function getColorFromProps(props: CommonProps<any>, isText = false): string | undefined {
	if (props.error) {
		return theme.colors.error;
	}
	if (props.disabled) {
		return theme.colors["background.light"];
	}
	if (props.primary) {
		return isText ? theme.colors["text.primary"] : theme.colors.primary;
	}
	if (props.secondary) {
		return isText ? theme.colors["text.secondary"] : theme.colors.secondary;
	}
	if (props.tertiary) {
		return theme.colors["text.tertiary"];
	}
	return theme.colors[props.color] || props.color;
}

export function getContrastColorFromProps(props: CommonProps<any>): string | undefined {
	if (props.error) {
		return theme.colors["error.contrastText"];
	}
	if (props.disabled) {
		return theme.colors["text.secondary"];
	}
	if (props.primary) {
		return theme.colors["primary.contrastText"];
	}
	if (props.secondary) {
		return theme.colors["secondary.contrastText"];
	}
	return theme.colors["text.primary"];
}

export function getSizeFromProps(props: CommonProps<any>): number | undefined {
	if (props.large) {
		return theme.sizes.lg;
	}
	if (props.medium) {
		return theme.sizes.md;
	}
	if (props.small) {
		return theme.sizes.sm;
	}

	return theme.sizes[props.size] || (isNumber(props.size) ? (props.size as number) : undefined);
}

export function getSpacingFromProps(props: CommonProps<any>): number | undefined {
	if (props.large) {
		return theme.spacing.lg;
	}
	if (props.medium) {
		return theme.spacing.md;
	}
	if (props.small) {
		return theme.spacing.sm;
	}

	return theme.spacing[props.size] || (isNumber(props.size) ? (props.size as number) : undefined);
}

export function getStylesFromProps(props: CommonProps<any>): StyleProp<any> {
	return omitBy(
		{
			gap: theme.spacing[props.gap] || props.gap,
			margin: theme.spacing[props.m] || props.m,
			marginVertical: theme.spacing[props.my] || props.my,
			marginHorizontal: theme.spacing[props.mx] || props.mx,
			marginTop: theme.spacing[props.mt] || props.mt,
			marginRight: theme.spacing[props.mr] || props.mr,
			marginBottom: theme.spacing[props.mb] || props.mb,
			marginLeft: theme.spacing[props.ml] || props.ml,
			padding: theme.spacing[props.p] || props.p,
			paddingVertical: theme.spacing[props.py] || props.py,
			paddingHorizontal: theme.spacing[props.px] || props.px,
			paddingTop: theme.spacing[props.pt] || props.pt,
			paddingRight: theme.spacing[props.pr] || props.pr,
			paddingBottom: theme.spacing[props.pb] || props.pb,
			paddingLeft: theme.spacing[props.pl] || props.pl,
			display: props.hidden ? "none" : undefined,
			color: theme.colors[props.color] || props.color,
			backgroundColor: theme.colors[props.bg] || props.bg,
		},
		isUndefined
	);
}
