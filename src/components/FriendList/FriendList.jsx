import css from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';

export default function FriendList({friends}) {
    return (
      <ul className={css.friendList}>
        
          <FriendListItem friends={friends} />
       
      </ul>
    );
}