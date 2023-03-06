import React, { useState, useEffect } from "react";

import calendarMonths from "~lib/months";

import styles from "~styles/components/masterplan/calendartoolbar.module.scss";

const CalendarToolbar = (props) => {
  const [currentMonth, setCurrentMonth] = useState(0);

  useEffect(() => {
    setCurrentMonth(props.date.getMonth());
  }, []);

  const addMonths = (date, months) => {
    const d = date.getDate();
    const m = date.getMonth();

    let newMonth = m + months;
    if (newMonth < 0) {
      newMonth = 11;
    }
    if (newMonth >= calendarMonths.length) {
      newMonth = 0;
    }

    setCurrentMonth(newMonth);

    date.setMonth(newMonth);
    if (date.getDate() != d) {
      date.setDate(0);
    }
    return date;
  };

  const goToBack = () => {
    props.onNavigate("prev", addMonths(props.date, -1));
  };

  const goToNext = () => {
    props.onNavigate("next", addMonths(props.date, +1));
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.monthButton} onClick={goToBack}>
        {currentMonth - 1 < 0
          ? calendarMonths[calendarMonths.length - 1]
          : calendarMonths[currentMonth - 1]}
      </h3>
      <h2 className={styles.currentMonth}>{calendarMonths[currentMonth]}</h2>
      <h3 className={styles.monthButton} onClick={goToNext}>
        {currentMonth + 1 >= calendarMonths.length
          ? calendarMonths[0]
          : calendarMonths[currentMonth + 1]}
      </h3>
    </div>
  );
};

export default CalendarToolbar;
