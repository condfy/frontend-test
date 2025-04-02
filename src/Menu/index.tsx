import React, { useState } from "react"
import { Count } from '../Count'
import { Clients } from '../Clients'

function Menu() {
  const activities = [
    {id: 1, name: 'Atividade 1'},
    {id: 2, name: 'Atividade 2'},
  ];
  const [active, setActive] = useState(1)

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
      <div>
        {active === 1 && <Count />}
        {active === 2 && <Clients />}
      </div>
    </>
  );
}

export { Menu }