import { INoticiaProps } from "@/src/models/noticias.model";
import axios from "axios";

interface INoticiasApi {
  post: (formData: INoticiaProps, value: string, imageBase64: string) => Promise<void>;
  get: (id: string) => Promise<INoticiaProps>;
  getAll: () => Promise<INoticiaProps[]>;
}

const postNoticia = async (formData: INoticiaProps, value: string, imageBase64: string): Promise<void> => {
 const res = await axios.post("http://localhost:3000/api/noticias", {
    titulo: formData.titulo,
    noticia: value,
    autor: formData.autor,
    data_noticia: formData.data_noticia,
    image: imageBase64,
  });
};

const getNoticia = async (id: string): Promise<INoticiaProps> => {
  const res = await axios.get<INoticiaProps>(`http://localhost:3000/api/noticias/${id}`);
  return res.data;
};

const getAllNoticias = async (): Promise<INoticiaProps[]> => {
  const res = await axios.get<INoticiaProps[]>("http://localhost:3000/api/noticias");
  return res.data;
};

export const Noticias: INoticiasApi = {
  post: postNoticia,
  get: getNoticia,
  getAll: getAllNoticias,
};
