
'use client'
import './Comment.css'
import logo from '../assets/ignite-logo.svg'
import { Trash } from 'phosphor-react'
import { ThumbsUp } from '@phosphor-icons/react'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void
}

export function Comment( { content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0)

    function handleLikeCount() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className='comment'>
            <Avatar src={logo} hasBorder={false} />
            <div className='commentBox'>
                <div className='commentContent'>
                    <header>
                        <div className='authorAndTime'>
                            <strong>Christyan Segecs</strong>
                            <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:30'>Cerca de 2h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário' className='hover:text-[#F75A68]'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeCount} className='hover:text-[#00B37E]'>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}