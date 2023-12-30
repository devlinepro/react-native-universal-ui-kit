import { StyleSheet, View } from "react-native";
import { ListItem } from "./list-item";

const styles = StyleSheet.create<any>({
	container: (style) => ({
		...style,
	}),
});

const List = function({ children, style }) {
	return <View style={styles.container(style)}>{children}</View>;
}

List.Item = ListItem;

export {List}