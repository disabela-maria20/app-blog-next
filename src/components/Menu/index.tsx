/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { BsBox, BsFileEarmarkFill } from 'react-icons/bs'

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
      <section className="sidebar-content h-fit min-h-[20rem] overflow-visible">
        <nav className="menu rounded-md">
          <section className="menu-section px-4">
            <span className="menu-title">Menu</span>
            <ul className="menu-items">
              <li className="menu-item">
                <BsFileEarmarkFill />
                <Link className='w-full' href="/dashboard/post">Post</Link>
              </li>
              <li>
                <input type="checkbox" id="menu-1" className="menu-toggle" />
                <label className="menu-item justify-between" htmlFor="menu-1">
                  <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Account</span>
                  </div>

                  <span className="menu-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </label>

                <div className="menu-item-collapse">
                  <div className="min-h-0">
                    <label className="menu-item-disabled menu-item ml-6">Accounts</label>
                    <label className="menu-item ml-6">Billing</label>
                    <label className="menu-item ml-6">Security</label>
                    <label className="menu-item ml-6">Notifications</label>
                    <label className="menu-item ml-6">Integrations</label>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </nav>
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