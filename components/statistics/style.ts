import styled from "@emotion/styled";

export const StatisticsWrap = styled.div`
  width: 80%;
  margin: 48px auto;
  padding-bottom: 80px;
  > div {
    display: flex;
    margin: 24px 0;
    .chart-wraps {
      flex: 1;
      margin: 0 8px;
      padding: 0 8px;
      border-radius: 8px;
      background: white;
      box-shadow: 0 3px 5px var(--border-color);
      box-sizing: border-box;
      background-color: var(--background-color);
      &:first-of-type {
        flex: 20% 0 0;
        padding: 24px 0%;
        text-align: center;
        > p {
          color: var(--color);
        }
        > h1 {
          margin-top: 24px;
          color: var(--color);
          font-size: 32px;
        }
      }
      > div > svg {
        overflow: visible !important;
      }
    }
  }
`;
