import React, { useEffect, useState } from 'react'

import { ClientElement } from './types'
import { CLIENTS_DEFAULT_VALUES } from './constants'

function Clients() {
  const [clientList, setClientList] = useState<ClientElement[]>([])
  const [showAddEdit, setShowAddEdit] = useState(false)
  const [search, setSearch] = useState('')
  const [id, setId] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  useEffect(() => {
    setClientList(CLIENTS_DEFAULT_VALUES);
  }, []);

  const deleteClient = (id: number) => {
    // Não implementado
  }

  const saveClient = () => {
    // Não implementado
  }

  const searchClient = () => {
    // Não implementado
  }

  const resetForm = () => {
    setId(0)
    setName('')
    setEmail('')
    setPhone('')
    setAddress('')
    setCity('')
    setState('')
  }

  const editClient = (client: ClientElement) => {
    setId(client.id)
    setName(client.name)
    setEmail(client.email)
    setPhone(client.phone)
    setAddress(client.address)
    setCity(client.city)
    setState(client.state)
    setShowAddEdit(true)
  }

  const handleAddClient = () => {
    resetForm()
    setShowAddEdit(true)
  }

  const handleCancel = () => {
    resetForm()
    setShowAddEdit(false)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    saveClient()
  };

  return (
    <div>
      <h2>{!showAddEdit? 'Clientes' : id > 0? 'Editar' : 'Adicionar'}</h2>
      <div>
        {!showAddEdit && (
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
            <div style={{display: 'flex', gap: '10px'}}>
              <input name="search" placeholder="Digite sua pesquisa" value={search} onChange={(e) => setSearch(e.target.value)} />
              <button onClick={searchClient}>Pesquisar</button>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <button onClick={handleAddClient}>
                + Adicionar cliente
              </button>
            </div>
          </div>
        )}
        { showAddEdit? (
          <form onSubmit={handleSubmit}>
            <input name="id" value={id} type="hidden" />
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px'}}>
              <input name="name" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
              <input name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input name="phone" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <input name="address" placeholder="Endereço" value={address} onChange={(e) => setAddress(e.target.value)} />
              <input name="city" placeholder="Cidade" value={city} onChange={(e) => setCity(e.target.value)} />
              <input name="state" placeholder="Estado" value={state} onChange={(e) => setState(e.target.value)} />
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end', gap: '10px'}}>
              <button onClick={handleCancel}>Cancelar</button>
              <button type='submit'>Salvar</button>
            </div>
          </form>
        ) : (
          <table style={{width: '100%'}}>
            <thead style={{textAlign: 'left'}}>
              <tr>
                <th style={{width: '10%'}}>ID</th>
                <th style={{width: '20%'}}>Nome</th>
                <th style={{width: '30%'}}>Email</th>
                <th style={{width: '20%'}}>Telefone</th>
                <th style={{width: '20%'}}></th>
              </tr>
            </thead>
            <tbody>
              {clientList?.length === 0 && (
                <tr>
                  <td colSpan={7} style={{textAlign: 'center'}}>Nenhum cliente encontrado</td>
                </tr>
              )}
              {clientList?.map((client) => (
                <tr key={client.id}>
                  <td>{client.id}</td>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td style={{display: 'flex', justifyContent: 'flex-end', gap: '10px'}}>
                    <button onClick={() => editClient(client)}>
                      Editar
                    </button>
                    <button onClick={() => deleteClient(client.id)}>
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) }
      </div>
    </div>
  )
}

export { Clients }
