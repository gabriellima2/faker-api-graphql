import { AuthorEntity } from './author.entity'

export interface StoryEntity {
	id: string
	author: AuthorEntity
	imageUrl: string
}
