import React, { useState } from 'react';
import List from './list'
function Box()
{
    let [s1,s2]=useState();
    var [S3,s4]=useState([]);
    function f1(e)
    {
        s2(e.target.value);
    }
    function f2()
    {
        document.getElementsByTagName('input')[0].value='';
        s4((val)=>{
            return[...val, s1];
        })
    }
    function dlt(e)
    {
        s4((val)=>{
            return val.filter((val1,ind)=>{
                if(e.target.id!=ind)
                {
                    return val1;
                }
            })
        })
    }
    return(
        <>
        <div className="box1">
            <input onChange={f1} type="text" name="i1"/>
            <span  onClick={f2} className="material-icons plus">
            add_circle
            </span>
        </div>
            <ul>
                {S3.map((item,ind)=>{
                    return <List df={dlt} ids={ind} item1={item}/>;
                })}
            </ul>
        </>
    )
}
export default Box;