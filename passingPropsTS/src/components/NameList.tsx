import React from 'react'

type NameListProps = {
    namesList: {
        id: number;
        first: string;
        last: string;
    }[]
}

export const NameList = (props: NameListProps) => {
  
    return (
        <>
            {props.namesList.map( (names) => {
                return(
                    <h2 key={names.id}>{names.first} {names.last}</h2>
                );
            } )}
        </>
    )
}

