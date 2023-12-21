export const storyTypeDefs = `#graphql
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
