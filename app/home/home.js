'use strict';
angular.module('Project.home',['ngRoute','firebase'])

.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/home',{
        templateUrl:'home/home.html',
            controller:'HomeCtrl'
    });
}])

.controller('HomeCtrl' ,['$scope','$firebaseAuth',function($scope,$firebaseAuth){



    $scope.signIn=function(er){

        var email= $scope.email;
        var password=$scope.password;
        console.log(email+"   "+ password);
        var auth= $firebaseAuth();

        firebase.auth().signInWithEmailAndPassword(email , password).then(function(){
           alert("User Login Successful");
        }).catch(function(){
            //console.log(error);
            alert("Error in username or password! try again..!");
        });
    }
}])
