import mysql from "mysql"


const db = mysql.createConnection({
    host: "bb9eejswmjcw3djbulc3-mysql.services.clever-cloud.com",
    user: "urbmudqlnnp7fqcy",
    password: "qBcPnVq7WTsUI6BVMXOY",
    database: "bb9eejswmjcw3djbulc3",
})

export default db