import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rjs10k168001yybh33crlf/master',
  cache: new InMemoryCache()
})