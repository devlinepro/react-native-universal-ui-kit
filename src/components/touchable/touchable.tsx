import { TouchableHighlight } from "react-native";
import { theme } from "../../theme/theme";

export function Touchable({ children, ...props }) {
	return (
		<TouchableHighlight {...props} underlayColor={theme.colors["background.light"]}>
			{typeof children === "function" ? children.call(null, {}) : children}
		</TouchableHighlight>
	);
}
