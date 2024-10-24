// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/UseContext_ref/", // Ensure the base path is correct
    plugins: [react()],
});