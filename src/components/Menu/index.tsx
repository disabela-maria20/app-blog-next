/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { BsBox } from 'react-icons/bs'

const Menu = () => {
  return (
    <aside className="sidebar w-full justify-start col-span-3">
      <section className="sidebar-title items-center p-4 gap-3">
        <BsBox className='text-5xl' />
        <div className="flex flex-col">
          <span>Blog </span>
          <span className="text-xs font-normal text-content2">Team Plan</span>
        </div>
      </section>
      <section className="sidebar-content h-fit min-h-[20rem] overflow-visible px-4">
        <section className="menu-section">
          <span className="menu-title">Materias</span>
          <ul className="menu-items">
            <li className="menu-item">
              <Link href={"/dashboard/cadastro"} className='w-full'>Cadastrar</Link>
            </li>
            <li className="menu-item">
              <Link href={"/dashboard/materia"} className='w-full'>Lista</Link>
            </li>
          </ul>
        </section>
      </section>
      <section className="sidebar-footer h-full justify-end bg-gray-2 pt-2">
        <div className="divider my-0"></div>
        <div className="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4">
          <label className="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4">
            <div className="flex flex-row gap-4 p-4">
              <div className="avatar avatar-md">
                <img src="https://i.pravatar.cc/150?img=30" alt="avatar" />
              </div>

              <div className="flex flex-col">
                <span>Sandra Marx</span>
                <span className="text-xs font-normal text-content2">sandra</span>
              </div>
            </div>
          </label>
          <div className="dropdown-menu dropdown-menu-right-top ml-2">
            <a className="dropdown-item text-sm">Profile</a>
            <a className="dropdown-item text-sm">Account settings</a>
            <a className="dropdown-item text-sm">Change email</a>
            <a className="dropdown-item text-sm">Subscriptions</a>
            <a className="dropdown-item text-sm">Change password</a>
            <a className="dropdown-item text-sm">Refer a friend</a>
            <a className="dropdown-item text-sm">Settings</a>
          </div>
        </div>
      </section>
    </aside>
  )
}

export default Menu