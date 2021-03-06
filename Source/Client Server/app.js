angular.module('Presentweather', [])
    .controller('Presentweatherctrl', function($scope, $http) {

        $scope.getWeather = function() {
            var state = document.getElementById("txt_name").value;

            $http.get("http://api.openweathermap.org/data/2.5/weather?q="+state+"&appid=fbab8dddf4d33a619fe023e230baa31d&units=metric").success(function(data) {
                console.log(data);
                temp = data.main.temp;
                humidity = data.main.humidity;
                pressure=data.main.pressure;
                wind = data.wind.speed;
                console.log(temp);
                $scope.currentweather = {
                    html: "Currently "+"temperature:" +temp + "F"+"<br> "+"humidity:"+humidity +"%"+"<br> "+"pressure:" +pressure +"Hg"+"<br>"+"wind:" +wind+"mph"
                }
                $scope.currentIcon = {
                    html: "<img src='" + icon + "'/>"
                }

            })
        }

    });
