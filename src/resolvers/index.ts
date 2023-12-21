import { ApolloServerOptions, BaseContext } from '@apollo/server'

import { storyResolvers } from './story.resolvers'
import { postResolvers } from './post.resolvers'

export const resolvers: ApolloServerOptions<BaseContext>['resolvers'] = {
	Query: {
		...storyResolvers.Query,
		...postResolvers.Query,
	},
}
