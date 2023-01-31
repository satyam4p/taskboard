import { SaveOutlined,
    ShareAltOutlined,
    EditOutlined,
    CloseCircleOutlined,
    MoreOutlined,
    FieldTimeOutlined,
    UserAddOutlined,
    TagsOutlined,
    AlertOutlined,
    LoadingOutlined,
    FileAddOutlined,
    DeleteOutlined,
    UserOutlined,
    SendOutlined,
    ClearOutlined,
    DoubleRightOutlined
} from '@ant-design/icons';

const iconsMap = (()=>{
    let style = {
        fontSize: '20px',
        fontWeight:'800'
    }
    return {
        save: ( size = 20, weight = 800 )=>{
            return <SaveOutlined style={{fontSize:`${size}px`, fontWeight:`${weight}`}}></SaveOutlined>
        },
        share: (size = 20, weight = 800)=>{
            return <ShareAltOutlined style={{fontSize:`${size}px`, fontWeight:`${weight}`}}></ShareAltOutlined>
        },
        edit: ( editEnabled = false, size = 20, weight = 800 )=>{
            const newStyle = editEnabled ? { fontSize:`${size}px`, fontWeight:`${weight}`, color: '#6B8B65'} : {fontSize:`${size}px`, fontWeight:`${weight}`}; 
            return <EditOutlined style={newStyle}></EditOutlined>
        },
        close: (size = 20, weight = 800)=>{
            return <CloseCircleOutlined style={{fontSize:`${size}px`, fontWeight:`${weight}`}}></CloseCircleOutlined>
        },
        more: (size = 20, weight = 800)=>{
            return <MoreOutlined style={{fontSize:`${size}px`, fontWeight:`${weight}`}}></MoreOutlined>
        },
        time: (size = 20, weight = 800)=>{
            return <FieldTimeOutlined style={{fontSize:`${size}px`, fontWeight:`${weight}`}}></FieldTimeOutlined>
        },
        user: (size = 20, weight = 800)=>{
            return <UserAddOutlined style={{fontSize:`${size}px`, fontWeight:`${weight}`}}></UserAddOutlined>
        },
        tag: (size = 20, weight = 800)=>{
            return <TagsOutlined style={{fontSize:`${size}px`, fontWeight:`${weight}`}}></TagsOutlined>
        },
        alert : (size = 20, weight = 800)=>{
            return <AlertOutlined style={{fontSize:`${size}px`, fontWeight:`${weight}`}}></AlertOutlined>
        },
        loading: (size = 20, weight = 800)=>{
            return <LoadingOutlined spin style={{fontSize:`${size}px`, fontWeight:`${weight}`}}></LoadingOutlined>
        },
        create: (size = 20, weight = 800)=>{
            return <FileAddOutlined style={{fontSize:`${size}px`, fontWeight:`${weight}`}}></FileAddOutlined>
        },
        delete: (size = 20, weight = 800)=>{
            return <DeleteOutlined style={{fontSize:`${size}px`, fontWeight:`${weight}`}}></DeleteOutlined>
        },
        profile: (size = 20, weight = 800)=>{
            return <UserOutlined style={{fontSize:`${size}px`, fontWeight:`${weight}`}}></UserOutlined>
        },
        send: ( size = 20, weight = 800 )=>{

            return <SendOutlined style={{fontSize:`${size}px`, fontWeight:`${weight}`}}></SendOutlined>
        },
        editNormal: (size = 20, weight = 800)=>{
            return <EditOutlined style={{fontSize:`${size}px`, fontWeight:`${weight}`}}></EditOutlined>
        },
        clear: (size = 20, weight = 800)=>{
            return <ClearOutlined style={{fontSize:`${size}px`, fontWeight:`${weight}`}}></ClearOutlined>
        },
        doubleRightArror: (size = 20, weight = 800)=>{
            return <DoubleRightOutlined style={{fontSize:`${size}px`, fontWeight:`${weight}`}}></DoubleRightOutlined>
        },
    }
})();

export default iconsMap;