import { Name } from "./Person.types"

type PersonListProps = {
    names: Name[]
}


export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {/* {props.names.map((names) => {
                return (
                    <h2 key={names.id}>{names.id} {names.first} {names.last}</h2>
                );
            })} */}
            { props.names.map( (names) => 
                <h2 key={names.id}>{names.first} {names.last}</h2> 
            )};
        </div>
    );
};
 
   
  
