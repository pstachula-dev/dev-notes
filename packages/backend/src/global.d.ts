export declare global {
	namespace NodeJS {
		interface ProcessEnv {
			DB_AUTH_TOKEN: string;
			DB_URL: string;
			NODE_ENV: "development" | "production";
		}
	}
}
