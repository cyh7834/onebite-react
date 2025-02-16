import './List.css'
import TodoItem from './TodoItem';
import { useState, useMemo } from 'react'

const List = ({ todos, onUpdate, onDelete }) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilteredData = () => {
        if (search === "") {
            return todos;
        }

        return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
    }

    const filteredTodos = getFilteredData();

    // todo가 추가, 삭제, 수정될 때만 수행되어야 하지만 그 외에 기능에서도 수행되어서
    // 낭비가 발생함

    const {totalCount, doneCount, notDoneCount} = useMemo(() => {
        // 배열에 포함된 값이 수정되었을 때 수행됨
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount
        }
    }, [todos])

    return (<div className='List'>
        <h4>Todo List 🎉</h4>
        <div>
            <div>
            total : {totalCount}
            </div>
            <div>
            done: {doneCount}
            </div>
            <div>
            notDone: {notDoneCount}
            </div>
        </div>
        <input value={search} onChange={onChangeSearch} placeholder='검색어를 입력하세요' />
        <div className='todos_wrapper'>
            {filteredTodos.map((todo) => {
                return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}></TodoItem>
            })}
        </div>
    </div>
    );
};

export default List;