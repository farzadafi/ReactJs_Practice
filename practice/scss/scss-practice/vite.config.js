import { defineConfig } from 'vite';
import sass from 'sass';

export default defineConfig({
    plugins: [{
        name: 'sass',
        preprocess: {
            'scss': {
                additionalData: '@import "./src/style/variables.scss";@import "./src/style/styles.scss";',
            },
        },
    }],
});
