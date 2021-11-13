import { useState } from "react";
import styled from "styled-components";

const ToggleSwitchWrapper = styled.div`
  width: 30%;
  margin: 2rem auto;
  background: #f1f3f5;
  border-radius: 50px;
  padding: 0.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ToggleItem = styled.div`
  cursor: pointer;
  background: ${(props) => (props.isActive ? "#fff" : "none")};
  border-radius: 50px;
  padding: 1rem 2rem;
  text-align: center;

  & span {
    color: #212529;
    font-size: 16px;
  }
`;

const ToggleSwitch = ({ items }) => {
  const [activeItem, setActiveItem] = useState(0);

  const handleToggle = (data) => {
    if (activeItem !== data) {
      setActiveItem(data);
    }
  };

  return (
    <ToggleSwitchWrapper>
      {items.map((item) => (
        <ToggleItem
          isActive={activeItem === item.id}
          onClick={() => handleToggle(item.id)}
        >
          <span>{item.name}</span>
        </ToggleItem>
      ))}
    </ToggleSwitchWrapper>
  );
};

export default ToggleSwitch;
