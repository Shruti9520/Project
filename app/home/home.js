'use strict';
angular.module('Project.home',['ngRoute','firebase'])

.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/home',{
        templateUrl:'home/home.html',
            controller:'HomeCtrl'
    });
}])

.controller('HomeCtrl' ,['$scope','$firebaseAuth',function($scope,$firebaseAuth){
   
    $scope.signIn=function(){
<<<<<<< HEAD
        var email=$scope.email;
=======
        var username=$scope.email;
>>>>>>> 2496cb67f61abad955a0baded3db2e600550321f
        var password=$scope.password;
        var auth= $firebaseAuth();
        
        auth.signInWithEmailAndPassword(email , password).then(function(){
           alert("User Login Successful");
        }).catch(function(){
            console.log(error);
        });
    }
}])
