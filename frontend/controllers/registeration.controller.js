app.controller('registerCtrl',function($scope,registerService)
{
    $scope.submit=function()
    {
        var data={
            'name':$scope.name,
            'email':$scope.email,
            'password':$scope.password
        }
        console.log(data);
        registerService.submit(data);
    }
})