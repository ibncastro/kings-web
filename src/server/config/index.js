module.exports = {
    "development": {
        "username": "root",
        "password": "mysql_",
        "database": "kuc",
        "host": "localhost",
        "dialect": "mysql",
        "operatorsAliases": false,
        "pool": {
            "max": 5,
            "min": 0,
            "acquire": 30000,
            "idle": 1000,
        }
    },
    "production": {
        "host": process.env.host,
        "username": process.env.username,
        "password": process.env.password,
        "database": process.env.database,
        "logging": "false",
        "dialect": "mysql",
        "operatorsAliases": false,
        "pool": {
            "max": 5,
            "min": 0,
            "acquire": 30000,
            "idle": 1000,
        }
    }
}