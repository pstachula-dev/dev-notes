import { createEffect, createSignal } from "solid-js";
import type { AppType } from "@app/be";
import { hc } from "hono/client";

import "./App.css";
import { supabase } from "./services/supabase/client";
import { createStore } from "solid-js/store";
import { A } from "@solidjs/router";

const client = hc<AppType>(import.meta.env.VITE_API_URL);

function App() {
	const [count, setCount] = createSignal(0);
	const [form, setForm] = createStore({ email: "", password: "" });

	createEffect(async () => {
		console.log(await supabase.auth.getUser());
	});

	return (
		<>
			<h1>Vite + Solid</h1>

			<h1>Login</h1>

			<A href="/users">Users</A>

			<input
				onChange={(e) => {
					setForm("email", e.target.value);
				}}
				type="text"
				placeholder="Type here"
				class="input input-bordered w-full max-w-xs"
			/>
			<input
				onChange={(e) => {
					setForm("password", e.target.value);
				}}
				type="password"
				placeholder="Type here"
				class="input input-bordered w-full max-w-xs"
			/>

			<button
				type="button"
				class="btn btn-primary"
				onClick={async () => {
					const { data, error } = await supabase.auth.signInWithPassword(form);
					console.log(data, error);
				}}
			>
				Login
			</button>

			<hr />

			<div class="card">
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
