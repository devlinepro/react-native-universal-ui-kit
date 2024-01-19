import "@expo/metro-runtime";
import registerRootComponent from "expo/build/launch/registerRootComponent";
import { createNavigationContainerRef, NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from "./navigation";
import { useState } from "react";
import { ThemeProvider } from "../lib";

const navigationRef = createNavigationContainerRef();

function App() {
	const [routeName, setRouteName] = useState();

	return (
		<SafeAreaProvider>
			<ThemeProvider>
				<NavigationContainer
					ref={navigationRef}
					onReady={() => {
						setRouteName(navigationRef.getCurrentRoute().name);
					}}
					onStateChange={async () => {
						const previousRouteName = routeName;
						const currentRouteName = navigationRef.getCurrentRoute().name;
						setRouteName(currentRouteName);
					}}
				>
					<Navigation routeName={routeName} />
				</NavigationContainer>
			</ThemeProvider>
		</SafeAreaProvider>
	);
}

registerRootComponent(App);
