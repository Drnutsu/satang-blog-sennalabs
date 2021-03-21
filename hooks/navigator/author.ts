import { useRouter } from 'next/router'

export const useAuthorNavigator = () => {
  const router = useRouter()
  const handleNavigate = (slug: string) => {
    router.push(`/author/${slug}`)
  }

  return handleNavigate
}
