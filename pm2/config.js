module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps : [
      {
        name: 'app_name',
        script: './app.js',
        env: {
          PLATFORM: 'some_env'
        },
        max_memory_restart: '1G'
      }
    ]
  };
  