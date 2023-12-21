import { stories } from '../db/stories'

import type { StoryEntity } from '../entities/story.entity'
import type { Resolvers } from '../@types/resolvers'

interface StoryQueryParam {
	id: string
}

interface StoryResolvers extends Resolvers {
	Query: {
		stories(): StoryEntity[]
		story(_: unknown, params: StoryQueryParam): StoryEntity | undefined
	}
}

export const storyResolvers: StoryResolvers = {
	Query: {
		stories() {
			return stories
		},
		story(_, params) {
			const { id } = params
			const [findedStory] = stories.filter((story) => story.id === id)
			return findedStory
		},
	},
}
