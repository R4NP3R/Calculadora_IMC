import { useState } from "react"
import styles from './Calculadora.module.css';

function Calculadora() {

    function CalculaIMC () {
        const pesoN = parseInt(peso);
        const alturaN = parseFloat(altura)
        return pesoN / (alturaN * alturaN)
    }

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);


    return (
        <form className={styles.form} >
            <div className={styles.formItem}>
                <p>Peso:</p>
                <input name="peso" className={styles.formInput} onChange={(e) => setPeso(e.target.value)} type="text" placeholder="Informe seu peso" />
            </div>
            <div className={styles.formItem}>
                <p>Altura:</p>
                <input className={styles.formInput} onChange={(e) => setAltura(e.target.value)} type="text" placeholder="Informe sua altura" />
            </div>
            <p className={styles.formText}>Seu IMC é {CalculaIMC().toFixed()}</p>
        </form>

    )
}

export default Calculadora