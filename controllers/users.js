const twitter = require( 'twitter' ),
    config = require( 'config' ),
    schema = require( './../lib/validator' ),
    twtConfig = config.get( 'twitter' ),
    lo = require( 'lodash' ),
    user = require( '../modules/users' ).makeObject(),

    twtClient = new twitter( {
        consumer_key: twtConfig.consumer_key,
        consumer_secret: twtConfig.consumer_secret,
        access_token_key: twtConfig.access_token_key,
        access_token_secret: twtConfig.access_token_secret
    } );

class Users {

    constructor() {
        this.my_obj;
    }

    static makeObject() {
        if (!this.my_obj) {
            this.my_obj = new Users();
        }
        return this.my_obj;
    }

    async getMutualFriends( req, res ) {

        try {
            const users = req.query;
            if ( !schema.validateUsers )
                res.status( 400 ).json( {
                    status: false,
                    message: "Request Processed With Error",
                    response: 'Mandatory parameters(usernames) missing'
                } )
            const mutualFriendList = await user.getMutualFriends( users );
            res.status( 200 ).json( {
                status: true,
                message: "Request Processed Successfully",
                response: mutualFriendList
            } );

        } catch ( err ) {
            console.log( "Error while fetching twitter api  response data", err );
            res.status( 500 ).json( {
                status: false,
                message: "Request Unsuccessfull"
            } );
        }
    }
}

module.exports = Users;