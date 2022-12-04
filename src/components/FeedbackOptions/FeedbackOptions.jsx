import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const stateArray = Object.keys(options);
  return (
    <div className={css.container}>
      {stateArray.map(option => (
        <button
          className={css.btn}
          type="button"
          key={option}
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option[0].toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};
