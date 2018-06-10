db.version()
db.help()
db.getCollection("test").insertOne({a:10, b:true})

show dbs
use local
show collections

use myDb
db.createCollection("first")
db.createCollection("second")
db.createCollection("third")
show collections

db.dropDatabase()
db.getCollection("first").drop()
db.second.drop()

db.getCollection("first").insert({})
db.first.find()
db.first.insert([ {}, {}, {}])
db.first.remove({})