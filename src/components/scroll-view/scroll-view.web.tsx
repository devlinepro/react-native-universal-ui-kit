import { Scrollbar } from "react-scrollbars-custom";
import { forwardRef, useEffect, useRef } from "react";

const ScrollView = forwardRef(function ({ children, ...props }, ref) {
	const containerRef = useRef<HTMLElement>();
	const api = useRef({
		scrollTop: () => {
			if (containerRef.current) {
				containerRef.current.scrollerElement.scrollTo({
					behavior: "smooth",
					top: 0,
				});
			}
		},
	});

	useEffect(() => {
		if (ref && !ref.current) {
			ref.current = api.current;
		}
	}, [ref]);

	return (
		<Scrollbar
			ref={containerRef}
			wrapperProps={{
				style: {
					scrollBehavior: "smooth",
				},
			}}
			thumbYProps={{
				style: {
					background: "rgba(0,0,0,.15)",
				},
			}}
			trackXProps={{
				style: {
					height: 6,
					width: "calc(100% - 4px)",
					bottom: 2,
					left: 2,
				},
			}}
			trackYProps={{
				style: {
					background: "transparent",
					right: 2,
					top: 2,
					width: 6,
					bottom: 2,
					height: "calc(100% - 4px)",
				},
			}}
			{...props}
		>
			{children}
		</Scrollbar>
	);
});

export { ScrollView };
