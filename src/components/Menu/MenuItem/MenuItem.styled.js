import styled from 'styled-components';

export const StyledMenuItem = styled.div`
  height: 100vh;
  width: 30vw;
  position: absolute;
  top: 0;
  left: 0;
  padding: 100px 0;
  background-color: white;
  transition: all 0.75s ease-in-out;
  border-right: 1px solid rgb(204 204 204 / .5);
  transform: ${({ openChildNav }) => openChildNav ? 'translateX(100%)' : 'translateX(30%)'};
  opacity: ${({ openChildNav }) => openChildNav ? '1' : '0'};
  visibility: ${({ openChildNav }) => openChildNav ? 'visible' : 'hidden'};

  li {
    display: ${({ openChildNav }) => openChildNav ? 'list-item' : 'none'};
  }

`;