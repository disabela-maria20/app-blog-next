
import { Post } from "@/src/Views/Dashboard";
import { AllNoticias } from "@/src/request/controllers/apicontrollers";

export default async function PagePost() {
  const data = await AllNoticias()

  return (
   <Post data={data}></Post>
  )
}