import { CommentEntity } from './comment.entity'
import { AuthorEntity } from './author.entity'

export interface PostEntity {
	id: string
	author: AuthorEntity
	imageUrl: string
	description: string
	likes: number
	comments: CommentEntity[]
	createdAt: Date
}
