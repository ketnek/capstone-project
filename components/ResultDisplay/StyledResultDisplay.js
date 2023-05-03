import styled from "styled-components";

const List = styled.ul`
  width: 15rem;
  padding: 0.5rem;
  list-style: none;
  border-radius: 10px;
  background-color: white;
`;

const Item = styled.li`
  cursor: pointer;
  padding: 0.5rem 0.5rem;
`;

const PlaceholderItem = styled.li`
  font-weight: bold;
  padding-left: 1rem;
`;

export { List, Item, PlaceholderItem };
