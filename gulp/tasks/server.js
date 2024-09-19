export const server = (done) => {
  app.plugins.browsersync.init({
    server: {
      baseDir: "klymenko",
    },
    notify: false,
    port: 3000,
  });
};
