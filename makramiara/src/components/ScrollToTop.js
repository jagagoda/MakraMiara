import React, {useEffect, useState} from 'react';
import { useWindowScroll } from 'react-use';
import { AiOutlineArrowUp } from 'react-icons/ai';
import styled from 'styled-components';

const Scroll = styled.div`
  position: fixed;
  bottom: 3%;
  right: 2%;
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background-color: transparent;
  z-index: 1;
  color: #E8505B;
  text-align: center;
  display: flex;
  align-items: center;
  cursor: pointer;
 
}
.icon {
  width: 10rem;
  text-align: center;
  font-weight: bold;
  font-size: 4rem;
}

@keyframes scrollTop {
  from {
    transform: translateY(2px);
  }
  to {
    transform: translateY(-1px);
  }
}

`;
const ScrollToTop = () => {
const { y: pageYOffset } = useWindowScroll();
const [visible, setVisibility] = useState(false);

useEffect(() => {
    if (pageYOffset > 200) {
        setVisibility(true)
    }else {
        setVisibility(false);
    }
},[pageYOffset]);

const scrollToTop = () => window.scrollTo({top: 0, behavior: "smooth"});
if (!visible) {
    return false;
}
    return (
        <Scroll className="scroll"
            onClick={scrollToTop}>
           <AiOutlineArrowUp className="icon"/>
        </Scroll>
    );
};

export default ScrollToTop;
