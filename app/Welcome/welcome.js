'use strict';
angular.module('Project.Welcome',['ngRoute','firebase'])
.config(['$routeProvider' , function($routeProvider){
    $routeProvider.when('/Welcome',{
        templateUrl : 'Welcome/welcome.html' ,
        controller : 'WelcomeCtrl'
        
    });
}])
.controller('WelcomeCtrl' ,['$scope','CommonProp','$firebaseArray','$firebaseObject','$location',function($scope,CommonProp,$firebaseArray,$firebaseObject,$location){
    
    $scope.username = CommonProp.getUser();
    
    if(!$scope.username){
        $location.path('/home');
    }
    var ref = firebase.database().ref().child('Articles');
    $scope.articles = $firebaseArray(ref);
   // console.log($scope.articles);
    //console.log($scope.articles);
    $scope.editpost= function(id){
        var ref= firebase.database().ref().child('Articles/' + id);
        $scope.editpostData= $firebaseObject(ref);
        //console.log($scope.editpostData);
    };
    
    $scope.updatepost = function(id){
        var ref= firebase.database().ref().child('Articles/' + id);
        ref.update({
            title: $scope.editpostData.title ,
            post: $scope.editpostData.post
        }).then(function(ref){
            console.log(ref);
        },function(error){
            console.log(error);
        });
    };
    
    $scope.deleteCnf = function(x){
        $scope.deleteArticle = x;
       
    }
    
    $scope.deletepost = function(deleteArticle){
        $scope.articles.$remove(deleteArticle);
       
        $("#deletemodal").modal('hide');
    }
    
    $scope.logout= function(){
        CommonProp.logoutUser();
    }

}])