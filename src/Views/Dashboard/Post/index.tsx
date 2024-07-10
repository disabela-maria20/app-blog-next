"use client"

import { Modal } from '@/src/components'
import { INoticiaProps } from '@/src/models/noticias.model'
import React, { useState } from 'react'
import { BsPencil, BsSearch, BsTrash } from 'react-icons/bs'

interface IPostPros {
  data: INoticiaProps[]
}

const Post: React.FC<IPostPros> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  function handleEditar(id_noticia: number): void {
    console.log(id_noticia);
    setIsModalOpen(true)
  }

  function handleExcluir(id_noticia: number): void {
    console.log(id_noticia);
    setIsModalOpen(true)
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
                  <td>{data.autor}</td>
                  <td>{data.data_noticia}</td>
                  <td>{data.titulo}</td>
                  <td className="flex gap-5">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEditar(data.id_noticia)}
                    >
                      <BsPencil />
                    </button>
                    <button
                      className="btn btn-error"
                      onClick={() => handleExcluir(data.id_noticia)}>
                      <BsTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="modal">
            <label className="modal-overlay"></label>
            <div className="modal-content flex flex-col gap-5">
              <label htmlFor="modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
              <h2 className="text-xl">Modal title 3</h2>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum voluptate ratione dicta. Maxime cupiditate, est commodi consectetur earum iure, optio, obcaecati in nulla saepe maiores nobis iste quasi alias!</span>
              <div className="flex gap-3">
                <button className="btn btn-error btn-block">Delete</button>
                <button className="btn btn-block">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          lorem
        </Modal>
      )}


    </>
  )
}

export default Post
