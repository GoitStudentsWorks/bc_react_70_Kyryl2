import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { format } from "date-fns";

import Chart from "../Chart/Chart";
import StatisticsTable from "../StatisticsTable/StatisticsTable";
import StatisticsDashboard from "../StatisticsDashboard/StatisticsDashboard";

import { getSummaryThunk } from "../../redux/transactions/operations";
import { selectTransactions } from "../../redux/transactions/selectors";

import css from "./StatisticsTab.module.css";

const StatisticsTab = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);

  useEffect(() => {
    const date = new Date();
    const month = +format(date, "MM");
    const year = +format(date, "yyyy");

    dispatch(getSummaryThunk({ month, year }));
  }, [dispatch]);

  if (!transactions.length) {
    return (
      <div className={css.filler}>
        <p>You don’t have any transactions now...</p>
      </div>
    );
  }

  return (
    <div className={css.tabContainer}>
      <h2 className={css.title}>Statistics</h2>
      <div className={css.wrapper}>
        <Chart />
        <div>
          <StatisticsDashboard />
          <StatisticsTable />
        </div>
      </div>
    </div>
  );
};

export default StatisticsTab;
