const ENV_PATH = '/etc/frontend/.env';

module.exports = {
  apps: [
    {
      name: 'landing',
      script: 'serve',
      env: {
        PM2_SERVE_PATH: './build',
        PM2_SERVE_PORT: 8080,
        PM2_SERVE_SPA: 'true',
        PM2_HOME: '/var/www'
      }
    }
  ],
  deploy: {
    production: {
      user: 'alexiuscrow',
      host: '10.156.0.3',
      ref: 'origin/main',
      repo: 'git@frontend_deploy:alexiuscrow/geoscells-landing.git',
      path: '/home/frontend',
      'post-deploy': `npm install --legacy-peer-deps && env-cmd -f ${ENV_PATH} npm run build && PM2_HOME=/var/www pm2 reload ecosystem.config.js --env production`,
      key: '~/.ssh/geoscells'
    }
  }
};
