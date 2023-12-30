import { ReactElement } from "react";
import { StyleSheet, View } from "react-native";
import { Counter, CounterVariant } from "../counter/counter";
import { Avatar } from "../avatar/avatar";
import { Text } from "../typography/text";
import { Switch } from "../switch/switch";
import { Icon } from "../icon/icon";
import { Touchable } from "../touchable/touchable";
import { theme } from "../../theme/theme";

const styles = StyleSheet.create<any>({
	container: (isHeader, disabled) => ({
		marginBottom: isHeader ? theme.spacing.xs : 0,
		opacity: disabled ? 0.5 : 1,
	}),
	item: (selected, hovered) => ({
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: theme.spacing.xs,
		paddingHorizontal: theme.spacing.md,
		gap: theme.spacing.xs,
		backgroundColor: selected || hovered ? theme.colors["background.light"] : undefined,
	}),
	left: {
		flexDirection: "row",
		alignItems: "center",
		gap: theme.spacing.xs,
		minHeight: theme.sizes.md,
		flex: 1,
	},
	right: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: "auto",
		gap: theme.spacing.xs,
	},
	pad: (pad) => ({
		height: theme.sizes.sm,
		width: theme.sizes.sm * pad + (pad - 1) * theme.spacing.xs,
	}),
	itemWidth: {
		width: theme.sizes.md,
	},
	rotated: (rotated) => ({
		transform: rotated ? [{ rotate: "90deg" }] : [],
	}),
	contextMenu: (visible) => ({
		flexDirection: "row",
		alignItems: "center",
		marginLeft: "auto",
		gap: theme.spacing.xs,
		width: theme.sizes.md,
		justifyContent: "center",
		display: visible ? "flex" : "none",
	}),
});

export function ListItem({
	children,
	isHeader,
	pad,
	chevronLeft,
	chevronRight,
	iconLeft,
	emoji,
	image,
	imageText,
	breadcrumbs,
	iconAfter,
	counter,
	counterVariant,
	iconRight,
	textRight,
	iconRightOnPress,
	selected,
	expanded,
	switchControl,
	truncateText = true,
	onPress,
	onLongPress,
	contextMenuElement,
	contextMenuIsOpened,
	disabled,
}: {
	children: string;
	isHeader?: boolean | undefined;
	pad?: number | undefined;
	chevronLeft?: boolean | undefined;
	chevronRight?: boolean | undefined;
	iconLeft?: string | undefined;
	emoji?: string | undefined;
	image?: string | undefined;
	imageText?: string | undefined;
	breadcrumbs?: string | undefined;
	iconAfter?: string | undefined;
	counter?: number | undefined;
	counterVariant?: CounterVariant | undefined;
	iconRight?: string | undefined;
	iconRightOnPress?: () => void;
	textRight?: string | undefined;
	selected?: boolean | undefined;
	expanded?: boolean | undefined;
	truncateText?: boolean | undefined;
	switchControl?: boolean | undefined;
	onPress?: () => void;
	onLongPress?: () => void;
	contextMenuElement?: ReactElement;
	contextMenuIsOpened?: boolean;
	disabled?: boolean;
}) {
	return (
		<Touchable
			disabled={disabled || isHeader}
			onPress={onPress}
			onLongPress={onLongPress}
			style={styles.container(isHeader, disabled)}
		>
			{({ hovered }) => (
				<View style={styles.item(selected && !theme.isMobile, hovered)}>
					<View style={styles.left}>
						{pad > 0 && <View style={styles.pad(pad)} />}
						{chevronLeft && <Icon name={"chevron-right"} small secondary style={styles.rotated(expanded)} />}
						{iconLeft && <Icon name={iconLeft} small tertiary />}
						{emoji && (
							<Text centered style={styles.itemWidth}>
								{emoji}
							</Text>
						)}
						{(image || imageText) && <Avatar src={image} name={imageText} size={theme.sizes.sm} />}
						<Text secondary={isHeader} semiBold={isHeader} numberOfLines={truncateText ? 1 : undefined}>
							{children}
							{breadcrumbs && (
								<Text tertiary>
									{" / "}
									{breadcrumbs}
								</Text>
							)}
						</Text>
						{chevronRight && <Icon name={"chevron-right"} small secondary style={styles.rotated(expanded)} />}
						{iconAfter && <Icon name={iconAfter} small tertiary />}
					</View>
					{!(contextMenuElement && (hovered || contextMenuIsOpened)) && (
						<View style={styles.right}>
							{iconRight && <Icon name={iconRight} small tertiary onPress={iconRightOnPress} />}
							{textRight && <Text tertiary>{textRight}</Text>}
							{counter && <Counter text={counter.toString()} variant={counterVariant} />}
							{switchControl && <Switch />}
						</View>
					)}
					{!!contextMenuElement && (
						<View style={styles.contextMenu(hovered || contextMenuIsOpened)}>{contextMenuElement}</View>
					)}
				</View>
			)}
		</Touchable>
	);
}
