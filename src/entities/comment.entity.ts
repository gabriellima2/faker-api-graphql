import { AuthorEntity } from './author.entity'

export interface CommentEntity {
	id: string
	author: AuthorEntity
	content: string
}
