// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/mu419/", // Ensure the base path is correct
    plugins: [react()],
});