
import './Header.css'
import logo from '../assets/ignite-logo.svg'
import Image from 'next/image'

export function Header() {
    return (
        <header className='header'>
            <Image src={logo} alt="logo" />
            <strong>Ignite Feed</strong>
        </header>
    )
}