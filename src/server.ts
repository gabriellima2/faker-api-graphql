import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import { typeDefs } from './type-defs'
import { resolvers } from './resolvers'

const server = new ApolloServer({
	typeDefs,
	resolvers,
})

async function bootstrap() {
	const { url } = await startStandaloneServer(server, {
		listen: { port: 3001 },
	})

	console.log(`🚀 Server ready at: ${url}`)
}

bootstrap()
