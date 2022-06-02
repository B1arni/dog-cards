import Character from "./Character";
import { useSelector } from "react-redux";

const Alternative = () => {
    const characterInfo = useSelector((info) => info.data)
    const [firstCharacter, secondCharacter, thirdCharacter] = characterInfo;
    
    return (
        <div className="characters-container">
           <Character data={firstCharacter} />
           <Character data={secondCharacter} />
           <Character data={thirdCharacter} />
        </div>
    )
}

export default Alternative;