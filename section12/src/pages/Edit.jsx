import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/UseDiary";
import usePageTitle from "../hooks/UsePageTitle";

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
    const curDiaryItem = useDiary(params.id);
    
    usePageTitle(`${params.id}번 일기 수정`);
    
    const onSubmit = (input) => {
        if (window.confirm("일기를 정말 수정할까요?")) {
            onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
            nav('/', {replace: true});
        }
    };

    const onClickDelete = () => {
        if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
            onDelete(params.id);
            nav('/', {replace: true});
        }
    }

    return <div>
        <Header title={"일기 수정하기"}
            leftChild={<Button onClick={()=> nav(-1)} text={"< 뒤로가기"}></Button>}
            rightChild={<Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"}></Button>}>
            </Header>
            <Editor onSubmit={onSubmit} initData={curDiaryItem}></Editor>
    </div>;
}

export default Edit;