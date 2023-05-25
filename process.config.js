module.exports = {
  apps: [
    {
      name: "reja-app",
      cwd: "./", //bu qayerdan izlasin degani
      script: "./server.js", //server.jsni izlasin
      watch: false, //uzgarishlarni tomosha qilsinmi
      //   env_production: {
      //     NODE_ENV: "PRODUCTION",
      //   },
      //   env_development: {
      //     NODE_ENV: "DEVELOPMENT",
      //   },
      instances: "max", //nechta run qberay degani
      exec_mode: "cluster",
    },
  ],
};
