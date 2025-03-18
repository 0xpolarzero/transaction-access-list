import { vitePluginTevm } from "tevm/bundler/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [vitePluginTevm(), tsconfigPaths()],
  test: {
    testTimeout: 60_000,
    deps: {
      inline: ['tevm', '@shazow/whatsabi', 'viem']
    }
  },
  resolve: {
    alias: {
      'tevm': 'tevm',
      'viem': 'viem'
    }
  }
});