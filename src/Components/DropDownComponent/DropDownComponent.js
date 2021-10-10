import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "shards-react";
import { DropDownToggleStyle, DropDownText, DropDownItem } from "./Styles";
import DropDownIcon from "../../Assets/Icons/dropDownIcon.svg";

const DropDownComponent = ({ type }) => {
  const items = [
    {
      key: 1,
      value: "item 1",
    },
    {
      key: 2,
      value: "item 2",
    },
    {
      key: 3,
      value: "item 3",
    },
  ];
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(type);
  return (
    <div>
      <Dropdown
        open={dropDownOpen}
        toggle={() => setDropDownOpen(!dropDownOpen)}
      >
        <DropdownToggle style={DropDownToggleStyle}>
          <span style={DropDownText}>{selectedItem}</span>

          <img
            style={DropDownItem}
            src={DropDownIcon}
            alt="Drop Down Icon"
          ></img>
        </DropdownToggle>

        <DropdownMenu>
          <DropDownItems items={items} setSelectedItem={setSelectedItem} />
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

const DropDownItems = ({ items, setSelectedItem }) => {
  return items.map((item) => {
    return (
      <DropdownItem key={item.key} onClick={() => setSelectedItem(item.value)}>
        {item.value}
      </DropdownItem>
    );
  });
};

export default DropDownComponent;
