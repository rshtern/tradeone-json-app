(function () {
	'use strict';

	var app = angular.module('companyapp', ['ngRoute']);
	
	app.config(function($routeProvider){
		$routeProvider
			.when('/',{
				redirectTo: '/comapnies'
			})
			.otherwise({
				redirectTo: '/'
			});
	});

	app.factory('companiesData', function($http){
		return $http.get('data/company.json');
	});
	
	app.controller('CompCtrl', function($scope, $routeParams, companiesData){
		companiesData
			.success(function(data, status){
				$scope.companiesData = data.Companies;
				console.log($scope.companiesData);
			})
			.error(function(data, status){
				console.error(status, data);
			});
		$scope.changeToIl = function (){
			$scope.heb = true;
		};
		$scope.changeToEng = function (){
			$scope.heb = false;
		};
	});

}());

    