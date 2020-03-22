/*-----------------------Mutual Friend list api curl----------------------*/

// curl -X GET \
//   'http://localhost:3000/twitter/mutual/friends/get?username1=R_S_K_94&username2=sanil123321' \
//   -H 'Accept: */*' \
//   -H 'Accept-Encoding: gzip, deflate' \
//   -H 'Cache-Control: no-cache' \
//   -H 'Connection: keep-alive' \
//   -H 'Content-Length: 0' \
//   -H 'Host: localhost:3000' \
//   -H 'Postman-Token: 218a9a56-8780-4934-aa60-60f8461e16d9,6d6c6445-b644-4802-a6c2-c22132436b7e' \
//   -H 'User-Agent: PostmanRuntime/7.20.1' \
//   -H 'cache-control: no-cache'

/*-------------------------Response1----------------------------*/

// {
//     "status": true,
//     "message": "Request Processed Successfully",
//     "response": [
//         {
//             "id": 831657713226522600,
//             "name": "Google Pay India",
//             "screen_name": "GooglePayIndia"
//         },
//         {
//             "id": 176888549,
//             "name": "Delhi Capitals",
//             "screen_name": "DelhiCapitals"
//         },
//         {
//             "id": 177547780,
//             "name": "ICC",
//             "screen_name": "ICC"
//         },
//         {
//             "id": 185142711,
//             "name": "BCCI",
//             "screen_name": "BCCI"
//         },
//         {
//             "id": 881422988981059600,
//             "name": "Sports Sutra 🇮🇳",
//             "screen_name": "SpoSutra"
//         },
//         {
//             "id": 23592970,
//             "name": "KolkataKnightRiders",
//             "screen_name": "KKRiders"
//         },
//         {
//             "id": 885487044243238900,
//             "name": "President of India",
//             "screen_name": "rashtrapatibhvn"
//         },
//         {
//             "id": 15639696,
//             "name": "IndianPremierLeague",
//             "screen_name": "IPL"
//         },
//         {
//             "id": 267187224,
//             "name": "KolkataKnightRiders | Kolkata Knight Riders | KKR",
//             "screen_name": "KkrKnightRiders"
//         },
//         {
//             "id": 47595335,
//             "name": "ravish kumar",
//             "screen_name": "ravishndtv"
//         },
//         {
//             "id": 139876086,
//             "name": "AB de Villiers",
//             "screen_name": "ABdeVilliers17"
//         },
//         {
//             "id": 78941611,
//             "name": "Harsha Bhogle",
//             "screen_name": "bhogleharsha"
//         },
//         {
//             "id": 281902422,
//             "name": "Swati Maliwal",
//             "screen_name": "SwatiJaiHind"
//         },
//         {
//             "id": 51376979,
//             "name": "Sonam K Ahuja",
//             "screen_name": "sonamakapoor"
//         },
//         {
//             "id": 101695592,
//             "name": "Deepika Padukone",
//             "screen_name": "deepikapadukone"
//         },
//         {
//             "id": 25073877,
//             "name": "Donald J. Trump",
//             "screen_name": "realDonaldTrump"
//         },
//         {
//             "id": 121046433,
//             "name": "Rohit Sharma",
//             "screen_name": "ImRo45"
//         },
//         {
//             "id": 155151279,
//             "name": "Lata Mangeshkar",
//             "screen_name": "mangeshkarlata"
//         },
//         {
//             "id": 121044171,
//             "name": "Suresh Raina🇮🇳",
//             "screen_name": "ImRaina"
//         },
//         {
//             "id": 1492538024,
//             "name": "Kapil Sharma",
//             "screen_name": "KapilSharmaK9"
//         },
//         {
//             "id": 2597413135,
//             "name": "President Mukherjee",
//             "screen_name": "POI13"
//         },
//         {
//             "id": 141208596,
//             "name": "Suresh Prabhu",
//             "screen_name": "sureshpprabhu"
//         },
//         {
//             "id": 19897138,
//             "name": "India Today",
//             "screen_name": "IndiaToday"
//         },
//         {
//             "id": 31348594,
//             "name": "Akshay Kumar",
//             "screen_name": "akshaykumar"
//         },
//         {
//             "id": 717657013564612600,
//             "name": "News Hour Debater",
//             "screen_name": "NewsHourDebater"
//         },
//         {
//             "id": 42606652,
//             "name": "आज तक",
//             "screen_name": "aajtak"
//         },
//         {
//             "id": 57948579,
//             "name": "Akhilesh Yadav",
//             "screen_name": "yadavakhilesh"
//         },
//         {
//             "id": 113419517,
//             "name": "Hrithik Roshan",
//             "screen_name": "iHrithik"
//         },
//         {
//             "id": 135421739,
//             "name": "Sachin Tendulkar",
//             "screen_name": "sachin_rt"
//         },
//         {
//             "id": 759251,
//             "name": "CNN",
//             "screen_name": "CNN"
//         },
//         {
//             "id": 88856792,
//             "name": "Aamir Khan",
//             "screen_name": "aamir_khan"
//         },
//         {
//             "id": 5402612,
//             "name": "BBC Breaking News",
//             "screen_name": "BBCBreaking"
//         },
//         {
//             "id": 44588485,
//             "name": "Chetan Bhagat",
//             "screen_name": "chetan_bhagat"
//         },
//         {
//             "id": 1605250512,
//             "name": "piya singh",
//             "screen_name": "piyasin95168032"
//         },
//         {
//             "id": 240649814,
//             "name": "TIMES NOW",
//             "screen_name": "TimesNow"
//         },
//         {
//             "id": 68977380,
//             "name": "Kiran Bedi",
//             "screen_name": "thekiranbedi"
//         },
//         {
//             "id": 268414482,
//             "name": "Miley Ray Cyrus",
//             "screen_name": "MileyCyrus"
//         },
//         {
//             "id": 428333,
//             "name": "CNN Breaking News",
//             "screen_name": "cnnbrk"
//         },
//         {
//             "id": 2557521,
//             "name": "ESPN",
//             "screen_name": "espn"
//         },
//         {
//             "id": 813286,
//             "name": "Barack Obama",
//             "screen_name": "BarackObama"
//         },
//         {
//             "id": 101311381,
//             "name": "Shah Rukh Khan",
//             "screen_name": "iamsrk"
//         },
//         {
//             "id": 145125358,
//             "name": "Amitabh Bachchan",
//             "screen_name": "SrBachchan"
//         },
//         {
//             "id": 20751449,
//             "name": "The Hindu",
//             "screen_name": "the_hindu"
//         },
//         {
//             "id": 347035710,
//             "name": "Manohar Parrikar Memorial",
//             "screen_name": "manoharparrikar"
//         },
//         {
//             "id": 30417501,
//             "name": "Manish Sisodia",
//             "screen_name": "msisodia"
//         },
//         {
//             "id": 471741741,
//             "name": "PMO India",
//             "screen_name": "PMOIndia"
//         },
//         {
//             "id": 60937837,
//             "name": "Subramanian Swamy",
//             "screen_name": "Swamy39"
//         },
//         {
//             "id": 2785480981,
//             "name": "Make in India",
//             "screen_name": "makeinindia"
//         },
//         {
//             "id": 141633175,
//             "name": "Dr Kumar Vishvas",
//             "screen_name": "DrKumarVishwas"
//         },
//         {
//             "id": 2253142422,
//             "name": "ISRO",
//             "screen_name": "isro"
//         },
//         {
//             "id": 38647512,
//             "name": "The Indian Express",
//             "screen_name": "IndianExpress"
//         },
//         {
//             "id": 2251588934,
//             "name": "State Bank of India",
//             "screen_name": "TheOfficialSBI"
//         },
//         {
//             "id": 2602959463,
//             "name": "Ministry of Railways",
//             "screen_name": "RailMinIndia"
//         },
//         {
//             "id": 2765974980,
//             "name": "ISRO's Mars Orbiter",
//             "screen_name": "MarsOrbiter"
//         },
//         {
//             "id": 258703448,
//             "name": "Kalam Center",
//             "screen_name": "KalamCenter"
//         },
//         {
//             "id": 711694309,
//             "name": "AAP",
//             "screen_name": "AamAadmiParty"
//         },
//         {
//             "id": 405427035,
//             "name": "Arvind Kejriwal",
//             "screen_name": "ArvindKejriwal"
//         },
//         {
//             "id": 2183816041,
//             "name": "Arun Jaitley",
//             "screen_name": "arunjaitley"
//         },
//         {
//             "id": 18839785,
//             "name": "Narendra Modi",
//             "screen_name": "narendramodi"
//         },
//         {
//             "id": 36327407,
//             "name": "Hindustan Times",
//             "screen_name": "htTweets"
//         },
//         {
//             "id": 39743812,
//             "name": "Economic Times",
//             "screen_name": "EconomicTimes"
//         },
//         {
//             "id": 99448420,
//             "name": "Gautam Gambhir",
//             "screen_name": "GautamGambhir"
//         },
//         {
//             "id": 134758540,
//             "name": "Times of India",
//             "screen_name": "timesofindia"
//         },
//         {
//             "id": 92724677,
//             "name": "Virender Sehwag",
//             "screen_name": "virendersehwag"
//         }
//     ]
// }


/*-----------------------Response 2--------------------------*/
// {
//     "status": false,
//     "message": "Request Processed With Error",
//     "response": "Mandatory parameters(usernames) missing"
// }