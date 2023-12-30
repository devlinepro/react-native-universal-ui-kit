import { Text } from "../../components/typography/text";
import { Stack } from "../../components/stack/stack";
import { Divider } from "../../components/divider/divider";
import { Grid } from "../../components/grid/grid";
import { List } from "../../components/list/list";
import { ListItem } from "../../components/list/list-item";

export function ListScreen() {
	return (
		<Stack p="lg">
			<Text variant="h1">List</Text>
			<Divider />
			<Grid gap={16}>
				<Grid.Row>
					<Grid.Column>
						<List
							style={{
								backgroundColor: "#eaeaea",
							}}
						>
							<ListItem isHeader>List Header</ListItem>
							<ListItem>Default List Item</ListItem>
							<ListItem chevronLeft>With chevron left</ListItem>
							<ListItem chevronLeft expanded>
								With chevron expanded
							</ListItem>
							<ListItem pad={1}>Nested list item</ListItem>
							<ListItem pad={1} iconLeft="account">
								With icon
							</ListItem>
							<ListItem pad={1} iconRight="account">
								With right icon
							</ListItem>
							<ListItem pad={1} iconAfter="account">
								With icon after text
							</ListItem>
							<ListItem chevronRight>With chevron right</ListItem>
							<ListItem emoji={"🙌🏻"}>With emoji</ListItem>
							<ListItem breadcrumbs="project 1 / projects">With breadcrumbs</ListItem>
							<ListItem counter={12}>With counter</ListItem>
							<ListItem switchControl>With switch</ListItem>
							<ListItem truncateText>
								Truncate long text. Truncate long text. Truncate long text. Truncate long text.Truncate long text.{" "}
							</ListItem>
						</List>
					</Grid.Column>
					<Grid.Column>
						<List
							style={{
								backgroundColor: "#eaeaea",
							}}
						>
							<ListItem isHeader>List Header</ListItem>
							<ListItem>Default List Item</ListItem>
							<ListItem chevronLeft>With chevron left</ListItem>
							<ListItem chevronLeft expanded>
								With chevron expanded
							</ListItem>
							<ListItem pad={1}>Nested list item</ListItem>
							<ListItem pad={1} iconLeft="account">
								With icon
							</ListItem>
							<ListItem pad={1} iconRight="account">
								With right icon
							</ListItem>
							<ListItem pad={1} iconAfter="account">
								With icon after text
							</ListItem>
							<ListItem chevronRight>With chevron right</ListItem>
							<ListItem emoji={"🙌🏻"}>With emoji</ListItem>
							<Divider />
							<ListItem breadcrumbs="project 1 / projects">With breadcrumbs</ListItem>
							<ListItem counter={12}>With counter</ListItem>
							<ListItem switchControl>With switch</ListItem>
							<ListItem truncateText>
								Truncate long text. Truncate long text. Truncate long text. Truncate long text.Truncate long text.{" "}
							</ListItem>
						</List>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Stack>
	);
}
