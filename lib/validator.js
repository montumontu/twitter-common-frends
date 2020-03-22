


//To validate query in request body


exports.validateUsers = async function (data) {

    if (data.username1 && data.username2)
        return true
    return false

}