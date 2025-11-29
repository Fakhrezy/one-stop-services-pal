import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
    //* ganti IP disini
		host: "192.168.20.1",
		port: 8080,
	},
});
