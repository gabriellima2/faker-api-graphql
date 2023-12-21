import { posts } from '../db/posts'

import type { PostEntity } from '../entities/post.entity'
import type { Resolvers } from '../@types/resolvers'

interface PostQueryParam {
	id: string
}

interface PostResolvers extends Resolvers {
	Query: {
		posts(): PostEntity[]
		post(_: unknown, params: PostQueryParam): PostEntity | undefined
	}
}

export const postResolvers: PostResolvers = {
	Query: {
		posts() {
			return posts
		},
		post(_, params) {
			const { id } = params
			const [findedPost] = posts.filter((post) => post.id === id)
			return findedPost
		},
	},
}
