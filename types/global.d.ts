declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production';
    readonly BUILD_GIT_SHA: string;
    readonly BUILD_INFO: string;
  }
}
