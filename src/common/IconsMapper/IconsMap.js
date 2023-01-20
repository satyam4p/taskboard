import { SaveOutlined,
    ShareAltOutlined,
    EditOutlined,
    CloseCircleOutlined,
    MoreOutlined,
    FieldTimeOutlined,
    UserAddOutlined,
    TagsOutlined,
    AlertOutlined,
    LoadingOutlined
} from '@ant-design/icons';

const iconsMap = (()=>{
    return {
        save: ()=>{
            return <SaveOutlined style={{ fontSize:'20px' }}></SaveOutlined>
        },
        share: ()=>{
            return <ShareAltOutlined style={{ fontSize:'20px' }}></ShareAltOutlined>
        },
        edit: ()=>{
            return <EditOutlined style={{ fontSize:'20px' }}></EditOutlined>
        },
        close: ()=>{
            return <CloseCircleOutlined style={{ fontSize:'20px' }}></CloseCircleOutlined>
        },
        more: ()=>{
            return <MoreOutlined style={{ fontSize:'20px' }}></MoreOutlined>
        },
        time: ()=>{
            return <FieldTimeOutlined style={{ fontSize:'20px' }}></FieldTimeOutlined>
        },
        user: ()=>{
            return <UserAddOutlined style={{ fontSize:'20px' }}></UserAddOutlined>
        },
        tag: ()=>{
            return <TagsOutlined style={{ fontSize:'20px' }}></TagsOutlined>
        },
        alert : ()=>{
            return <AlertOutlined style={{ fontSize:'20px' }}></AlertOutlined>
        },
        loading: ()=>{
            return <LoadingOutlined spin style={{ fontSize:'20px' }}></LoadingOutlined>
        }
    }
})();

export default iconsMap;