import ExpoIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { CommonProps } from "../../theme/interfaces/common-props.interface";
import { TextStyle, ViewProps } from "react-native";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import { extractCommonProps, getColorFromProps, getSizeFromProps } from "../../theme/helpers";
import { theme } from "../../theme/theme";

interface IconComponentProps extends CommonProps<TextStyle>, IconProps<string> {}

export function Icon(props: IconComponentProps) {
	const { common, rest } = extractCommonProps<IconComponentProps, ViewProps>(props, []);
	const color = getColorFromProps(props);
	const size = getSizeFromProps(props);
	return <ExpoIcon color={color} size={size} style={common.style} {...rest} />;
}
