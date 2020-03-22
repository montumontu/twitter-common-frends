
let appendData = document.querySelector('.draw_table');




$("form#data").submit(function (e) {
    e.preventDefault();

    let user1 = document.querySelector('.input1').value;
    let user2 = document.querySelector('.input2').value;
    

    $.ajax({
        url: `https://floating-sierra-31825.herokuapp.com/twitter/mutual/friends/get?username1=${user1}&username2=${user2}`,
        type: 'GET',
        crossDomain: true,
        contentType: "application/json",
        success: function (data) {
            alert('Hurray, Request Processed Successfully');
            var trHTML = '<tr> <th>user Id</th> <th>User Name</th> <th>User screen name</th></tr>'
            $.each(data.response, function (i, item) {
                trHTML += '<tr><td>' + item.id + '</td><td>' + item.name + '</td><td>' + item.screen_name + '</td><<td>' + item.followers_count + '</td></tr>';
            });
            $(appendData).html(trHTML)

        },
        error: function (error) {
            console.log("error", error)
            alert( error);
            document.querySelector('.error').innerHTML = "Error - " + error.responseJSON.response.error.message

        },
        cache: false,
        processData: false
    });
});



