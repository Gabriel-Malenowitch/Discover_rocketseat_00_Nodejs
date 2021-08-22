const express = require('express') //18:16
const routes = express.Router()    
const VIEWS = __dirname + "/views/"
const profile = {
  name: "Gabriel",
  avatar: "https://avatars.githubusercontent.com/u/56513919?s=60&v=4",
  "monthly-budget": 3000,
  "days-per-week": 5,
  "hours-per-day": 5,
  "vacation-per-year": 4
}

routes.get('/', (req,res)=>res.render(VIEWS+"index"))  
routes.get('/job', (req,res)=>res.render(VIEWS+"job"))  
routes.get('/job/edit', (req,res)=>res.render(VIEWS+"job-edit"))  
routes.get('/profile', (req,res)=>res.render(VIEWS+"profile", { profile: profile }))  

// server.get("/",(request, response)=>{
//   return response.render(__dirname+"/index.html")
// })
module.exports = routes;
