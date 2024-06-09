export declare global {
	interface ImportMetaEnv {
		VITE_SUPABASE_URL: string;
		VITE_SUPABASE_ANON_KEY: string;
		NODE_ENV: "development" | "production";
	}
}
