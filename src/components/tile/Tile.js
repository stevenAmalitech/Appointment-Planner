import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      {Object.values(props.tile).map((value, index) => (
        <p key={index} className={`${index === 0 ? "tile-title" : ""} tile`}>
          {value}
        </p>
      ))}
    </div>
  );
};
