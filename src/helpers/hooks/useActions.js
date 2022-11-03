import {useState, useEffect} from 'react';
import useModals from './useModals';


const useActions=()=>{
    const { modalType, setModalType } = useModals();
    console.log("modalType:: ",modalType);
    const execute=({type, action})=>{
        switch (action){
            case 'create':
                setModalType((prevModal)=>{
                    if(prevModal.type !== type){
                        return{
                            isVisible: true,
                            type: type    
                        }
                    }
                    return {
                        isVisible: !prevModal.isVisible,
                        type
                    }
                });
            default:
                return;
        }
    }
    return execute;
}

export default useActions;
