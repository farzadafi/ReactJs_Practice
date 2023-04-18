import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import sass from 'sass';

export default defineConfig({
    plugins: [vue(), {
        name: 'sass',
        preprocess: {
            // Use `dart-sass`
            scss: {
                implementation: sass,
            },
            // Add variables and mixins to all style blocks
            // that are processed by the `vue-loader`
            'scss': {
                additionalData: '@import "./src/style/variables.scss";@import "./src/style/styles.scss";',
            },
        },
    }],
});
