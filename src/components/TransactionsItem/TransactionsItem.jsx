import ReactDOM from "react-dom";
import { useState } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import { Icon } from "../../images/Icon/Icon";

import useMedia from "../../hooks/useMedia";
import EditTransactionForm from "../EditTransactionForm/EditTransactionForm";
import { selectCategories } from "../../redux/transactions/selectors";
import { deleteTransactionThunk } from "../../redux/transactions/operations";

import s from "./TransactionsItem.module.css";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  return `${day}.${month}.${year}`;
};

const TransactionsItem = ({ transaction }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const displayType = transaction.type === "INCOME" ? "+" : "-";
  const { isMobile } = useMedia();

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const categories = useSelector(selectCategories);

  const category = categories.find(
    (item) => item.id === transaction.categoryId
  );
  const categoryName = category ? category.name : "Unknown";
  const displayAmount = Math.abs(transaction.amount);

  const transactionRow = (
    <tr key={transaction.id}>
      <td>{formatDate(transaction.transactionDate)}</td>
      <td className={s.type}>{displayType}</td>
      <td>{categoryName}</td>
      <td>{transaction.comment}</td>
      <td
        className={clsx(s.sum, {
          [s.income]: transaction.type === "INCOME",
          [s.expense]: transaction.type === "EXPENSE",
        })}
      >
        {displayAmount}
      </td>
      <td>
        <div className={s.btncontainer}>
          <button
            className={s.carandash}
            type="button"
            onClick={openModal}
            aria-label="edit button"
          >
            <Icon id="icon-pen" height={14} width={14} />
          </button>
          <button
            className={s.button}
            type="button"
            onClick={() => dispatch(deleteTransactionThunk(transaction.id))}
            aria-label="delete button"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );

  const transactionCard = (
    <li
      className={clsx(s.card, {
        [s.cardIncome]: transaction.type === "INCOME",
        [s.cardExpense]: transaction.type === "EXPENSE",
      })}
      key={transaction.id}
    >
      <div className={s.cardRow}>
        <span className={s.cardLabel}>Date</span>
        <span className={s.cardValue}>
          {formatDate(transaction.transactionDate)}
        </span>
      </div>
      <div className={s.cardRow}>
        <span className={s.cardLabel}>Type</span>
        <span className={s.cardValue}>{displayType}</span>
      </div>
      <div className={s.cardRow}>
        <span className={s.cardLabel}>Category</span>
        <span className={s.cardValue}>{categoryName}</span>
      </div>
      <div className={s.cardRow}>
        <span className={s.cardLabel}>Comment</span>
        <span className={s.cardValue}>{transaction.comment}</span>
      </div>
      <div className={s.cardRow}>
        <span className={s.cardLabel}>Sum</span>
        <span
          className={clsx(s.cardSum, {
            [s.income]: transaction.type === "INCOME",
            [s.expense]: transaction.type === "EXPENSE",
          })}
        >
          {displayAmount}
        </span>
      </div>
      <div className={s.cardActions}>
        <button
          className={s.button}
          type="button"
          onClick={() => dispatch(deleteTransactionThunk(transaction.id))}
          aria-label="delete button"
        >
          Delete
        </button>
        <button
          className={s.penContainer}
          type="button"
          onClick={openModal}
          aria-label="edit button"
        >
          <Icon id="icon-pen" height={14} width={14} />
          <p className={s.carandash}>Edit</p>
        </button>
      </div>
    </li>
  );

  return (
    <>
      {!isMobile ? transactionRow : transactionCard}
      {isModalOpen &&
        ReactDOM.createPortal(
          <EditTransactionForm
            categoryName={categoryName}
            closeModal={closeModal}
            transaction={transaction}
          />,
          document.body
        )}
    </>
  );
};

export default TransactionsItem;
