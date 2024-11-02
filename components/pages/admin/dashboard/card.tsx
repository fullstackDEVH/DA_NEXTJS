import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

interface IProps {
  item: any;
}

const Card = ({ item }: IProps) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.number}>{item.value}</span>
        <span className={styles.detail}>
          <span
            className={item.change >= 0 ? styles.positive : styles.negative}
          >
            {item.change}%
          </span>{" "}
          {item.change > 0 ? "more" : "less"} than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
