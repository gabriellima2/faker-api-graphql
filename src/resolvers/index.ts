import { ApolloServerOptions, BaseContext } from '@apollo/server'
import { storyResolvers } from './story.resolvers'

export const resolvers: ApolloServerOptions<BaseContext>['resolvers'] = {
	Query: {
		...storyResolvers.Query,
	},
}
