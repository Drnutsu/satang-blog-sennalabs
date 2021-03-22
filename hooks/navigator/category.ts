import { useRouter } from 'next/router'

export const useCategoryNavigator = () => {
  const router = useRouter()
  const handleNavigate = (slug: string) => {
    router.push(`/category/${slug}`)
  }

  return handleNavigate
}
