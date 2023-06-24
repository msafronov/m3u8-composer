import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      '@validator': path.join(__dirname, './src/validator'),
      '@parser': path.join(__dirname, './src/parser'),
      '@tags': path.join(__dirname, './src/tags'),
      '@tags-validation': path.join(__dirname, './src/tags-validation'),
      '@interpreter': path.join(__dirname, './src/interpreter'),
      '@schema': path.join(__dirname, './src/schema'),
    },
  },
});
