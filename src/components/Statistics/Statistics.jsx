import PropTypes from "prop-types";

import styles from "./css/statistics.module.css";

const Statistics = ({ stats }) => {
  return (
    <section className="statistics">
      <h2 className={styles.statisticsTitle}>Upload stats</h2>

      <ul className={styles.statisticsList}>
        {stats.map((itemObj) => {
          return (
            <li className={styles.statisticsItem} key={itemObj.id}>
              <span className="label">{itemObj.label}: </span>
              <span className="percentage">{itemObj.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.object,
};

export default Statistics;
