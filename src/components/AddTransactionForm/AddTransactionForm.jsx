import Modal from "../Modal/Modal";
import Toggle from "../Toggle/Toggle";
import s from "./AddTransactionForm.module.css";

export const AddTransactionForm = ({ closeModal }) => {
  return (
    <div>
      <Modal closeModal={closeModal}>
        <p className={s.title}>Add transaction</p>
        <Toggle />
        <div className={s.inputs}>
          <input type="number" placeholder="0.00" className={s.inputField} />
          <input type="date" className={s.dateInput} />
        </div>
        <textarea placeholder="Comment" className={s.commentInput} />

        <button className={s.addButton}>ADD</button>
      </Modal>
    </div>
  );
};
