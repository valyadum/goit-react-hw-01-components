import css from './StatisticItem.module.css';

export default function StatisticItem({ data }) {
    return (data.map((el) => {
        
          return  (<li className={css.item}  key={el.id}>
                <span className={css.label}>{el.label}</span>
                <span className={css.percentage}>{el.percentage}%</span>
            </li>)
    
    }
  ))
}