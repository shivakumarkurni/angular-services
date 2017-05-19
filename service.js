app.factory("CustomFactory",function(){
 return "This is Factory Service";
})
app.config(["name",function(name){
  //console.log("This is config:"+AppName)
  //console.log("This is config value:"+AppVersion)
  name="shiva"
    console.log("This is config value:"+name)


}])

app.constant("name","shiva")
app.value("AppVersion","1.0.0")