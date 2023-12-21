import { faker } from '@faker-js/faker'

import { createAuthor } from '../helpers/create-author'
import type { StoryEntity } from '../entities/story.entity'

function createStory(): StoryEntity {
	return {
		id: faker.string.uuid(),
		imageUrl: 'https://picsum.photos/440?random=1',
		author: createAuthor(),
	}
}

export const stories: StoryEntity[] = faker.helpers.multiple(createStory, {
	count: 16,
})
