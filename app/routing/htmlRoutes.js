app.get("/survey", function(req, res){
    res.sendFile("survey.html")
})

app.get("*", function(req, res){
    res.sendFile("home.html")
})