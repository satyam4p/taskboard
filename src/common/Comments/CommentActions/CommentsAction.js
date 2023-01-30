import { useContext } from 'react';
import TaskContext from '../../Modals/Task/TaskContext/TaskProvider';
import './stylesheet.scss'
import iconsMap from '../../IconsMapper/IconsMap';
import { Popover } from 'antd';
import useComments from '../../../helpers/hooks/useComments';
import useAuth from '../../../helpers/hooks/useAuth';
import { selectCurrentTask } from '../../../features/task/taskSlice';
import { useSelector } from 'react-redux';
import moment from 'moment';

const CommentActions = (props) => {
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
            taskId,
        }
        post(payload);
        props.setValue('');

    }

    const handleClear =()=>{
        props.setValue('');
    }

    return (
        <div className="comments-actions-container">
            <button disabled = {!props.actionsEnabled} onClick={handlePost} className="action-btn">
                {iconsMap.send(16, 500)} Send
            </button>
            <button disabled = {!props.actionsEnabled} onClick={handleClear} className="action-btn">
                {iconsMap.clear(16, 500)} Clear
            </button>
        </div>
    )

}

export default CommentActions;