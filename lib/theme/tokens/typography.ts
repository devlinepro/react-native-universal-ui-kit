export type FontType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "bodyLarge" | "bodySmall";

export interface TypographyProps {
	size: Record<FontType, number>;
	lineHeight: Record<FontType, number>;
}

export const typography: TypographyProps = {
	size: {
		h1: 28,
		h2: 24,
		h3: 22,
		h4: 18,
		h5: 16,
		h6: 16,
		body: 14,
		bodyLarge: 16,
		bodySmall: 13,
	},
	lineHeight: {
		h1: 42,
		h2: 36,
		h3: 32,
		h4: 26,
		h5: 24,
		h6: 24,
		body: 18,
		bodyLarge: 20,
		bodySmall: 16,
	},
};
