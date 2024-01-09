/* eslint-disable react/prop-types */
import NavModel from "../material/NavModel";
import styles from "../layout/Forms.module.css";

export default function List  () {
  return (
    <>
    <NavModel />
    <div className={styles.list}>
      <h2>Dados inseridos:</h2>
     
    </div>
    </>
  );
}
