import { Pressable } from "react-native";

export function Touchable({ children, ...props }) {
	return <Pressable {...props}>{children}</Pressable>;
}
