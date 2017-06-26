app.controller('homeCtrl', function ($scope) {
    $scope.cocApiKey = config.cocApiKey;
    console.log($scope.cocApiKey);

    function getClanInfo() {
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
    getClanInfo();

    function getClanInfoV2() {
        $.ajax({
            url: "https://developer.clashofclans.com/v1/leagues",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', $scope.cocApiKey);
            },
            type: 'GET',
            dataType: 'jsonp',
            contentType: 'application/json',
            processdata: false,
            success: function (data) {
                console.log("SUCCESS 2");
                console.log(JSON.stringify(data));
            },
            error: function () {
                console.log("request error 2...");
            }

        });

    }
});
