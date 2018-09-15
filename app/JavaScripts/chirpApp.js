var app = angular.module('chirpApp',[]);

app.controller('mainController',function($scope){
	$scope.posts= [];
	$scope.newPost ={created_by:' ', text:' ', created_at:' '};

	$scope.post =function(){
		//date of new chirp created
		$scope.newPost.created_at = Date.now(); 

		//pushed to the posts
		$scope.posts.push($scope.newPost);

		//again ready to take new chirp
		$scope.newPost ={created_by:' ', text:' ', created_at:' '};		
	};
});

app.controller('authController',function($scope){
	$scope.user ={username:' ' , password: ' '};
	$scope.error_message = ' ';

	/*postService.getAll().success(function(data){
		$scope.posts=data;
	});*/

	$scope.login = function(){
    //placeholder until authentication is implemented
    $scope.error_message = 'Login request for ' + $scope.user.username;
  	};

  	$scope.register = function(){
    //placeholder until authentication is implemented
    $scope.error_message = 'Registeration request for ' + $scope.user.username;
  	};
});