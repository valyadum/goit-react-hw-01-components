import css from './StatisticItem.module.css';
import { randomColor } from '../../../utils/randomColor';

export default function StatisticItem({ data }) {
 

  return (data.map((el) => {
    let randomColors = randomColor();
     let color = { backgroundColor: `${randomColors}` };
     console.log(color);

    return (
      <li className={css.item} key={el.id} style={color} >
                <span className={css.label}>{el.label}</span>
                <span className={css.percentage}>{el.percentage}%</span>
      </li>
    )
    
    }
  ))
}