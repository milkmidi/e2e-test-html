import { execSync } from 'child_process';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dayjs from 'dayjs';
import path from 'path';

const TIMEZONE_SHIFT_MS =
  new Date('2016/01/01').getTime() - new Date('2016-01-01T00:00:00+08:00').getTime();
const getDateNow = () => new Date(Date.now() + TIMEZONE_SHIFT_MS);
const getBuildTimestamp = (format = 'YYYY-MM-DD HH:mm:ss') => {
  return dayjs(getDateNow()).format(format);
};

const getGitSha = () => {
  let gitSha = ''; // 抓目前 git HEAD sha
  try {
    gitSha = execSync('git rev-parse --short HEAD').toString().trim();
  } catch (error) {
    console.log(error);
  }
  return gitSha;
};

//

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const DEV_MODE = mode === 'development';
  const buildTimestamp = getBuildTimestamp();
  const gitSha = getGitSha();
  return {
    base: './',
    plugins: [vue()],
    server: {
      port: 3000,
    },
    define: {
      'process.env.PUBLIC_PATH': JSON.stringify(DEV_MODE ? '' : '/e2e-test-html'),
      'process.env.NODE_ENV': JSON.stringify(mode),
      'process.env.BUILD_INFO': JSON.stringify(`${buildTimestamp}-${gitSha}`),
      'process.env.BUILD_TIMESTAMP': JSON.stringify(buildTimestamp),
      'process.env.BUILD_GIT_SHA': JSON.stringify(gitSha),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      rollupOptions: {
        // https://rollupjs.org/guide/en/#input
        input: {
          main: './src/main.ts',
          'my-header': './src/components/my-header.ts',
        },
        output: {
          entryFileNames: 'assets/[name].min.js',
          chunkFileNames: 'assets/[name].chunk.min.js',
          assetFileNames: 'assets/[name].min[extname]',
        },
      },
    },
  };
});
