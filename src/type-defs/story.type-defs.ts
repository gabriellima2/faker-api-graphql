export const storyTypeDefs = `#graphql
	type Author {
		id: ID!
		name: String!
		avatarUrl: String!
	}

	type Story {
		id: ID!
		author: Author!
		imageUrl: String!
	}

	type Query {
		stories: [Story]!
		story(id: ID!): Story
	}
`
