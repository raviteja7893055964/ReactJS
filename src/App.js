
import React from "react";
// let title = "Mission Majnu";
// let imgURL = "https://occ-0-2040-2164.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABXtqh5jAR4nFJcA7HqurD6uI2cKvfhzsAAJauEoWi6x0VhmOCwc3jVrm07buUQyCtSaR0nDa9r0biHPmIAu54zB5Zj9db08A8uMBagUwgh31DUV8-LxJWOD-5Ng1BWcFuXVn.jpg?r=f89";
// let description = "a person or thing that is unknown, unidentified, or suspiciously out of place. a person or thing that is odd or unpredictable.";
// creating object 
const data = [
    {
        title: "Mission Majnu",
        imgURL: "https://occ-0-2040-2164.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABXtqh5jAR4nFJcA7HqurD6uI2cKvfhzsAAJauEoWi6x0VhmOCwc3jVrm07buUQyCtSaR0nDa9r0biHPmIAu54zB5Zj9db08A8uMBagUwgh31DUV8-LxJWOD-5Ng1BWcFuXVn.jpg?r=f89",
        description : "a person or thing that is unknown, unidentified, or suspiciously out of place. a person or thing that is odd or unpredictable."
    },
    {
        title: "Extraction 2",
        imgURL: "https://occ-0-2040-2164.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABSWevXq-2HZjLz10nifg7t5eH4RqaVlnnDaCELyXFmw0oLvntZBXngdglBl5Iz7iuz43_W6lI0_96zmgIHIUMLMK8oUq5zfO9vyUFmFiXMVjKeSV17SbCayGl0M06QAsU0Wx.jpg?r=a98",
        description:  "American action thriller film directed by Sam Hargrave and written by Joe Russo."
    }
]
function MyFun() {
    let tempArr = data.map((eachobj) => {
        // descructuring below line 
        const {title, imgURL, description} = eachobj;
        return(
            <article>
            <h1>{title}</h1>
            <img src={imgURL} alt="Raviteja ponnam" />
            <p>{description}</p>
            </article>

        )
    }); 
    return tempArr;   
//     return (
//         <section className="movie-container">
//             <Movie title={data[0].title} img={data[0].imgURL} desc={data[0].description}/>
//             <Movie title={data[1].title} img={data[1].imgURL} desc={data[1].description}/>
// </section>
        
//     );
}
// const Movie = (props) => {
//     return(
// <article className="each-movie">
//     <img src={props.imgURL}  alt="raviteja" />
//     <h1>{props.title}</h1>
//     <p>{props.description}</p>
// </article>
//     );
// }
export default MyFun;
