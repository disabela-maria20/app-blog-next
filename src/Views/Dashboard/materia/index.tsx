"use client"

import { Modal } from '@/src/components'
import { INoticiaProps } from '@/src/models/noticias.model'
import { IdNoticias } from '@/src/request/controllers/apicontrollers'
import React, { useState, useEffect } from 'react'
import { BsPencil, BsSearch, BsTrash } from 'react-icons/bs'

interface IPostPros {
  data: INoticiaProps[]
}

enum EtypeModal {
  EDITAR = "editar",
  EXCLUIR = "excluir",
}

const Materia: React.FC<IPostPros> = ({ data }) => {

  const [editar, setEditar] = useState<INoticiaProps | null>(null);

  async function handleEditar(id_noticia: number): Promise<void> {
    const noticiasId = await MostrarNoticias(id_noticia.toString());
    if (!noticiasId) setEditar(noticiasId);    
  }

  function handleExcluir(id_noticia: number): void {
    console.log(id_noticia);

  }

  async function MostrarNoticias(id: string) {
    const response = await IdNoticias(id);
    return response || []
  }

  return (
    <>
      <section className="px-5">
        <section className="flex justify-between items-center">
          <h1 className="text-5xl my-5">Materias</h1>
          <div className="flex justify-between">
            <input type="search" className="input input-solid" name="" id="" />
            <button className="btn btn-primary">
              <BsSearch />
            </button>
          </div>
        </section>
        <div className="flex w-full mt-5 overflow-x-auto">
          <table className="table-zebra table">
            <thead>
              <tr>
                <th>id</th>
                <th>titulo</th>
                <th>autor</th>
                <th>data_noticia</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((data) => (
                <tr key={data.id_noticia}>
                  <th>{data.id_noticia}</th>
                  <td>{data.titulo}</td>
                  <td>{data.autor}</td>
                  <td>{data.data_noticia}</td>
                  <td className="flex gap-5">
                    <label
                      htmlFor={EtypeModal.EDITAR}
                      className="btn btn-primary"
                      onClick={() => handleEditar(data.id_noticia)}
                    >
                      <BsPencil />
                    </label>
                    <label
                      htmlFor={EtypeModal.EXCLUIR}
                      className="btn btn-error"
                      onClick={() => handleExcluir(data.id_noticia)}
                    >
                      <BsTrash />
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Modal nameModal={EtypeModal.EDITAR}>
        <form className="form-group">
          <h2 className="text-xl">Editar</h2>
          <div className="form-field">
            <label className="form-label">Titulo</label>
            <input type="text" defaultValue={editar?.titulo} className="input max-w-full" />
          </div>
          <div className="form-field">
            <label className="form-label">Autor</label>
            <input type="text" defaultValue={editar?.autor} className="input max-w-full" />
          </div>
          <div className="form-field">
            <label className="form-label">Noticia</label>
            <textarea defaultValue={editar?.noticia} className="textarea max-w-full" />
          </div>
          <div className='flex justify-end'>
            <button className="btn btn-solid-error me-2">Cancelar</button>
            <button className="btn btn-solid-primary">Concluir Edição</button>
          </div>
        </form>
      </Modal>
      <Modal nameModal={EtypeModal.EXCLUIR}>
        <h2 className="text-xl">Excluir</h2>
        <p>Tem certeza que deseja excluir ?</p>
        <div className='flex justify-end'>
          <button className="btn btn-solid-error me-2">Cancelar</button>
          <button className="btn btn-solid-primary">Concluir Exclusão</button>
        </div>
      </Modal>
    </>
  )
}

export default Materia
