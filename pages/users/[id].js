import { useRouter } from 'next/router'
import MainContainer from '../../components/MainContainer'
import css from '../../styles/user.module.scss'

export default function User({ user }) {
    const router = useRouter()
    const { id } = router.query 

    return (
        <MainContainer title="User">
            <div className={css.user}>
                <h1>Пользователь c id {id}</h1>
                <div>
                    Имя пользователя {user.name}
                </div>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({ params, query }) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id)
    const user = await response.json()

    return {
      props: {user}, // will be passed to the page component as props
    }
  }
