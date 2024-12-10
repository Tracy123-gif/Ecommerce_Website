import React, {useState, createContext} from 'react'



export const sidebarContext = createContext()


const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    {console.log(isOpen)}
  

    const handleClose =()=>{
        setIsOpen(false)
        console.log(isOpen);
    }
    {console.log(isOpen)}
  return <sidebarContext.Provider value={{isOpen, setIsOpen, handleClose}}>{children}</sidebarContext.Provider>
  
  
}

export default SidebarProvider
