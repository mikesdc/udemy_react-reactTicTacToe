import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editState) => !editState);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing === true) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        {/* 
        Using a js variable (above) instead of the ternary operator (below) makes the code easier to read.
        
        {!isEditing ? (
          <span className="player-name">{name}</span>
        ) : (
          <input type="text" defaultValue={name} />
        )} */}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
