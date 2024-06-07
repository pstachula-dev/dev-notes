import { createSignal } from "solid-js";
import type { AppType } from "@app/be";
import { hc } from "hono/client";

import "./App.css";

const client = hc<AppType>("http://localhost:2137/");

function App() {
	const [count, setCount] = createSignal(0);

	return (
		<>
			<h1>Vite + Solid</h1>
			<p class="py-8">xxx</p>
			<div class="card">
				<button type="button" class="btn btn-primary">
					Primary
				</button>
				<button
					type="button"
					onClick={async () => {
						setCount((count) => count + 1);
						const res = await client.users.$get();
						const users = await res.json();
						console.log(users);
					}}
				>
					count is {count()}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p class="read-the-docs">
				Click on the Vite and Solid logos to learn more
			</p>
		</>
	);
}

export default App;
