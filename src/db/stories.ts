import { faker } from '@faker-js/faker'

import { createAuthor } from '../helpers/create-author'
import type { StoryEntity } from '../entities/story.entity'

function createStory(): StoryEntity {
	return {
		id: faker.string.uuid(),
		imageUrl: faker.image.url({ width: 440, height: 440 }),
		author: createAuthor(),
	}
}

export const stories: StoryEntity[] = faker.helpers.multiple(createStory, {
	count: 16,
})
