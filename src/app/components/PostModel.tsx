
import './PostModel.css'
import logo from '../assets/ignite-logo.svg'
import {Comment} from './Comment'
import { Avatar } from './Avatar'

export function PostModel(props) {
    return (
        <article className='post'>
            <header>
                <div className='author'>
                    <Avatar src={logo} />
                    {/* <Avatar src={props.author.avatarUrl}  */} 
                    <div className='authorInfo'>
                        <strong>Christyan Segecs</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
            </header>
            <div className='content'>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="" className='hover:text-[#00B37E]'>jane.design/doctorcare</a></p>
                <p>#novoprojeto #nlw #rocketseat</p>
            </div>

            <form action="" className='commentForm'>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário'></textarea>
                <footer>
                    <button type='submit' className=''>Publicar</button>
                </footer>
            </form>
            <div className='commentList'>
                <Comment />
            </div>
        </article>
    )
}