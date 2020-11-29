import { useRouter } from 'next/router'
import { useFetch } from '../../../hooks/useFetch'

function UserDetail() {
  const router = useRouter()

  const { uid } = router.query

  const { data: user } = useFetch(`/users/${uid}`)

  if(!user) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <div>{`name: ${user.name}`}</div>
      <div>{`username: ${user.username}`}</div>
      <div>{`phone: ${user.phone}`}</div>
      <div>{`website: ${user.website}`}</div>
    </div>
  )
}

export default UserDetail