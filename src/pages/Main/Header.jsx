import React, { useState } from "react";
import avatar from "../data/avatar.png";
import bell from "../data/bell.png";
import styles from "./Header.module.css";


const Header = () => {
    const [isNotificationVisible, setIsNotificationVisible] = useState(false); // 알림 창 상태

    const toggleNotification = () => {
        setIsNotificationVisible(!isNotificationVisible); // 알림 창 표시 상태 전환
    };

    return (
        <header className={styles.header}>
            <input type="text" className={styles.searchInput} placeholder="제품명/카테고리 검색" />
            <div className={styles.rightIcons}>
                <img className={styles.bellIcon} alt="Bell" src={bell} onClick={toggleNotification} />
                <img className={styles.avatarIcon} alt="Avatar" src={avatar} />
            </div>
            {isNotificationVisible && (
                <div className={styles.notificationDropdown}>
                    <h4>알림</h4>
                    <p>새로운 알림이 있습니다!</p>
                    {/* 알림 목록을 추가 */}
                    <ul>
                        <li>
                            <img className={styles.notificationAvatar} alt="User Avatar" src={avatar} />
                            <span> 사용자1: 제품이 입고되었습니다.</span>
                        </li>
                        <li>
                            <img className={styles.notificationAvatar} alt="User Avatar" src={avatar} />
                            <span> 사용자2: 세일이 시작되었습니다.</span>
                        </li>
                        <li>
                            <img className={styles.notificationAvatar} alt="User Avatar" src={avatar} />
                            <span> 사용자3: 새로운 메시지가 도착했습니다.</span>
                        </li>
                    </ul>
                    <button onClick={toggleNotification}>닫기</button>
                </div>
            )}
        </header>
    );
};

export default Header;
