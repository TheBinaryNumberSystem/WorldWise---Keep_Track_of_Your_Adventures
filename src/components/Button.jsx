// import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Button.module.css"; // Import your CSS module

function Button({ children, onClick, type, to }) {
  if (to) {
    return (
      <Link to={to} className={`${styles.btn} ${styles[type]}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func, // Make onClick optional
  type: PropTypes.string.isRequired,
  to: PropTypes.string, // Add a to prop for Link navigation
};

export default Button;

// import styles from "./Button.module.css";
// import PropTypes from "prop-types";

// function Button({ children, onClick, type }) {
//   return (
//     <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
//       {children}
//     </button>
//   );
// }

// Button.propTypes = {
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func.isRequired,
//   type: PropTypes.string.isRequired,
// };

// export default Button;
