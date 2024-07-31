import React, { createContext, useState } from 'react'

export const ReloadContext = createContext();

const ReloadContextProvider = ({children}) => {
  const [reload,setReload] = useState(false)
  return (
    <ReloadContext.Provider value={{reload,setReload}}>
      {children}
    </ReloadContext.Provider>
  )
}



export default ReloadContextProvider
