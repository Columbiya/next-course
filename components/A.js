import Link from "next/link";
import css from '../styles/A.module.css'

export default function A({ href, text }) {
    return (
     <Link href={href}>
         <a className={css.link}>{text}</a>
     </Link>   
    )
}