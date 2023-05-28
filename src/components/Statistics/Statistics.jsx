import PropTypes from 'prop-types';
import css from './Statistics.module.css';
const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <div>
        <ul className={css.statisticsList}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive percentage: {positivePercentage}%</li>
        </ul>
        </div>
    )
    Statistics.propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
    }
    export default Statistics;