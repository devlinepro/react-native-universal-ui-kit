import { StyleSheet, View, ViewStyle } from "react-native";
import { Image } from "expo-image";
import { isString } from "lodash";
import { Text } from "../typography/text";
import { CommonProps } from "../../theme/interfaces/common-props.interface";
import { getSizeFromProps, getStylesFromProps } from "../../theme/helpers";
import { theme } from "../../theme/theme";
import { Icon } from "../icon/icon";

const styles = StyleSheet.create<any>({
	container: (props) => {
		const size = getSizeFromProps(props);
		props.width = size || props.width || theme.sizes.md;
		props.height = size || props.height || theme.sizes.md;
		props.br = "50%";

		return {
			backgroundColor: theme.colors.primary,
			...getStylesFromProps(props),
			alignItems: "center",
			justifyContent: "center",
		};
	},
	image: {
		width: "100%",
		height: "100%",
		borderRadius: "50%",
	},
	text: (props) => {
		const fontSize = (getSizeFromProps(props) || props.width || props.height || theme.sizes.md) / 2;

		return {
			textTransform: "uppercase",
			fontSize,
		};
	},
});

interface AvatarProps extends CommonProps<ViewStyle> {
	src?: string | undefined;
	name?: string | undefined;
	icon?: string | undefined;
}

export function Avatar({ src, name, icon, ...props }: AvatarProps) {
	const _textColor = theme.colors[props.color] || props.color || theme.colors["primary.contrastText"];

	return (
		<View style={styles.container(props)}>
			{src && <Image source={isString(src) ? { uri: src } : src} style={styles.image} />}
			{name && <Text color={_textColor} style={styles.text(props)}>{name?.[0] || ""}</Text>}
			{icon && <Icon name={icon} size={styles.text(props).fontSize} color={_textColor} />}
			{!src && !name && !icon && <Icon name={"account"} size={styles.text(props).fontSize} color={_textColor} />}
		</View>
	);
}
