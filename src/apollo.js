// src/apollo.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql', // Cambia esto si tu backend tiene otra URL
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    }
  }
})

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default apolloClient
