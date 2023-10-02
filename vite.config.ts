import { execSync } from 'child_process';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dayjs from 'dayjs';
import path from 'path';

const TIMEZONE_SHIFT_MS = new Date('2016/01/01').getTime() - new Date('2016-01-01T00:00:00+08:00').getTime();
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
export default defineConfig({
  base: './',
  plugins: [vue()],
  server: {
    port: 3000,
  },
  define: {
    'process.env.BUILD_INFO': JSON.stringify(`${getBuildTimestamp()}-${getGitSha()}`),
    'process.env.BUILD_TIMESTAMP': JSON.stringify(getBuildTimestamp()),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
