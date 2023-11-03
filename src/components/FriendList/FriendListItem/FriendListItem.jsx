import css from './FriendListItem.module.css';

export default function FriendListItem({ friends }) {
  return friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <li className={css.item} key={id}>
        {isOnline ? (
          <span className={`${css.status} ${css.green}`}></span>
        ) : (
          <span className={`${css.status} ${css.red}`}></span>
        )}

        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  });
}
