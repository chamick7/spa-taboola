import styles from "css/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/test">Test</Link>
        </li>
        <li>
          <Link href="/no-ad">No ad</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
