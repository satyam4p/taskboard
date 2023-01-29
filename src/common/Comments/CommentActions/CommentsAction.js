import { useContext } from 'react';
import TaskContext from '../../Modals/Task/TaskContext/TaskProvider';
import './stylesheet.scss'
import iconsMap from '../../IconsMapper/IconsMap';
import { Popover } from 'antd';
import useComments from '../../../helpers/hooks/useComments';
import useAuth from '../../../helpers/hooks/useAuth';
import { selectCurrentTask } from '../../../features/task/taskSlice';
import { useSelector } from 'react-redux';
const CommentActions = () => {
    const [loading, post, deleteComment, edit] = useComments();
    const { auth } = useAuth();
    const {task, setTask} = useContext(TaskContext);
    const currenTask = useSelector(selectCurrentTask);
    const handlePost = ()=>{
        
        const {_id, username} = auth?.user;
        const user = {
            username,
            userId: _id
        }
        const body = task?.userComment;
        const taskId = currenTask._id;
        const payload = {
            user,
            body,
            taskId
        }
        post(payload);
        
    }

    return (
        <div className="comments-actions-container">
            <button onClick={handlePost}>
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