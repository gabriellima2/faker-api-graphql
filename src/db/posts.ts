import { faker } from '@faker-js/faker'

import { createComment } from '../helpers/create-comment'
import { createAuthor } from '../helpers/create-author'

import type { PostEntity } from '../entities/post.entity'

function createPost(): PostEntity {
	return {
		id: faker.string.uuid(),
		description: faker.lorem.lines(1),
		imageUrl: 'https://picsum.photos/440?random=1',
		author: createAuthor(),
		comments: faker.helpers.multiple(createComment, {
			count: { min: 0, max: 32 },
		}),
		likes: faker.number.int({ min: 0, max: 500 }),
		createdAt: faker.date.past(),
	}
}

export const posts: PostEntity[] = faker.helpers.multiple(createPost, {
	count: 32,
})
