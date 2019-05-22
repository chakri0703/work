app.service('registerService',function($http,$location)
{

        this.submit(data,$scope)
        {
            $http({
                method:'POST',
                url:'http://localhost:3000/register',
                data:data
            }).then(
                function sucesscallBack(res){
                    console.log("register Sucess from client side");
                    var name=res.data.message[0].name;

                    localStorage.setItem(name);

                    $location.path('/dashboard');
                },

                function errorCallBack(err)
                {
                    alert("login failed");

                    console.log("login failed")


                    console.log(err);

                    $scope.loginMessage="Invalid details";
                    
                    $location.path('/register')
                }
            )
        }
})