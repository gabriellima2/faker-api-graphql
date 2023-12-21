import { faker } from '@faker-js/faker'

import { createAuthor } from './create-author'
import type { CommentEntity } from '../entities/comment.entity'

export function createComment(): CommentEntity {
	return {
		id: faker.string.uuid(),
		author: createAuthor(),
		content: faker.lorem.lines(1),
	}
}
