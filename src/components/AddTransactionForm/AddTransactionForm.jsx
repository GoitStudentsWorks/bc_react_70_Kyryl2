import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import Select from "react-select";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import CustomInputCalendar from "./CustomInputCalendar";
import Modal from "../Modal/Modal";
import Toggle from "../Toggle/Toggle";
import { Icon } from "../../images/Icon/Icon";

import { selectCategories } from "../../redux/transactions/selectors";
import { postTransactionThunk } from "../../redux/transactions/operations";
import { styles } from "../../options/selectStylesAdd";
import s from "./AddTransactionForm.module.css";
import "react-datepicker/dist/react-datepicker.css";
import useMedia from "../../hooks/useMedia";
import toast from "react-hot-toast";

const AddTransactionForm = ({ closeModal }) => {
  const { isMobile } = useMedia();

  const [monthSelectIsOpen, setMonthSelectIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [transactionType, setTransactionType] = useState(true);
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [defaultIncomeCategory, setDefaultIncomeCategory] = useState(null);

  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  const handleMenuOpen = (id) => {
    if (id === "monthSelect") setMonthSelectIsOpen(true);
  };

  const handleMenuClose = (id) => {
    if (id === "monthSelect") setMonthSelectIsOpen(false);
  };

  useEffect(() => {
    if (categories.length > 0) {
      const defaultCategory = categories.find(
        (category) => category.type === "INCOME"
      );
      setDefaultIncomeCategory(defaultCategory ? defaultCategory.id : null);
    }
  }, [categories]);

  const categoryOptions = categories
    .filter(
      (category) => category.type === (transactionType ? "INCOME" : "EXPENSE")
    )
    .map((category) => ({
      value: category.id,
      label: category.name,
    }));

  const handleAddTransaction = () => {
    if (!amount || (!transactionType && !selectedCategory)) {
      toast.error("Validation error: Amount and category are required.");
      return;
    }

    const newTransaction = {
      transactionDate: startDate.toISOString(),
      type: transactionType ? "INCOME" : "EXPENSE",
      categoryId: transactionType
        ? defaultIncomeCategory
        : selectedCategory.value,
      comment,
      amount: transactionType ? parseFloat(amount) : -parseFloat(amount),
    };

    dispatch(postTransactionThunk(newTransaction))
      .unwrap()
      .then(() => closeModal())
      .catch((error) => {
        console.error(
          "Failed to add transaction:",
          error.response?.data || error.message
        );
      });
  };

  return (
    <Modal closeModal={closeModal}>
      {!isMobile && (
        <div onClick={closeModal}>
          <Icon
            id="icon-close"
            width={16}
            height={16}
            className={s.iconClose}
          />
        </div>
      )}
      <p className={s.title}>Add transaction</p>
      <Toggle onChange={setTransactionType} />
      <div className={s.inputContainer}>
        {!transactionType && (
          <div className={s.select_wrapper}>
            <Select
              className={s.categorySelect}
              options={categoryOptions}
              placeholder="Select a category"
              onMenuOpen={() => handleMenuOpen("monthSelect")}
              onMenuClose={() => handleMenuClose("monthSelect")}
              styles={styles}
              onChange={setSelectedCategory}
            />
            <Icon
              id="icon-down-arrow"
              className={clsx(s.icon, {
                [s.is_active]: monthSelectIsOpen,
              })}
              width="23px"
              height="18px"
            />
          </div>
        )}

        <div className={s.inputs}>
          <input
            type="number"
            placeholder="0.00"
            required
            className={s.inputField}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <ReactDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd.MM.yyyy"
            className={s.dateInput}
            customInput={<CustomInputCalendar />}
            calendarStartDay={1}
          />
        </div>
        <input
          type="text"
          placeholder="Comment"
          className={s.commentInput}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button className={s.addButton} onClick={handleAddTransaction}>
        ADD
      </button>
    </Modal>
  );
};

export default AddTransactionForm;
