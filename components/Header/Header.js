import Image from 'next/image'
import HeaderItem from '../HeaderItem/HeaderItem'
import {
    HomeIcon,
    LightningBoltIcon,
    BadgeCheckIcon,
    CollectionIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'
function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem Icon={HomeIcon} title="HOME"></HeaderItem>
                <HeaderItem Icon={LightningBoltIcon} title="HOME"></HeaderItem>
                <HeaderItem Icon={BadgeCheckIcon} title="HOME"></HeaderItem>
                <HeaderItem Icon={CollectionIcon} title="HOME"></HeaderItem>
                <HeaderItem Icon={SearchIcon} title="HOME"></HeaderItem>
                <HeaderItem Icon={UserIcon} title="HOME"></HeaderItem>
            </div>
            <Image src='/images/hulu-light.png' height={100} width = {200} alt="Hulu" className="object-contain text-white"/>
        </header>
    )
}

export default Header
