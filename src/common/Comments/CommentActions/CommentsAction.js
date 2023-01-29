

import './stylesheet.scss'
import iconsMap from '../../IconsMapper/IconsMap';
import { Popover } from 'antd';
import useComments from '../../../helpers/hooks/useComments';


const CommentActions = () => {
    const [loading, post, deleteComment, edit] = useComments();
    

    return (
        <div className="comments-actions-container">
            <button onClick={()=>post()}>
                {iconsMap.send(16, 500)}
            </button>
            <button>
                {iconsMap.editNormal(16, 500)}
            </button>
            <button>
                {iconsMap.delete(16, 500)}
            </button>
        </div>
    )

}

export default CommentActions;