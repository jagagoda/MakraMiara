// import React, {useEffect, useState} from 'react';
// import styled from 'styled-components';
// import MoonImg from '../images/ksiezyc.png';
// import axios from 'axios';
//
// const SectionMoon = styled.div`
//   width: 100%;
//   height: 80vh;
//   background-color: #F0E0ED;
//
// `;
//
// const MoonBox = styled.div`
//   width: 100%;
//   background-color: #F0E0ED;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   font-family: 'Hind', sans-serif;
//   font-size: 2rem;
//   color: #256a05;
//   padding-top: 30px;
//
//   h2 {
//     margin-top: 50px;
//     text-align: center;
//   }
//
//   img {
//     margin-top: 70px;
//     margin-bottom: 15px;
//     padding: 20px;
//     width: 20%;
//     height: 20%;
//   }
//
//   button {
//     background-color: #256a05;
//     padding: 10px 30px;
//     border-radius: 1rem;
//     color: white;
//     font-family: 'Hind', sans-serif;
//     border: none;
//     font-size: 1.3rem;
//   }
// `;
//
//
// const Moon = () => {
// };
// //     const url = 'https://moon-phase.p.rapidapi.com/moon_phase?raw=true';
// //     let [moonPhase, setMoonPhase] = useState(null);
// //
// //     useEffect(() => {
// //         axios.get(url)
// //             .then(response => {
// //                 setMoonPhase(response.data)
// //             })
// //         // "method": "GET",
// //         // "headers": {
// //         //     "x-rapidapi-key": "315d574e60mshfe3ddfb319326e4p1937aajsnfb7a393b2613",
// //         //     "x-rapidapi-host": "moon-phase.p.rapidapi.com"
// //         // }
// //     }, [url])
// // //             .then(response => response.json())
// //             .then(response => {
// //                 console.log(response.results);
// //                 return response;
// //             })
// //             .then(res => setMoonPhase([...res.results]))
// //             .catch(err => {
// //                 console.error(err);
// //             },[]);
// // if(moonPhase) {
// //     return (
// //         <div>
// //             {moonPhase}
// //         </div>
// //     )
//
//     return (
//         <SectionMoon>
//             <MoonBox>
//                 <h2>Czy to korzystny czas na wyplatanie lub szukanie inspiracji?</h2>
//                 <img src={MoonImg} alt="księżyc"/>
//                 <button>Sprawdź fazę księżyca!</button>
//             </MoonBox>
//         </SectionMoon>
//     );
// };
//
// export default Moon;
