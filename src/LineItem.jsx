import React from 'react'
import {
  FaTrashAlt,
} from "react-icons/fa";

const LineItem = ({item,handleCheck,handleDelete}) => {

  const workIcons = {
    music: "🎵",
    "music hearing": "🎵",
    eating: "🍽️",
    eat: "🍽️",
    cooking: "🍳",
    office: "💼",
    work: "💼",
    "office work": "💼",
    meditation: "🙏",
    drawing: "🎨",
    gaming: "🎮",
    traveling: "🚗",
    travel: "🚗",
    payments: "💳",
    bills: "💳",
    call: "📞",
    meeting: "📞",
    sleep: "🌙",
    sleeping: "🌙",
    "wake up": "☀️",
    playing: "🎾",
    "watching movies": "🎬",
    "watching movie": "🎬",
    movies: "🎬",
    coding: "💻",
    reading: "📖",
    studying: "📖",
    writing: "✏️",
  };


  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />

      <label
        style={item.checked ? { color: "limegreen" } : null}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {workIcons[item.item.toLowerCase()] || "📌"} {item.item.charAt(0).toUpperCase()+(item.item.slice(1   ))}
      </label>
      <FaTrashAlt
        role="button"
        onClick={() => handleDelete(item.id)}
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
}

export default LineItem