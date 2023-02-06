import styled from 'styled-components';

export const Box = styled.div`
  padding: 20px;
`;

export const BoxStyle = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px 15px;
  list-style: none;
`;

export const BoxStyleLi = styled.li`
  width: 100%;
  height: 400px;
  flex-basis: calc(100% / 5 - 15px);
  padding: 5px;
  color: black;
  background: #fbf9fa3f;
  font-size: 16px;
  border-radius: 5px;
`;

export const BoxStyleImg = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
`;

export const BoxStyledText = styled.p`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
  color: black;
`;
