import React from "react"
//import "./style.css"
  import Navbar from "./Navbar"
  import Main from "./Main"
 import Card from "./Card"
 import './App.css';
import dataset from "./data.js"
// import Contact from "./Contact"

console.log(dataset)
export default function App() {
 
   const cards=dataset.map((data) =>{
return (

  <Card 
  key={data.id}
{...data}
  />

  ) }
  
  )

 return (
  <div  >
  <Navbar/>
  <Main/>
<section className="cards-list">
{cards}
</section>
  </div>
 ) ;  
}


//testing leave this part
//  return (

  
//     <div className="App">
//      <Navbar/>
//     <Main/>
//     <Card
//     img="Rui.png"
//     rating="5.0"
//     reviewCount={6}
//     Country="India"
//     title="Life Lessons with Dutee Chand"
//     price={136}
//     /> 


// <span>
//   <Card
//     img="Rui.png"
//     rating="5.0"
//     reviewCount={6}
//     Country="India"
//     title="Life Lessons with Dutee Chand"
//     price={136}
//     /> 
//     <Card
//     img="Rui.png"
//     rating="5.0"
//     reviewCount={6}
//     Country="India"
//     title="Life Lessons with Dutee Chand"
//     price={136}
//     /> 
//     <Card
//     img="Rui.png"
//     rating="5.0"
//     reviewCount={6}
//     Country="India"
//     title="Life Lessons with Dutee Chand"
//     price={136}
//     />
// </span>


//      </div>
//        )
//       }
      
      
    // <h1> GOOD { timeofDay}!</h1>
/* <div>
    <div className="contacts">
      <img src="./images/cata.jpg" alt="catimages"/>
<h3>Mr. Whiskerson</h3>
<div className="info-group">
  <img src="./images/call.png" alt="iconcall"/>
  <p>(+91) 9384123412</p>
</div>
<div className="info-group">
  <img src="./images/mes.png" alt="iconcall"/>
  <p>mr.whisKaz@catnap.meow</p>
</div>
    </div>



    <div className="contacts">
      <img src="./images/catb.jpg" alt="catimages"/>
<h3>Mr. Whiskerson</h3>
<div className="info-group">
  <img src="./images/call.png" alt="iconcall"/>
  <p>(+91) 9384123412</p>
</div>
<div className="info-group">
  <img src="./images/mes.png" alt="iconcall"/>
  <p>mr.whisKaz@catnap.meow</p>
</div>
    </div>


    <div className="contacts">
      <img src="./images/catc.jpg" alt="catimages"/>
<h3>Mr. Whiskerson</h3>
<div className="info-group">
  <img src="./images/call.png" alt="iconcall"/>
  <p>(+91) 9384123412</p>
</div>
<div className="info-group">
  <img src="./images/mes.png" alt="iconcall"/>
  <p>mr.whisKaz@catnap.meow</p>
</div>
    </div>


    <div className="contacts">
      <img src="./images/catd.jpg" alt="catimages"/>
<h3>Mr. Whiskerson</h3>
<div className="info-group">
  <img src="./images/call.png" alt="iconcall"/>
  <p>(+91) 9384123412</p>
</div>
<div className="info-group">
  <img src="./images/mes.png" alt="iconcall"/>
  <p>mr.whisKaz@catnap.meow</p>
</div>
    </div>


</div> */

  //   <div className="contacts"> 
    
  //     <Contact  
  // img ="./images/cata.jpg" 
  //       name="Mr. whiskerson"
  //       Phone="(+91) 9217823726"
  //       Mail="mr.whiskaz@catnap.com"
  //     />
  //     <Contact 
  //     img ="./images/catb.jpg" 
  //        name="oye hoye"
  //        Phone="(+91) 9217823727"
  //        Mail="mr.oyehoe@panjabi.com"
  //     />
  //     <Contact 
  //       img ="./images/catc.jpg"
  //        name="lala"
  //        Phone="(+91) 9217823728"
  //        Mail="lala@llund.com"
  //     />
  //     <Contact
  //         img ="./images/catd.jpg"
  //       name="buba"
  //       Phone="(+91) 9217823729"
  //       Mail="mrbuba@boobs.com"
  //     />
  //   </div>


// const date= new Date()
// const hours=date.getHours()
// let timeofDay;

// if(hours<12){
//   timeofDay = "morning"
// }else if(hours >=12 && hours<17){
//   timeofDay="afternoon"
// }
// else{
//   timeofDay="night"

