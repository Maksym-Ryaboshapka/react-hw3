import PropTypes from "prop-types";

import styles from "./css/friend-list.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => {
        return (
          <li className={styles.friendListItem} key={friend.id}>
            <span
              className={
                friend.isOnline
                  ? styles.friendListStatusOnline
                  : styles.friendListStatusOffline
              }
            ></span>
            <img
              className="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.object,
};

export default FriendList;
