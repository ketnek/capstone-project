import styled from "styled-components";
import { FaSistrix } from "react-icons/fa";

const SearchForm = styled.form`
  height: 2.5rem;
  width: 15rem;
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px 2px gray;
`;

const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  border: none;
  background-color: inherit;
`;

const MagnifyingGlass = styled(FaSistrix)`
  width: 80%;
  height: 80%;
  color: black;
`;

const SearchInput = styled.input`
  font-size: 1.2rem;
  width: 80%;
  border: none;
  padding-left: 0.3rem;
  &:focus {
    outline: none;
  }
`;

export { SearchForm, SearchButton, MagnifyingGlass, SearchInput };
