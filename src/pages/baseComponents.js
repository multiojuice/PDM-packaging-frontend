import styled from 'styled-components';

export const RowFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RowFlexClose = styled.div`
  display: flex;
`;

export const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: grey;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.a`
  padding: 15px 30px;
  border: 1px solid blue;
  border-radius: 4px;
  margin: 15px;
`;

export const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 80%;
  margin: 24px 10%;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #dddddd;
  }
`;

export const TableHeader = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export const TableData = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export const Option = styled.option`
  margin: 10px;
`;

export const Select = styled.select`
  margin-right: 10px;
`;