function UserController ($http, $scope) {
	
	function Login(){
		this.email = "";
		this.pwd = "";
	}

	$scope.login = new Login();

	$scope.checkLogin = function()
	{

	}	
}