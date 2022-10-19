import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { EditingCard } from "../components/edit-task";
const EditingPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const title = useSelector((state) => state.TitleReducer.title);
  const handleChangeTitle = (text) => {
    dispatch({
        type:"CHANGETITLE",
        payload:text,
    })
  };
  return <EditingCard ChangeTitle={handleChangeTitle}/>;
};

export default EditingPage;
