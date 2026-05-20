import Link from 'next/link'
import { FaTiktok, FaEnvelope, FaPhone } from 'react-icons/fa'
import { EMAIL, PHONE, TIKTOK_URL, COMPANY_NAME } from '../../utils/constants'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-brand">{COMPANY_NAME}</div>
                <ul className="footer-social">
                    <li>
                        <Link href={`mailto:${EMAIL}`} aria-label="Email">
                            <FaEnvelope />
                        </Link>
                    </li>
                    <li>
                        <Link href={`tel:${PHONE}`} aria-label="Phone">
                            <FaPhone />
                        </Link>
                    </li>
                    <li>
                        <Link href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                            <FaTiktok />
                        </Link>
                    </li>
                </ul>
                <p className="footer-copy">
                    {COMPANY_NAME} &copy; {new Date().getFullYear()}. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
