import { StyleSheet, View } from "react-native";
import { theme } from "../../theme/theme";

const styles = StyleSheet.create({
	container: {
		width: theme.sizes.lg,
		alignItems: "center",
	},
	track: {
		height: theme.sizes.sm,
		width: theme.sizes.lg,
		backgroundColor: theme.colors["background.light"],
		borderRadius: theme.sizes.sm / 2,
		alignItems: "flex-end",
	},
	circle: {
		height: theme.sizes.sm,
		width: theme.sizes.sm,
		backgroundColor: theme.colors.primary,
		borderRadius: theme.sizes.sm / 2,
	},
});

export function Switch() {
	return (
		<View style={styles.container}>
			<View style={styles.track}>
				<View style={styles.circle} />
			</View>
		</View>
	);
}
