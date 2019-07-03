// Update with your config settings.

module.exports = {
    development: {
      client: 'pg',
      
      connection: 'postgres://aouhgoinjndwvn:687dfce950901be9b7fca25bbdf716269952e5bcba60976d83c1e5fc8efbad6a@ec2-54-75-224-168.eu-west-1.compute.amazonaws.com:5432/dbmpatb09amckh',

      migrations: {
        directory: __dirname + '/db/migrations',
      },
      seeds: {
        directory: __dirname + '/db/seeds',
      },
    },
    production: { 
      client: 'pg', 
      connection: 'postgres://aouhgoinjndwvn:687dfce950901be9b7fca25bbdf716269952e5bcba60976d83c1e5fc8efbad6a@ec2-54-75-224-168.eu-west-1.compute.amazonaws.com:5432/dbmpatb09amckh',
      migrations: {
        directory: __dirname + '/db/migrations',
      },
      seeds: {
        directory: __dirname + '/db/seeds',
      },
    }
  };


