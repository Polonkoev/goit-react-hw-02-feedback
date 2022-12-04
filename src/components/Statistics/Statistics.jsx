import PropTypes from 'prop-types';
import css from './Statistics.module.css'
export const Statistics = ({title, good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
    <h3 className={css.title}>{title}</h3>
    <ul className={css.list}>
      <li className={css.list_item}>Good: {good}</li>
      <li className={css.list_item}>Neutral: {neutral}</li>
      <li className={css.list_item}>Bad: {bad}</li>
      <li className={css.list_item}>Total: {total()}</li>
      <li className={css.list_item}>Positive feedback: {positivePercentage()}%</li>
    </ul>
    </>
  );
};

Statistics.propTypes={
  positivePercentage: PropTypes.func.isRequired,
  total: PropTypes.func.isRequired
}