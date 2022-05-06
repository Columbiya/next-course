import Head from 'next/head'
import A from './A'

//своего рода обертка, которая содержит в себе незименяемые
//части каждой страницы

const MainContainer = ({ children, keywords, title }) => {
    return (
        <>
            <Head>
                <meta keywords={'vovan, nextjs' + keywords}></meta>
                <title>{title}</title>
            </Head>
            <div className='navbar'>
                <A href="/" text="главная" />
                <A href="/users" text="пользователи" />
            </div>
            <div>
                {children}
            </div> 
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                `}
            </style>
        </>
    )
}

export default MainContainer