const ENV_PATH = '/etc/landing/.env';

module.exports = {
  apps: [
    {
      name: 'landing',
      script: 'npm',
      args: 'start',
      env: {
        PM2_SERVE_PORT: 8081,
        PM2_HOME: '/var/www'
      }
    }
  ],
  deploy: {
    production: {
      user: 'alexiuscrow',
      host: '10.156.0.3',
      ref: 'origin/main',
      repo: 'git@landing_deploy:Geoscells/geoscells-landing.git',
      path: '/home/landing',
      'post-deploy': `npm install && env-cmd -f ${ENV_PATH} npm run build && PM2_HOME=/var/www pm2 reload ecosystem.config.js --env production`,
      key: '~/.ssh/geoscells'
    }
  }
};
