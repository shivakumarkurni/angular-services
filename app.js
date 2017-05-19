var app= angular.module("myApp", []);
// app.provider("example",function(){
   var myObj={};
      myObj.name="shiva";
      myObj.lastname="kumar";
      myObj.getName=function(){
      	return this.name+" "+this.lastname;
      }
// app.run(["CustomService",function(CustomService){
//    console.log(CustomService.getCustomerDetails())
//   }])
app.run(["AppName","AppVersion",function(AppVersion,AppName){
  // console.log(AppName)
   console.log("This is run value:"+AppVersion)
   AppName="NodeJS"
 console.log(AppName)

  }])
// app.config(["exampleProvider",function(exampleProvider){
//   console.log(exampleProvider.$get().getName())
// }])

 app.controller("myController",["$scope","CustomFactory","AppName",function($scope,CustomFactory,AppName){
 //console.log("My Controller -Provider:"+example)
 //console.log("My Controller -Provider:"+CustomService.getCustomerDetails())
 //$scope.Custominfo=CustomService.getCustomerDetails();
 //$scope.customerFactoryMessage=CustomFactory
 // console.log(AppName);
 // $scope.constants=AppName
 
   }])