import {useState, useEffect} from 'react';
import useModals from './useModals';

const useActions=()=>{
    const { isVisible, setVisible, modalType, setModalType } = useModals();
    console.log("setModalType:: ",isVisible, "modalType:: ",modalType, "setVisible:: ",setVisible);
    const execute=({type, action})=>{
        switch (action){
            case 'create':
                setModalType(type);
                setVisible(!isVisible);
            default:
                return;
        }
    }
    return execute;

}

export default useActions;
