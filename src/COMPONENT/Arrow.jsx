import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Arrow = ({ direction, onClick }) => {
  const icon = direction === "left" ? faChevronLeft : faChevronRight;

  return (
    <FontAwesomeIcon
      icon={icon}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Arrow;
