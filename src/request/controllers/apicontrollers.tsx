import { Noticias } from "../services/apiService"

export const AllNoticias = async () => {
  try {
    const res = Noticias.getAll()
    return res || []
  } catch (error) {
    return []
  }
}

export const IdNoticias = async (id: string) => {
  try {
    const res = Noticias.get(id)
    return res || []
  } catch (error) {
    return []
  }
}
