import style from './Rodape.module.css';

const Rodape = (props) => {
    const { name } = props;

    const anoAtual = (new Date()).getFullYear();


    return (
        <div className={style.Rodape}>
            <p>React Basics - {anoAtual} - { name }</p>

        </div>
    )
}

export { Rodape };