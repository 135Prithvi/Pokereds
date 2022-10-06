import { GraphQLClient } from 'graphql-request'

const endpoint =
  (process.env.GET_ONE_GRAPHQL_PokeApi as string) 

const graphQLClient = new GraphQLClient(endpoint)
graphQLClient.setHeader(
  'X-GQL-Token',
  (process.env.PREVIEW_EDGE_CH_API_KEY as string) || ''
)

export default graphQLClient
