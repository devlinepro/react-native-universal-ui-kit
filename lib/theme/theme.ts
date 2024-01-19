import { typography, TypographyProps } from "./tokens/typography";
import { colors, ColorType } from "./tokens/colors";
import { sizes, SizeType } from "./tokens/sizes";
import { spacing } from "./tokens/spacing";
import { clone, merge } from "lodash";
import { Platform } from "react-native";

export interface ThemeProps {
	gridSize: number;
	typography: TypographyProps;
	colors: Record<ColorType, string>;
	spacing: Record<SizeType, number>;
	sizes: Record<SizeType, number>;
}

export interface ThemeOverrides {
	all?: Partial<ThemeProps>;
	ios?: Partial<ThemeProps>;
	android?: Partial<ThemeProps>;
	web?: Partial<ThemeProps>;
	windows?: Partial<ThemeProps>;
	macos?: Partial<ThemeProps>;
}

class Theme {
	public gridSize = 16;
	public typography: ThemeProps["typography"];
	public colors: ThemeProps["colors"];
	public spacing: ThemeProps["spacing"];
	public sizes: ThemeProps["sizes"];
	public isMobile = Platform.OS === "ios" || Platform.OS == "android";

	constructor() {
		this.typography = clone(typography);
		this.colors = clone(colors);
		this.spacing = clone(spacing);
		this.sizes = clone(sizes);
	}

	public override(params: ThemeOverrides) {
		["all", "ios", "android", "web", "windows", "macos"].forEach((index) => {
			let _params = params[index];
			if (_params && (index === "all" || Platform.OS === index)) {
				if (_params.gridSize) {
					this.gridSize = _params.gridSize;
				}
				if (_params.typography) {
					this.typography = merge(this.typography, _params.typography);
				}
				if (_params.colors) {
					this.colors = merge(this.colors, _params.colors);
				}
				if (_params.spacing) {
					this.spacing = merge(this.spacing, _params.spacing);
				}
				if (_params.sizes) {
					this.sizes = merge(this.sizes, _params.sizes);
				}
			}
		});
	}
}

export const theme = new Theme();
