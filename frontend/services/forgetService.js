app.service('forgetService',function($http,$location)
{

        this.submit(data,$scope)
        {
            $http({
                method:'GET',
                url:'http://localhost:3000/forget',
                data:data
            }).then(
                function sucesscallBack(res){
                    console.log("forget success  from client side");

                    localStorage.setItem(name);

                    $location.path('/reset');
                },

                function errorCallBack(err)
                {
                    alert("Invalid email");

                    console.log("Invalid Details")


                    console.log(err);

                    $scope.loginMessage="Invalid details";
                    
                    $location.path('/forget')
                }
            )
        }
})