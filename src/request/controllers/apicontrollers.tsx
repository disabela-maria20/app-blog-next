import { Noticias } from "../services/apiService"

export const AllNoticias = async () => {
  try {
    const res = Noticias.getAll()
    return res || []
  } catch (error) {
    return []
  }
}