import { useRouter } from 'next/router'

export const useArticleNavigator = () => {
  const router = useRouter()
  const handleNavigate = (slug: string) => {
    router.push(`/article/${slug}`)
  }

  return handleNavigate
}
