var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'IdeasController',
		templateUrl: ''
	})
	.when('/ideas', {
		templateUrl: 'views/all_ideas.html'
	})
	.when('/ideas/add',{
        templateUrl: 'views/add_ideas.html'
		
	})
	.when('/ideas/edit',{
        templateUrl: 'views/edit_ideas.html',
        
    })
    .when('/ideas/delet',{
        templateUrl: 'views/delete_ideas.html',
        controller:'IdeasController'
	})
	.otherwise({
		redirectTo: '/'
    });
  
});