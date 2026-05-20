import Link from 'next/link'
import { FaTiktok, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaShareAlt } from 'react-icons/fa'
import { EMAIL, PHONE, TIKTOK_URL, FACEBOOK_URL, INSTAGRAM_URL, COMPANY_NAME, BASE_URL } from '../../utils/constants'

async function handleShare() {
    if (typeof navigator !== 'undefined' && navigator.share) {
        try {
            await navigator.share({
                title: 'Tacos (Taquizas) Chuy',
                text: 'Authentic Mexican street food catering in Puyallup, WA',
                url: BASE_URL,
            })
        } catch {}
    }
}

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
                        <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Follow on Facebook">
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Follow on Instagram">
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Follow on TikTok">
                            <FaTiktok />
                        </a>
                    </li>
                    <li>
                        <button onClick={handleShare} aria-label="Share this page" className="footer-share-btn">
                            <FaShareAlt />
                        </button>
                    </li>
                </ul>
                <p className="footer-copy">
                    <a href="#" className="footer-back-top">Back to top &uarr;</a>
                </p>
                <p className="footer-copy">
                    {COMPANY_NAME} &copy; {new Date().getFullYear()}. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
