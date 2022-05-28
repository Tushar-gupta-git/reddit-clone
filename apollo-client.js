// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://countries.https://dedougou.stepzen.net/api/loopy-peahen/__graphql.com",
    header:{
Authorization: `Apikey${process.env.NEXT_PUBLIC_STEPZEN_KEY}` 

    },
    cache: new InMemoryCache(),
});

export default client;