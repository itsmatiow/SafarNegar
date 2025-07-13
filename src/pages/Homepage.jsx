import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          دور دنیارو بچرخ!
          <br />
          سفر نگار ماجراجویی‌های شمارو دنبال میکنه...
        </h1>
        <h2>
          یه نقشه جهان که ردپای شمارو دور دنیا دنبال میکنه. تجربیات خارق‌العاده
          خودتونو فراموش نکنید و اونار توی سفر نگار ثبت کنید...
        </h2>
        <Link to="/login" className="cta">
          شروع
        </Link>
      </section>
    </main>
  );
}
