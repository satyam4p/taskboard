import { createContext, useState } from "react";

const ModalContext = createContext({});

export const ModalProvider =({children})=>{

    const [modalType, setModalType] = useState(null);
    const [isVisible, setVisible] = useState(false);
    return(
        <ModalContext.Provider value={{modalType, setModalType, isVisible, setVisible}} >
            { children }
        </ModalContext.Provider>
    )
}

export default ModalContext;