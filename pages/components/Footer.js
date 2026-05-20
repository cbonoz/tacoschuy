import Link from 'next/link'
import { FaTiktok } from 'react-icons/fa'
import { EMAIL, PHONE, TIKTOK_URL } from '../../utils/constants'

export default function Footer() {
    return (
        <footer className='white'>
            <div>
                <ul className="icons">
                    <li>
                        <Link href={`mailto:${EMAIL}`} className="icon fa-envelope-o fa-2xl">
                        </Link>
                    </li>
                    <li>
                        <Link href={`tel:${PHONE}`} className="icon fa-phone fa-2xl">
                        </Link>
                    </li>
                    <li>
                        <Link href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                            <FaTiktok size={28} />
                        </Link>
                    </li>
                </ul>
                <h1 className="copyright centered">
                    Taquizas Chuy &copy;{new Date().getFullYear()}
                </h1>
            </div>
        </footer>
    )
}
