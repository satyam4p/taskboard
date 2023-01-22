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
    DeleteOutlined
} from '@ant-design/icons';

let style = {
    fontSize: '20px',
    fontWeight:'800'
}

const iconsMap = (()=>{
    return {
        save: ()=>{
            return <SaveOutlined style={style}></SaveOutlined>
        },
        share: ()=>{
            return <ShareAltOutlined style={style}></ShareAltOutlined>
        },
        edit: ( editEnabled = false )=>{
            const newStyle = editEnabled ? {...style, color: '#6B8B65'} : {...style}; 
            return <EditOutlined style={newStyle}></EditOutlined>
        },
        close: ()=>{
            return <CloseCircleOutlined style={style}></CloseCircleOutlined>
        },
        more: ()=>{
            return <MoreOutlined style={style}></MoreOutlined>
        },
        time: ()=>{
            return <FieldTimeOutlined style={style}></FieldTimeOutlined>
        },
        user: ()=>{
            return <UserAddOutlined style={style}></UserAddOutlined>
        },
        tag: ()=>{
            return <TagsOutlined style={style}></TagsOutlined>
        },
        alert : ()=>{
            return <AlertOutlined style={style}></AlertOutlined>
        },
        loading: ()=>{
            return <LoadingOutlined spin style={style}></LoadingOutlined>
        },
        create: ()=>{
            return <FileAddOutlined style={style}></FileAddOutlined>
        },
        delete: ()=>{
            return <DeleteOutlined style={style}></DeleteOutlined>
        }
    }
})();

export default iconsMap;