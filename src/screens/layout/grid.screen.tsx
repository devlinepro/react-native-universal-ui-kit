import { Text } from "../../components/typography/text";
import { Divider } from "../../components/divider/divider";
import { StyleSheet, View } from "react-native";
import { Grid } from "../../components/grid/grid";
import { theme } from "../../theme/theme";
import { Stack } from "../../components/stack/stack";

const styles = StyleSheet.create({
	column: {
		backgroundColor: theme.colors["background.light"],
		padding: theme.spacing.sm,
		borderRadius: theme.spacing.xs,
	},
});

export function GridScreen() {


	return (
		<Stack p="lg">
			<Text variant="h1">Grid</Text>
			<Divider />
			<Text mt="md">To Do: write detailed documentation</Text>
			<Text variant="h3" mt="lg" mb="md">
				Default grid size is 16 columns
			</Text>
			<Grid gap={16}>
				<Grid.Row>
					<Grid.Column style={styles.column} width={1}>
						<Text>&nbsp;</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={1}>
						<Text>&nbsp;</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={1}>
						<Text>&nbsp;</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={1}>
						<Text>&nbsp;</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={1}>
						<Text>&nbsp;</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={1}>
						<Text>&nbsp;</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={1}>
						<Text>&nbsp;</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={1}>
						<Text>&nbsp;</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={1}>
						<Text>&nbsp;</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={1}>
						<Text>&nbsp;</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={1}>
						<Text>&nbsp;</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={1}>
						<Text>&nbsp;</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={1}>
						<Text>&nbsp;</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={1}>
						<Text>&nbsp;</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={1}>
						<Text>&nbsp;</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={1}>
						<Text>&nbsp;</Text>
					</Grid.Column>
				</Grid.Row>
			</Grid>
			<Text variant="h3" mt="lg" mb="sm">
				Fixed column width and offsets
			</Text>
			<Grid gap={16}>
				<Grid.Row>
					<Grid.Column style={styles.column} width={4}>
						<Text>4</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={4}>
						<Text>4</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={4}>
						<Text>4</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={4}>
						<Text>4</Text>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column style={styles.column} width={6}>
						<Text>6</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={2}>
						<Text>2</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={2}>
						<Text>2</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={2}>
						<Text>2</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={4}>
						<Text>4</Text>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column style={styles.column} width={6} offset={4}>
						<Text>6, offset 4</Text>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column style={styles.column} width={6} offset={10}>
						<Text>6, offset 10</Text>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column style={styles.column} width={3} offset={2}>
						<Text>3, offset 2</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={6} offset={4}>
						<Text>6, offset 4</Text>
					</Grid.Column>
				</Grid.Row>
			</Grid>

			<Text variant="h3" mt="lg" mb="md">
				Auto width
			</Text>
			<Grid gap={8}>
				<Grid.Row>
					<Grid.Column style={styles.column}>
						<Text>auto</Text>
					</Grid.Column>
					<Grid.Column style={styles.column}>
						<Text>auto</Text>
					</Grid.Column>
					<Grid.Column style={styles.column}>
						<Text>auto</Text>
					</Grid.Column>
					<Grid.Column style={styles.column}>
						<Text>auto</Text>
					</Grid.Column>
					<Grid.Column style={styles.column}>
						<Text>auto</Text>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column style={styles.column}>
						<Text>auto</Text>
					</Grid.Column>
					<Grid.Column style={styles.column}>
						<Text>auto</Text>
					</Grid.Column>
					<Grid.Column style={styles.column}>
						<Text>auto</Text>
					</Grid.Column>
				</Grid.Row>
			</Grid>

			<Text variant="h3" mt="lg" mb="md">
				Variations
			</Text>
			<Grid gap={16}>
				<Grid.Row>
					<Grid.Column style={styles.column}>
						<Text>1 column, auto width</Text>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column style={styles.column} width={2}>
						<Text>2</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={5} offset={3}>
						<Text>5, offset 3</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={3} offset={2}>
						<Text>3, offset 2</Text>
						<Text>text</Text>
						<Text>text</Text>
						<Text>text</Text>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row space="around">
					<Grid.Column width={5.5} centered>
						<Text centered secondary>
							Space around
						</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={5}>
						<Text>5, centered</Text>
					</Grid.Column>
					<Grid.Column width={5.5} centered>
						<Text centered secondary>
							Space around
						</Text>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column style={styles.column} width={3}>
						<Text>Left, 3</Text>
					</Grid.Column>
					<Grid.Column width={9} centered>
						<Text centered secondary>
							Space between
						</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={4}>
						<Text>Right, 4</Text>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row space="around">
					<Grid.Column width={3} centered>
						<Text centered secondary>
							Space around
						</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={3}>
						<Text>Left, 3</Text>
					</Grid.Column>
					<Grid.Column width={3} centered>
						<Text centered secondary>
							Space around
						</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} width={4}>
						<Text>Right, 4</Text>
					</Grid.Column>
					<Grid.Column width={3} centered>
						<Text centered secondary>
							Space around
						</Text>
					</Grid.Column>
				</Grid.Row>
			</Grid>

			<Text variant="h3" mt="lg" mb="md">
				Nested
			</Text>
			<Grid gap={16}>
				<Grid.Row>
					<Grid.Column style={styles.column} width={100} fullHeight>
						<Text>100px, fullHeight</Text>
					</Grid.Column>
					<Grid.Column>
						<Grid gap={16}>
							<Grid.Row>
								<Grid.Column style={styles.column} width={2}>
									<Text>2</Text>
								</Grid.Column>
								<Grid.Column style={styles.column} width={5} offset={3}>
									<Text>5, offset 3</Text>
								</Grid.Column>
								<Grid.Column style={styles.column} width={3} offset={2}>
									<Text>2, of 3</Text>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column style={styles.column}>
									<Text>auto</Text>
								</Grid.Column>
								<Grid.Column style={styles.column}>
									<Text>auto</Text>
								</Grid.Column>
								<Grid.Column style={styles.column}>
									<Text>auto</Text>
								</Grid.Column>
								<Grid.Column style={styles.column}>
									<Text>auto</Text>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Grid.Column>
					<Grid.Column style={styles.column} width={100} fullHeight>
						<Text>100px, fullHeight</Text>
					</Grid.Column>
				</Grid.Row>
			</Grid>

			<Text variant="h3" mt="lg" mb="md">
				Vertical aligned
			</Text>
			<Grid gap={16}>
				<Grid.Row>
					<Grid.Column style={styles.column} centered>
						<Text centered>auto, centered</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} centered>
						<Text>auto</Text>
						<Text>text</Text>
						<Text>text</Text>
						<Text>text</Text>
						<Text>text</Text>
						<Text>text</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} centered>
						<Text>auto</Text>
						<Text>text</Text>
						<Text>text</Text>
					</Grid.Column>
					<Grid.Column style={styles.column} fullHeight>
						<Text>fullHeight</Text>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Stack>
	);
}
