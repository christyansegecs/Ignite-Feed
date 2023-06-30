
'use client'
import './Sidebar.css'
import Image from 'next/image'
import logo from '../assets/ignite-logo.svg'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'


export function Sidebar() {
    return (
        <aside className='sidebar'>
            <Image src={logo} alt='image background' className='cover'></Image>
            <div className='profile'>
                <Avatar src={logo} />
                <strong>Christyan Segecs</strong>
                <span>Web Developer</span>
            </div>
            <footer >
                <a href="" className='hover:bg-[#00875f] hover:duration-100 hover:text-white'>
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}