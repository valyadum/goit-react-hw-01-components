import StatisticItem from './StatisticItem/StatisticItem';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
     {title && (<h2 className={css.title}>{title}</h2>)} 
      <ul className={css.statList}>
        <StatisticItem data={stats} />
      </ul>
    </section>
  );
}
// Statistics.propTypes = {
//   imgUrl: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };
