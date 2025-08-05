
const express=require ('express');
const mongodb=require('./db'); // Ensure this is the correct path to your db.js file
const notesRouter = require('./routes/notes'); // Or choose a more descriptive name
var cors = require('cors')

mongodb.then(()=>{
    console.log("Database connection established");
})

const app=express();
const port=5000;




app.use(cors())
app.use(express.json());


//Available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.listen(port,()=>{
    console.log(`iNotebook backend listening on port at http://localhost:${port}`);
})






