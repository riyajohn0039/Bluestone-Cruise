import React from "react";
import styles from "../styles/ReviewsSection.module.css";


const ReviewsSection: React.FC = () => {
  return (
    <section className={styles.reviewsSection}>
      <h2 className={styles.heading}>
        SEE WHY WE WERE VOTED #1 FISHING CHARTER IN THE U.S. 4 YEARS IN A ROW!
      </h2>

      <div className={styles.logosContainer}>
        {/* Facebook */}
        <div className={styles.logoCard}>
          <img src="facebook-300x60.webp" alt="Facebook" className={styles.logo} />+
          <div className={styles.stars}>★★★★★</div>
          <p>7,858 Reviews</p>
        </div>

        {/* Google */}
        <div className={styles.logoCard}>
          <img src="google-e1663654011662.webp" alt="Google" className={styles.logo} />
          <div className={styles.stars}>★★★★★</div>
          <p>12,186 Reviews</p>
        </div>

        {/* USA Today */}
        <div className={styles.logoCard}>
          <img src="usa-today-10-best-1.webp" alt="USA Today" className={styles.logo} />
          <p>#1 Fishing Charter</p>
        </div>

        {/* Yelp */}
        <div className={styles.logoCard}>
          <img src="yelp-e1663653974626-150x77.webp" alt="Yelp" className={styles.logo} />
          <div className={styles.stars}>★★★★★</div>
          <p>794 Reviews</p>
        </div>

        {/* TripAdvisor */}
        <div className={styles.logoCard}>
          <img
            src="tripadvisor-logo-e1663653996698.webp"
            alt="TripAdvisor"
            className={styles.logo}
          />
          <div className={styles.stars}>★★★★★</div>
          <p>3,569 Reviews</p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
