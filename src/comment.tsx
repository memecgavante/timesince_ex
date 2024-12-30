import React from "react";
import { useState, useEffect } from "react";
import ms from "./utils/constants.js";

const Comment = ({ date_created }) => {
  const [diff, setDiff] = useState();
  const [formattedDiff, setFormattedDiff] = useState<String>();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  useEffect(() => {
    const difference = time.getTime() - date_created.getTime();
    if (difference < ms.msInSecond) {
      setFormattedDiff(`now`);
    } else if (difference < ms.msInMinute) {
      // how many ms is in 1 minute = 60 000
      let secondsPassed = Math.floor(difference / ms.msInSecond);
      setFormattedDiff(`${secondsPassed} seconds ago`);
    } else if (difference < ms.msInHour) {
      // how many ms is in 1hour = 60 000 * 60
      setFormattedDiff(`${Math.floor(difference / ms.msInMinute)} minutes ago`);
    } else if (difference < ms.msInDay) {
      // how many ms is in 1day = 60 000 * 60 * 24
      setFormattedDiff(`${Math.floor(difference / ms.msInHour)} hours ago`);
    } else if (difference > ms.msInDay) {
      // how many ms is in 1day = 60 000 * 60 * 24
      setFormattedDiff(`${Math.floor(difference / ms.msInDay)} days ago`);
    }
  }, [time]);

  return <p>{formattedDiff}</p>;
};

export default Comment;
