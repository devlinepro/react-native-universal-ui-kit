import ExpoIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { CommonProps } from "../../theme/interfaces/common-props.interface";
import { TextStyle, ViewProps } from "react-native";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import { extractCommonProps } from "../../theme/helpers";

interface IconComponentProps extends CommonProps<TextStyle>, IconProps<string> {}

export function Icon(props: IconComponentProps) {
	const { common, rest } = extractCommonProps<IconComponentProps, ViewProps>(props, []);
	return <ExpoIcon color={common.color} size={common.size} style={common.style} {...rest} />;
}
