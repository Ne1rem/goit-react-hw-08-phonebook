import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const Form = styled.form`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  width: 100%;
  font-size: 20px;
  display: flex;
  flex-direction: column;

  margin-top: 20px;

  color: #3b3b3b;
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px 16px;
  border: 1px solid silver;
  border-radius: 10px;
  outline: none;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  margin-top: 8px;

  &:focus-within {
    border: 2px solid #198f27a3;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
`;

export const Button = styled.button`
  min-width: 200px;
  padding: 20px 15px;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  border: none;
  outline: none;
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  background-color: #222;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  

  &:before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  @keyframes glowing-button {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;

export const Title = styled.h2`
  margin-top: 32px;
  color: #003306;
`;

export const Link = styled(NavLink)`
  color: #0043ff;
  &:hover {
    color: #003306;
  }
`;
