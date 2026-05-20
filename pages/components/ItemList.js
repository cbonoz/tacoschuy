import { FaCheck } from 'react-icons/fa'

const ICONS = {
    'Fresh Tacos': '🌮',
    'Sides': '🥗',
    'Drinks': '🥤'
}

export default function ItemList({ items, title }) {
    return (
        <div className="menu-card">
            <h3>
                <span>{ICONS[title] || '•'}</span> {title}
            </h3>
            <ul>
                {(items || []).map((item, i) => (
                    <li key={i}>
                        <FaCheck size={12} /> {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}
