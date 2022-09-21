import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                ref: resolve(__dirname, 'reference.html'),
                poem: resolve(__dirname, 'poem.html'),
                lua: resolve(__dirname, 'lua/index.html'),
                luaref: resolve(__dirname, 'lua/lua-reference.html'),
                c: resolve(__dirname, 'c/index.html'),
            }
        }
    }
});
