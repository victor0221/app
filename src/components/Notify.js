import {React, useState, useEffect} from "react"
import "./Styles/StyleNotify.css";


const Notify = (p) => {
    const [visible, setVisible] = useState(true);
    // ico contains "--" "error" "sw" "cw"
    let containerStyle = {};
    let contentStyle = {};
    let icon = "";

    switch (p.type) {
        case "--":
          containerStyle = { backgroundColor: "#383838" };
          contentStyle = { color: "white" };
          icon="ℹ️"
          break;
        case "error":
          containerStyle = { backgroundColor: "#8a2d1a" };
          contentStyle = { color: "white" };
          icon = "❗❗";
          break;
        case "sw":
          containerStyle = { backgroundColor: "#a88036" };
          contentStyle = { color: "black" };
          icon = "⚠️";
          break;
        case "cw":
          containerStyle = { backgroundColor: "#8a2d1a" };
          contentStyle = { color: "white", fontWeight:"bold" };
          icon = "🧱";
          break;
        default:
          break;
      }

    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000); //
      return () => clearTimeout(timer);
    }, []);
  
    return (
        <>
          {visible && (
            <div className="notification-container" style={containerStyle}>
              <div className="notification-content" style={contentStyle}>{p.message} {icon}</div>
            </div>
          )}
        </>
      );
    };

  export default Notify;