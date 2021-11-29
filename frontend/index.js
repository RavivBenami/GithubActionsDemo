const app = require('express')

app.get('/',(req,res)=>
rep.json({message:'Docker is easy'}));

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log('app listening on port 3000'));
