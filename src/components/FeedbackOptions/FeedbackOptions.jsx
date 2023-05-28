import React from "react";
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'
const Feedback = ({options, onLeaveFeedback}) => (
  <ul className={css.feedback}>
    {options.map(option => (
      <li key={option}>
        <button className={css.feedbackButtons}
        type="button"
        onClick={() => onLeaveFeedback(option)}>{option}
        </button>
      </li>
    ))}
  </ul>
)
  
  Feedback.propTypes = {
    options:  PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  }
  export default Feedback;