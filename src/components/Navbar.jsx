
// export default function Navbar(){
//     return <nav className = "nav">
//         <a href ="/navbar" className="site-title">Book Verse</a>
//         <ul>
//             <li className="active">
//                 <a href="/cart">Cart</a>
//             </li>
//         </ul>
//     </nav>
// }

import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  background-color: skyblue;
  height:60px;
`
const Wrapper = styled.div`
padding:10px 20px;
display:flex;

`

const Left = styled.div``

const Navbar=() =>{
    return(
        <Container>
            <Wrapper><Navbar/></Wrapper>
            
        </Container>
    );
};
export default Navbar