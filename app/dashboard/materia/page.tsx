
import { Materia } from "@/src/Views/Dashboard";
import { AllNoticias } from "@/src/request/controllers/apicontrollers";

export default async function PageMateria() {
  const data = await AllNoticias()
  
  return (
   <Materia data={data}></Materia>
  )
}