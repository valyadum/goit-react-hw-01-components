//import StatisticItem from './StatisticItem/StatisticItem';
import css from './Statistics.module.css';
import { randomColor } from '../../utils/randomColor';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(el => {
          let randomColors = randomColor();
          let color = { backgroundColor: `${randomColors}` };

          return (
            <li className={css.item} key={el.id} style={color}>
              <span className={css.label}>{el.label}</span>
              <span className={css.percentage}>{el.percentage}%</span>
            </li>
          );
        })
        }
      </ul>
    </section>
  );
}
