import {runServer} from './src/server/app'
import db from './src/server/database'
runServer()

db.connect()
