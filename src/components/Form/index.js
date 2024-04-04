import styles from './Form.module.css'
import { categories } from '../../components/Category';

function Form(){
    return(
        <section className={styles.container}>
            <h2>Cadastro de vídeo</h2>
            <form>
                <div>
                    <label>URL DO VÍDEO</label>
                    <input
                        type='text'
                        placeholder='digite a url'
                        required='required'/>
                </div>
                
                <div>
                    <label>Categoria</label>
                    <select>
                        <option value='-'>Selecione uma categoria</option>
                        {categories.map(category => {
                            return <option value={category}>{category}</option>
                        })}
                    </select>
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
            </form>
        </section>
    );
}

export default Form;