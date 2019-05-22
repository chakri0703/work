app.controller('loginCtrl',function($scope,serviceLogin)
{
    $scope.click=function()
    {
        var data={
            'email':$scope.Email,
            'password':$scope.password
        }
        console.log(data);
        serviceLogin.click(data,$scope);
    }
})