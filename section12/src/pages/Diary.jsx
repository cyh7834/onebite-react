import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/UseDiary";
import { getStringedDate } from "../util/get-stringed-date";
import usePageTitle from "../hooks/UsePageTitle";

const Diary = () => {
    const params = useParams();
    const nav = useNavigate();
    const curDiaryItem = useDiary(params.id);

    usePageTitle(`${params.id}번 일기`);
    
    if (!curDiaryItem) {
        return <div>데이터 로딩중...!</div>
    }

    const {createdDate, emotionId, content} = curDiaryItem;
    const title = getStringedDate(new Date(createdDate));

    return <div>
        <Header title={title}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"}></Button>}
        rightChild={<Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} type={""}></Button>}></Header>
        <Viewer emotionId={emotionId} content={content}></Viewer>
    </div>;
}

export default Diary;