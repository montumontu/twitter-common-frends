const twitter = require( 'twitter' ),
    config = require( 'config' ),
    twtConfig = config.get( 'twitter' ),
    lo = require( 'lodash' ),

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

    async getMutualFriends(user_list) {

        const friendListCall = [Users.getFriendList( user_list.username1 ), Users.getFriendList( user_list.username1 ) ],
    
            [ friendList1, friendList2 ] = await Promise.all( friendListCall ),
    
            mutualFriend = friendList1.filter(o1 => friendList2.some(o2 => o1.id === o2.id));
    
        return mutualFriend
    }
    
    static async getFriendList( username ) {
        const count = 200,
            url = `https://api.twitter.com/1.1/friends/list.json??screen_name=${username}&count=${count}`;
    
        return new Promise( function ( resolve, reject ) {
            twtClient.get( url, function ( error, twt, response ) {
                if ( error ) {
                    console.log( "Error while calling Twitter api", error )
                    reject( error )
                }
                if ( twt.users && Array.isArray( twt.users ) && twt.users.length ) {
                    const userDetails = lo.map( twt.users, item => lo.pick( item, [ 'id', 'name', 'screen_name', 'followers_count'] ) );
                    resolve( userDetails )
                }
            } );
        } )
    }

}

module.exports = Users;