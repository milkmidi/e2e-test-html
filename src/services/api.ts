export const postData = ():Promise<boolean> => new Promise((resolve) => {
  setTimeout(() => {
    resolve(true);
  }, 1500);
});
