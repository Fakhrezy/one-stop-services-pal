import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
    //* ganti IP disini
<<<<<<< HEAD
		host: "192.168.100.38",
		port: 5173,
=======
		host: "192.168.20.1",
		port: 8080,
>>>>>>> aff6ad74121c630568522eaf2d6920c70ae8922b
	},
});
