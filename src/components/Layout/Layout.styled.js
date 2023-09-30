import { styled } from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 135px);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.span`
  --color-1: #ce71a1;
  --color-2: #49da5b;
  --color-3: #008c7a;

  animation: color-animation 4s linear infinite;

  @keyframes color-animation {
    0% {
      color: var(--color-1);
    }
    32% {
      color: var(--color-1);
    }
    33% {
      color: var(--color-2);
    }
    65% {
      color: var(--color-2);
    }
    66% {
      color: var(--color-3);
    }
    99% {
      color: var(--color-3);
    }
    100% {
      color: var(--color-1);
    }
  }
`;

export const Description = styled.p`
  margin-top: 12px;
  font-size: 24px;
`;
