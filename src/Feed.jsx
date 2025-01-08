import React from "react";

function Feed(props)
{
    const date = new Date(props.date);
    const options = {year: 'numeric', month: 'long', day: 'numeric',hour: '2-digit', minute: '2-digit', second: '2-digit'};
    const formattedDate = date.toLocaleDateString('en-IN', options);
    console.log(props.date);
    return <div className="Feed-container">
        <a className="Feed-title" href={props.link}>{props.title}</a>
        <p className="Feed-date">{formattedDate}</p>
    </div>
}

export default Feed;