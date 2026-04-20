import type {ReactNode} from "react";
import type {ICharacter} from "../../models/ICharacter.ts";
import './CharacterComponent.css'

interface ICharacterComponentProps{
    item: ICharacter
    children?: ReactNode; // Спеціальний проп для опису (info)
}

const CharacterComponent = ({item, children}: ICharacterComponentProps) => {
    return (
        <div className="my-10 border-2">
            <h2 className='text-2xl'>{item.name} {item.surname}</h2>
            <img src={item.photo} alt={item.name}/>
            <p>{children}</p>
        </div>
    );
};

export default CharacterComponent;