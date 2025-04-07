import React from 'react'
import { Menu, Count, Clients } from '../../components'

function Home() {
    const [active, setActive] = React.useState(1)
  return (
    <div style={{minWidth: '1000px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <Menu active={active} setActive={setActive} />
      <div>
        {active === 1 && <Count />}
        {active === 2 && <Clients />}
      </div>
    </div>
  )
}

export { Home }
