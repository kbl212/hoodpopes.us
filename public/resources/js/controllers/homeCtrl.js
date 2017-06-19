app.controller('homeCtrl', function($scope) {
    $scope.cocApiKey = config.cocApiKey;
    function getClanInfo() {
        $.ajax({
            url: "https://api.clashofclans.com/v1/leagues",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization: Bearer ', $scope.cocApiKey);
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
                console.log("request error");
            }

        });
    }
    getClanInfo();
});