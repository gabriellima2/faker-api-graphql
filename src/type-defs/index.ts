import { postTypeDefs } from './post.type-defs'
import { storyTypeDefs } from './story.type-defs'

export const typeDefs = `#graphql
	type Author {
		id: ID!
		name: String!
		avatarUrl: String!
	}

	type Comment {
		id: ID!
		author: Author!
		content: String!
	}

	${storyTypeDefs}
	${postTypeDefs}
`
