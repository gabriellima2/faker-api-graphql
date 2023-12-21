import { faker } from '@faker-js/faker'
import { StoryEntity } from '../entities/story.entity'

function createStory(): StoryEntity {
	return {
		id: faker.string.uuid(),
		imageUrl: 'https://picsum.photos/440?random=1',
		author: {
			id: faker.string.uuid(),
			name: `${faker.person.firstName()} ${faker.person.lastName()}`,
			avatarUrl: faker.image.avatar(),
		},
	}
}

export const stories: StoryEntity[] = faker.helpers.multiple(createStory, {
	count: 16,
})
