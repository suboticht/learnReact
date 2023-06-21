import React from 'react';

const Header = ({name}) => {
  return <header className="border-b border-slate-300 py-4">
      <div className="container mx-auto">
          <div className="flex text-zinc-500">
              <div className="basis-4/5 font-medium text-3xl">{name}</div>
              <div className="basis-1/5">
                  <p className="text-2xl"><span className="inline-block mr-10">full name here</span><span>logout</span></p>
              </div>
          </div>
      </div>
  </header>
}
export default Header;