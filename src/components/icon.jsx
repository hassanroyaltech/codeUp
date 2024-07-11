import React from "react";
import IcomoonReact, { iconList } from "icomoon-react";
import iconSet from "../assets/selection.json";
function Icon(props) {
  return (
    <IcomoonReact
      className={props.className || ""}
      iconSet={iconSet}
      color={props.color}
      size={props.size || "100%"}
      icon={props.icon}
    />
  );
}
export default Icon