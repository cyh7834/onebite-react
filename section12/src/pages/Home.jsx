import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import usePageTitle from "../hooks/UsePageTitle";

const getMonthlyData = (pivotDate, data) => {
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime();

    return data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime)
}
const Home = () => {
    const [pivotDate, setPivotDate] = useState(new Date());
    const data = useContext(DiaryStateContext);
    const monthlyData = getMonthlyData(pivotDate, data);

    usePageTitle("감정 일기장");
    
    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    };

    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    };

    return (
    <div>
        <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
            leftChild={<Button onClick={onDecreaseMonth} text={"<"}></Button>}
            rightChild={<Button onClick={onIncreaseMonth} text={">"}></Button>}
        ></Header>
        <DiaryList data={monthlyData}></DiaryList>
    </div>
    );
};

export default Home;