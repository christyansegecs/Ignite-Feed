
'use client'
import './Post.css'
import logo from '../assets/ignite-logo.svg'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface Author {
    name: String;
    role: String;
    avatarUrl: string
}

interface Content {
    type: 'paragraph' | 'link';
    content: string
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[]
}

export function Post({ author, publishedAt, content } : PostProps) {

    const [comments, setComments] = useState([
        'Fala Dev'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d' de 'LLLL' às 'HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className='post'>
            <header>
                <div className='author'>
                    <Avatar src={logo} />
                    {/* <Avatar src={author.avatarUrl}  */} 
                    <div className='authorInfo'>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeNow}
                </time>
            </header>
            <div className='content'>
               {content.map(line => {
                if (line.type === 'paragraph') {
                    return <p key={content} >{line.content}</p>
                } else if (line.type === 'link') {
                    return <p key={content} ><a href="#">{line.content}</a></p>
                }
               })}
            </div>

            <form onSubmit={handleCreateNewComment} className='commentForm'>
                <strong>Deixe seu feedback</strong>

                <textarea name='comment'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required></textarea>
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty} className=''>Publicar</button>
                </footer>
            </form>
            <div className='commentList'>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                })}
            </div>
        </article>
    )
}