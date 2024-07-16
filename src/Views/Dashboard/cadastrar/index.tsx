"use client"

import { INoticiaProps } from '@/src/models/noticias.model'
import React from 'react'

interface IPostPros {
  data: INoticiaProps[]
}

const Cadastar = () => {
  return <>
    <section className='mt-11 max-w-3xl m-auto flex flex-col'>
      <h1 className="text-3xl">Cadastro de materias</h1>
      <form className="form-group mt-8">
        <div className="form-field">
          <label className="form-label">Titulo</label>
          <input type="text" className="input max-w-full" />
        </div>
        <div className="form-field">
          <label className="form-label">Resumo</label>
          <input type="text" className="input max-w-full" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="form-field">
            <label className="form-label" htmlFor="email">Data Noticia</label>
            <input className="input max-w-full" type="date" />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="phone">Autor</label>
            <input className="input max-w-full" type="text" />
          </div>
        </div>
        <div className="form-field">
          <label className="form-label">Noticia</label>
          <textarea className="textarea max-w-full" rows={10} />
        </div>
        <div className='flex justify-end mt-5'>
          <button className="btn btn-solid-error me-2 ">Cancelar</button>
          <button className="btn btn-solid-primary">Concluir cadastro</button>
        </div>
      </form>
    </section>
  </>
}

export default Cadastar
