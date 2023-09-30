import { styled } from 'styled-components';

export const List = styled.ul`
  margin-top: 16px;
  padding: 0 20px;
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  color: #003306;
`;

export const Text = styled.p`
  margin-right: 16px;
`;

export const Button = styled.button`
  background: #fff;
  backface-visibility: hidden;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  display: inline-block;
  color: #111827;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 10px 12px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transform: translateZ(0) scale(1);
  transition: transform 0.5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:not(:disabled):hover {
    transform: scale(1.05);
  }

  &:not(:disabled):hover:active {
    transform: scale(1.05) translateY(0.125rem);
  }

  &:focus {
    outline: 0 solid transparent;
  }

  &:focus:before {
    content: '';
    left: calc(-1 * 0.375rem);
    pointer-events: none;
    position: absolute;
    top: calc(-1 * 0.375rem);
    transition: border-radius;
    user-select: none;
  }

  &:focus:not(:focus-visible) {
    outline: 0 solid transparent;
  }

  &:focus:not(:focus-visible):before {
    border-width: 0;
  }

  &:not(:disabled):active {
    transform: translateY(0.125rem);
  }
`;
