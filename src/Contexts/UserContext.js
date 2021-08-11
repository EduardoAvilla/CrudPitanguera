import { useState, createContext } from 'react';


export const UserContext = createContext({});

function UserProvider({children}){
   
  const [Tarefas, SetTarefas] = useState('TAREFAS')

  return(
    <UserContext.Provider value={{Tarefas,SetTarefas}}>
      {children}
       
    </UserContext.Provider>
  )
}

export default UserProvider;