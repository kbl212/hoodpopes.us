app.controller('cocCtrl', function ($scope, $http) {
    function getClanInfo() {
        $.ajax({
            url: "https://api.clashofclans.com/v1/clans/%232G88GQCV",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijg1MTA1M2JmLTlhNGItNDY3Zi1iNWNmLWIxN2EyYmIwOTljMiIsImlhdCI6MTQ5MDIwNjk0MCwic3ViIjoiZGV2ZWxvcGVyL2UyNGZmY2I0LTA2MTAtYTY4Mi1mMjk0LWEyNTZlYWJmNjAwMSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEwNy4yMC4xNTEuMjMiXSwidHlwZSI6ImNsaWVudCJ9XX0.yqX51HxICm9vAkJ6HEuYeuj62KmRzMSQqZu9czU9U_GfcSsAmorfOgYGx5xDAbRGtOULREtPML0wI8QRn4s7oQ");
            },
            type: 'GET',
            dataType: 'jsonp',
            contentType: 'application/json',
            processdata: false,
            success: function (data) {
                console.log(JSON.stringify(data));
            },
            error: function () {
                console.log("request error");
            }

        });
    }
    getClanInfo();
});
