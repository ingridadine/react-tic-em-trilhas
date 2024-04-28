import { useAppContext } from '../../hooks';
import style from './ListaTarefas.module.css';
import { ListaTarefasItem } from './ListaTarefasItem';

const ListaTarefas = () => {
    const { tarefas } = useAppContext();
    

    return (
        <ul className={style.ListaTarefas}>
            {!tarefas.length && (
                <p>Não há tarefas cadastradas :C</p>
            )}


        { tarefas.map(item => <ListaTarefasItem key={item.id} id={item.id} nome={item.nome} /> ) }
        </ul>
    );
};

export { ListaTarefas };