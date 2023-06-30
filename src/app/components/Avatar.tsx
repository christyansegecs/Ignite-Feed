
import { ImgHTMLAttributes } from 'react';
import './Avatar.css'
import Image from 'next/image'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, src, ...props } : AvatarProps) {
    return (
        <Image src={src} alt='' className={hasBorder ? 'avatarWithBorder' : 'avatar'}></Image>
    )
}