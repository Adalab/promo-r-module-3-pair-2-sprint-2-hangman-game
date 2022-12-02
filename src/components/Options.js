import '../styles/Instructions.scss';


function options(props) {
    const handleSubmit = (ev) =>{
        ev.preventDefault();
    }
    const handleChange = (ev) =>{
        props.updateInput(ev.target.value);

    }
    return (
        <>
            <p>Estas son las opciones del juego</p>

            <form onSubmit={handleSubmit}>
                <label className="title" for="word">
                    Escribe aquí la palabra que hay que adivinar:
                </label>
                <input
                    autofocus
                    autocomplete="off"
                    className="form__input"
                    maxLength="15"
                    type="text"
                    id="word"
                    name="word"
                    value={props.word}
                    onChange={handleChange}
                />
            </form>
        </>

    )
}

export default options;