import express from 'express';
import { engine } from 'express-handlebars';
const app= express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

const studentinf=
[
{
    id: 1,
    name: "ahmed",
    loc: "egypt",
},
{
    id:2,
    name:"mhmd",
    loc:"usa",
},
{
    id:3,
    name:"ali",
    loc:"canda",
},
{
    id:4,
    name:"hassan",
    loc:"Uae",
}
];

const studentfunction =(request , response) =>
{
response.render("students",{layout:false,studentinf:studentinf});
}

app.get('/student' , studentfunction);

app.get("/users",(req,res)=> {
res.send("users") 
})

app.get('/student/:id', (req,res)=> {

    const id=req.params.id;

    const studinf=studentinf.find((item)=>
    {
        return item.id==id;
    })

    console.log(studinf)
    res.render("student",{layout:false,studinf:studinf})

})


app.listen(5000);

