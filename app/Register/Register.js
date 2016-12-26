'use restrict';
angular.module('Project.Register',['ngRoute','firebase'])

.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/Register',{
        templateUrl:'Register/Register.html',
            controller:'RegisterCtrl'
    });
}])
.controller('RegisterCtrl',['$scope','$firebaseAuth',function($scope,$firebaseAuth){
    
    $scope.signUp= function(){
        var email= $scope.email;
        var password = $scope.password;
        if(email && password){
            var auth= $firebaseAuth;
            auth.$createUserWithEmailAndPassword(email,password).then(function(){
                console.log("User Sucessfully created");
            }).catch(function(error){
                $scope.ermsg= true;
                $scope.errormessage = error.message;
            });
        }
    }
}])
