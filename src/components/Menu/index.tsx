import React from "react"
import { MenuProps } from './types'

function Menu({active, setActive}: MenuProps) {
  const activities = [
    {id: 1, name: 'Atividade 1'},
    {id: 2, name: 'Atividade 2'},
    {id: 3, name: 'Atividade 3'},
  ];

  return (
    <>
      <nav>
        <ul style={{display: 'flex', flexDirection: 'row', padding: 0, gap: '10px', listStyle: 'none'}}>
          {activities.map((item) => (
          <li key={item.id}>
            <button
            className={`${active === item?.id ? "bg-blue-500" : "hover:bg-gray-700"}`}
            onClick={() => setActive(item?.id)}
            >
              {item.name}
            </button>
          </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export { Menu }