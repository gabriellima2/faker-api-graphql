export const postTypeDefs = `#graphql
	type Post {
		id: ID!
		author: Author!
		imageUrl: String!
		description: String
		likes: Int!
		comments: [Comment]!
		createdAt: String!
	}

	type Query {
		posts: [Post]!
		post(id: ID!): Post
	}
`
