app.service('serviceLogin',function($http,$location)
{

        this.click(data,$scope)
        {
            $http({
                method:'POST',
                url:'http://localhost:3000/login',
                data:data
            }).then(
                function sucesscallBack(res){
                    console.log("logined in from client side");
                    var name=res.data.message[0].name;

                    localStorage.setItem(name);

                    $location.path('/dashboard');
                },

                function errorCallBack(err)
                {
                    alert("login failed");

                    console.log("login failed")


                    console.log(err);

                    $scope.loginMessage="check ur email and password";  
                    $location.path('/login');
                }
            )
        }
})