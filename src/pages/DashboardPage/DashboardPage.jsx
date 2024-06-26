import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Balance from "../../components/Balance/Balance";
import CurrencyTab from "../../components/CurrencyTab/CurrencyTab";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

import useMedia from "../../hooks/useMedia";
import {
  getCategoriesThunk,
  getTransactionsThunk,
} from "../../redux/transactions/operations";

import s from "./DashboardPage.module.css";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const { isMobile } = useMedia();
  useEffect(() => {
    dispatch(getTransactionsThunk());
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  return (
    <div className={s.pageContainer}>
      <Header />
      <div className={s.customContainer}>
        {!isMobile && (
          <div className={s.boxesContainer}>
            <div className={s.boxLeft}>
              <div className={s.navbalcur}>
                <div className={s.navbal}>
                  <Navigation />
                  <Balance />
                </div>
                <CurrencyTab />
              </div>
            </div>
            <div className={s.boxRight}>
              <Outlet />
            </div>
          </div>
        )}
        {isMobile && (
          <div className={s.boxesContainer}>
            <div className={s.boxLeft}>
              <div className={s.navbalcur}>
                <div className={s.navbal}>
                  <Navigation />
                </div>
              </div>
            </div>
            <div className={s.boxRight}>
              <Outlet />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
