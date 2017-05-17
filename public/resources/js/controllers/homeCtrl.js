app.controller('homeCtrl', function($scope) {
    function getClanInfo() {
        $.ajax({
            url: "https://api.clashofclans.com/v1/leagues",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImZhZWViODgxLWI3MTktNDFmZS05NDUyLTFmYTJkMjhmYzdjMyIsImlhdCI6MTQ5MDIxODYyNiwic3ViIjoiZGV2ZWxvcGVyL2UyNGZmY2I0LTA2MTAtYTY4Mi1mMjk0LWEyNTZlYWJmNjAwMSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjU0Ljg0LjEzOC42MCIsIjU0Ljg0LjY2LjEwOSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.5dV6hjlYzAKxty8UZnU4smCxF4U0aRi7cZuzEOXKQHYJO7xh5aTw3vqMyZ9ThsshYIi7Dxa5ztHIzV_92tFuew");
            },
            type: 'GET',
            dataType: 'jsonp',
            contentType: 'application/json',
            processdata: false,
            success: function (data) {
                console.log(JSON.stringify(data));
                console.log('\nhi');
            },
            error: function () {
                console.log("request error");
            }

        });
    }
    getClanInfo();
});