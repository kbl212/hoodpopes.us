app.controller('homeCtrl', function ($scope, $http) {
    $scope.cocApiKey = config.cocApiKey;

    /*function getClanInfo() {
        $.ajax({
            url: "https://api.clashofclans.com/v1/leagues",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', $scope.cocApiKey);
            },
            type: 'GET',
            dataType: 'jsonp',
            contentType: 'application/json',
            processdata: false,
            success: function (data) {
                console.log("SUCCESS");
                console.log(JSON.stringify(data));
            },
            error: function () {
                console.log("request error...");
            }

        });
    }
    getClanInfo();*/

    $scope.getClanInfoV2 = function() {
        $http({
            method: 'GET',
            url: 'https://api.clashofclans.com/v1/locations',
            headers: {
                'Authorization': $scope.cocApiKey
            },

        }).then(function successCallback(response) {
            console.log('SUCCESS...', response);
        }, function errorCallback(response) {
            console.log('NOPE...', response);
        });
    }

    $scope.getClanInfoV2();
});
