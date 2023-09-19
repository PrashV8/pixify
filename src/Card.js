import React from "react"

export default function Card(props){
    console.log(props)
   let badgeText
   if(props.openSpots===0){
    badgeText="SOLD OUT"
   }
   else if (props.location ==="Online"){
    badgeText="ONLINE"
   }

    return(
<div className="card">
{badgeText && <div className="card--badge">{badgeText}</div>}

 <img src={`./images/${props.coverImg}`} alt="icon" className="card--images"/>
<div className="card--stats">
<img src="./images/star.png" alt="icon" className="card--star"/>
<span >{props.stats.rating}</span>
<span className="grey"> ({props.stats.reviewcount}) • </span>
<span className="grey"> {props.location} </span>
</div>


<p className="card--title">{props.Title}</p>
<p className="card--price"> <strong>from ${props.price}</strong> / person</p>
 </div>

    )
}