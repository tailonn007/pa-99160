import './style.css'

export default function FaleConosco() {
    function handleSubmit(e) {
        e.preventDefault();
        // Handle form submission logic here
    }

    return (
        <section>
            <h1>Fale Conosco</h1>
            <p>tire duvidas e peça um orçamento sem compromisso</p>

            <form onSubmit={handleSubmit}>
            
            <div>
            <label>    
                <span>nome </span>
                <input type="text" required placeholder='seu nome'/>
            </label>
            <label>]
                <span>email </span>
                <input type="email" required placeholder=''/>
            </label>
            <label>
                <span>telefone </span>
                <input type="tel" required placeholder='(xx) xxxxx-xxxx'/>
            </label>
            </div>

            <label>
                <span>Assunto </span>
                <input type="text" required placeholder='ex. Abertura da Empresa'/>
            </label>
            <label>
                <span>Mensagem </span>
                <textarea  rows="6" required placeholder='conte-nos um pouco seu caso'></textarea>
            </label>

            <button type="submit">Enviar</button>
            </form>
        </section>
    )
}