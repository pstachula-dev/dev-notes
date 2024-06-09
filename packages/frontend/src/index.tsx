/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";

import "./index.css";
import App from "./App";
import { Users } from "./Users";
import type { JSX } from "solid-js";

const root = document.getElementById("root");

if (!root) throw new Error("Root element not found");

const Layout = ({ children }: { children?: JSX.Element }) => {
	return (
		<div>
			<h1>Layout</h1>
			{children}
		</div>
	);
};

render(
	() => (
		<Router root={Layout}>
			<Route path="/" component={App} />
			<Route path="/users" component={Users} />
		</Router>
	),
	root,
);
