import { faker } from '@faker-js/faker'

import { CommentEntity } from '../entities/comment.entity'
import { PostEntity } from '../entities/post.entity'

function createComments(): CommentEntity {
	return {
		id: faker.string.uuid(),
		author: {
			id: faker.string.uuid(),
			name: `${faker.person.firstName()} ${faker.person.lastName()}`,
			avatarUrl: faker.image.avatar(),
		},
		content: faker.lorem.lines(1),
	}
}

function createPost(): PostEntity {
	return {
		id: faker.string.uuid(),
		description: faker.lorem.lines(1),
		imageUrl: 'https://picsum.photos/440?random=1',
		author: {
			id: faker.string.uuid(),
			name: `${faker.person.firstName()} ${faker.person.lastName()}`,
			avatarUrl: faker.image.avatar(),
		},
		comments: faker.helpers.multiple(createComments, {
			count: { min: 0, max: 32 },
		}),
		likes: faker.number.int({ min: 0, max: 500 }),
		createdAt: faker.date.past(),
	}
}

export const posts: PostEntity[] = faker.helpers.multiple(createPost, {
	count: 32,
})
