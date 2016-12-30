'use strict';
angular.module('Project.home',['ngRoute','firebase'])

.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/home',{
        templateUrl:'home/home.html',
            controller:'HomeCtrl'
    });
}])

.controller('HomeCtrl' ,['$scope','$firebaseAuth','$location','CommonProp',function($scope,$firebaseAuth,$location,CommonProp){

 $scope.username = CommonProp.getUser();

    if($scope.username){
        $location.path('/Welcome');
    }
    $scope.signIn=function(er){

        var email= $scope.email;
        var password=$scope.password;
        console.log(email+"   "+ password);
        var auth= $firebaseAuth();

        firebase.auth().signInWithEmailAndPassword(email , password).then(function(){
            
           alert("User Login Successful");
             CommonProp.setUser($scope.email);
            $location.path('/Welcome');
        
        }).catch(function(){
            //console.log(error);
            alert("Error in username or password! try again..!");
        });
    }
}])
.service('CommonProp',['$location','$firebaseAuth',function($location,$firebaseAuth){
   var user = "";
    var auth = $firebaseAuth();
 return{
      getUser: function(){
          if(user==""){
              user=localStorage.getItem("useremail")
          }
            return user;
       },
      setUser: function(value){
          localStorage.setItem("useremail",value);
            user = value;
      },
     logoutUser:function(){
         auth.$signOut().then(function(){
             console.log("Logged Out Succesfully");
             user="";
             localStorage.removeItem('useremail');
             $location.path('/home');
         });
     }
        
     };
}]);
