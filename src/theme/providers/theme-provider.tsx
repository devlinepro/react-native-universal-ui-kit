import { ReactElement } from "react";
import { theme, ThemeOverrides, ThemeProps } from "../theme";

export function ThemeProvider({
	children,
	theme: themeProps,
}: {
	children: ReactElement | ReactElement[];
	theme?: ThemeOverrides;
}) {
	theme.override(themeProps || {});

	return children;
}
