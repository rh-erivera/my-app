import styled from 'styled-components';

function template(i) {
  return `
      div:nth-child(${i}) li {
        animation-delay: calc((${i} * 70ms) + 50ms);
      }
    `;
}

function getAnimations(index) {
  let str = '';
  for (let i = 1; i <= index; i += 1) {
      str += template(i)
  }
  return str;
}

export const StyledMenu = styled.nav`
  height: 100vh;
  width: 30vw;
  position: absolute;
  top: 0;
  left: 0;
  padding: 100px 0;
  background-color: white;
  transition: transform 0.5s ease-in-out;
  border-right: 1px solid rgb(204 204 204 / .5);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  ${getAnimations(15)}

  // section {
  //   border-bottom: 1px solid rgb(204 204 204 / .5);
  //   padding: 30px 0;
  // }

  .my-account {
    font: 400 14px/20px BaronSans, Helvetica, Arial;
    letter-spacing: 1px;
    color: #666;
  }

  .footer-links li {
    background-color: rgb(250, 250, 250);
    font: 400 14px/20px BaronSans, Helvetica, Arial;
    color: #666;
    letter-spacing: 1px;
  }

  li {
    list-style: none;
    font: 300 18px/20px BaronSans, Helvetica, Arial;
    letter-spacing: 1.5px;
    animation: fade-in 1000ms ease forwards, slide-in-right 1000ms ease forwards;
    opacity: 0;
    padding: 15px 40px;
    word-break: break-word;
    display: ${({ open }) => open ? 'list-item' : 'none'};
    span:before {
      content: '\\2022';
      opacity: 0;
      position: absolute;
      left: 15px;
      transition: opacity 0.3s ease-in-out;
      color: black;
    }
    span:hover:before {
      opacity: .6;
    }
  }

  .uppercase {
    text-transform: uppercase;
  }

  .shop {
    background: #fafafa;
    margin-bottom: 2px;
  }

  .active:before {
    opacity: .6;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes slide-in-right {
    0% {
      transform: translate(-15px, 0);
    }
    100% {
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      transform: translate(0, 0);
    }
  }
  
`;