app.controller('cocCtrl', function ($scope, $http) {
    function getClanInfo() {
        $.ajax({
            url: "https://api.clashofclans.com/v1/leagues",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjkyOWFjODFjLTZjOTQtNDRjZS04ZDJmLWM0OWFmYTkzOTY0ZSIsImlhdCI6MTQ5MDEyNTg2OSwic3ViIjoiZGV2ZWxvcGVyL2UyNGZmY2I0LTA2MTAtYTY4Mi1mMjk0LWEyNTZlYWJmNjAwMSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE2Mi4yNTUuMTE5LjI0OCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.W-LcnlxLbn37J5YusEWmrpTbbBjKhnwUjwTmUUbD9MdfJqz3-pCtsoJFO6iOBZU5315E8qLIhEmqF2NJ4D0JGw");
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
                console.log(xhr.statusText);
            }

        });
    }
    getClanInfo();
});
