import React, { useState } from 'react';
function List(props)
{
    return(<li>
        <p className="text">{props.item1}</p>
        <span onClick={props.df} id={props.ids} className="material-icons dlt">
            delete
        </span>
    </li>
    )
}
export default List;