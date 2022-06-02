import Description from "./Description";
import Image from "./Image";
import { useDispatch, useSelector } from "react-redux";

const Character = (props) => {
    const data = props.data;
    const modalWindow = useSelector((info) => info.modalWindowVisible);
    const dispatch = useDispatch();

    const showDescriptionHandler = () => {
        dispatch({
            type: 'TOGGLE',
            payload: !modalWindow,
        })
    }
    
    return (
        <div className="character-container" onClick={showDescriptionHandler}>
            <Image image={data.image} onClick={showDescriptionHandler} />
            {modalWindow && <Description data={data} />}
        </div>
    )
}

export default Character;