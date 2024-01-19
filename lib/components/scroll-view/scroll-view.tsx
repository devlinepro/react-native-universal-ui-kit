import { ScrollView as ScrollViewNative } from "react-native";
import { forwardRef, useEffect, useRef } from "react";

const ScrollView = forwardRef(function ({ children, ...props }, ref) {
	const containerRef = useRef<ScrollViewNative>();
	const api = useRef({
		scrollTop: () => {
			if (containerRef.current) {
				containerRef.current.scrollTo(0);
			}
		},
	});

	useEffect(() => {
		if (ref && !ref.current) {
			ref.current = api.current;
		}
	}, [ref, api]);

	return (
		<ScrollViewNative ref={containerRef} {...props}>
			{children}
		</ScrollViewNative>
	);
});

export { ScrollView };
