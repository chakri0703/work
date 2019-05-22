app.service('resetService',function($http,$location)
{

        this.submit(data,$scope)
        {
            $http({
                method:'PUT',
                url:'http://localhost:3000/reset',
                data:data
            }).then(
                function sucesscallBack(res){
                    console.log("reset Sucess from client side");
                    
                    localStorage.setItem(name);

                    $location.path('/login');
                },

                function errorCallBack(err)
                {
                    alert("login failed");

                    console.log("login failed")


                    console.log(err);

                    $scope.loginMessage="Invalid details";
                    
                    $location.path('/reset')
                }
            )
        }
})