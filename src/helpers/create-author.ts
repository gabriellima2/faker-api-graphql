import { faker } from '@faker-js/faker'
import type { AuthorEntity } from '../entities/author.entity'

export function createAuthor(): AuthorEntity {
	return {
		id: faker.string.uuid(),
		name: `${faker.person.firstName()} ${faker.person.lastName()}`,
		avatarUrl: faker.image.avatar(),
	}
}
