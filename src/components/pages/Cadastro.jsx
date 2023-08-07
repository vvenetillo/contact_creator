import styles from '../layout/Cadastro.module.css';

export default function Cadastro() {
    return (
        
<section className={styles.section_form}>
  <form id="consultation-form" className={styles.feed_form} action="#">
    <input required="" placeholder="Name" type="text"/>
    <input name="phone" required="" placeholder="Phone number"/>
    <input name="email" required="" placeholder="E-mail" type="email"/>
    <button className={styles.button_submit}>ORDER</button>
  </form>
</section>
)
}
