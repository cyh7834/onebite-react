import './TodoItem.css'
import { memo } from 'react';

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {
    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onClickDeleteButton = () => {
        onDelete(id);
    }

    return <div className="TodoItem">
        <input onChange={onChangeCheckbox} readOnly checked={isDone}type="checkbox" />
        <div className='content'>{content}</div>
        <div className='date'>{new Date(date).toLocaleDateString()}</div>
        <button onClick={onClickDeleteButton}>삭제</button>
    </div>;
};

// 객체 타입의 props를 전달받는 컴포넌트는 memo 해도 소용없음
// memo만 사용할거면 두번 째 콜백함수에서 props를 수동으로 검증해야 함
// export default memo(TodoItem, (prevProps, nextProps) => {
//     // Ture -> 리렌더링 안함
    
//     if (prevProps.id !== nextProps.id) return false;
//     if (prevProps.isDone !== nextProps.isDone) return false;
//     if (prevProps.content !== nextProps.content) return false;
//     if (prevProps.date !== nextProps.date) return false;

//     return true;
// });

export default memo(TodoItem);