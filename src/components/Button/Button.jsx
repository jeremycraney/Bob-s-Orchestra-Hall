import PropTypes from 'prop-types';
import "./Button.css";

const Button = (props) => {
  return <button className="app_button">{props.title}</button>;
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
