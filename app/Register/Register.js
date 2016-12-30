'use strict';
angular.module('Project.Register',['ngRoute','firebase'])

.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/Register',{
        templateUrl:'Register/Register.html',
            controller:'RegisterCtrl'
    });
}])
.controller('RegisterCtrl',['$scope','$firebaseAuth','$location',function($scope,$firebaseAuth,$location){
    
    //$scope.username = CommonProp.getUser();
    $scope.signUp= function(er){
        var email= $scope.email;
        var password = $scope.password;
         console.log(email+"   "+ password);
        if(email && password){
            var auth= $firebaseAuth();
            firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
                alert("User Sucessfully created");
               
                $location.path('/home');
            }).catch(function(error){
                $scope.ermsg= true;
                $scope.errormessage = error.message;
            });
        }
    }
}])
