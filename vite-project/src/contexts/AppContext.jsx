import { createContext, useState } from 'react';

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const { children } = props;

    const [criador, setCriador] = useState('Dinyxia');

    const [tarefas, setTarefas] = useState ([
        { id: 1, nome: 'Item 1'},
        { id: 2, nome: 'Item 2'},
        { id: 3, nome: 'Item 3'},
    ]);   

    const adicionarTarefa = (nomeTarefa) => {
        setTarefas(estadoAtual => {
            const tarefa = {
                id: estadoAtual.length +1,
                nome: nomeTarefa,
            };


            return [
                ...estadoAtual,
                tarefa,
            ];
        });
    };

    const removerTarefa = (idTarefa) => {
        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.filter(tarefa => tarefa.id != idTarefa);

            return [
                ...tarefasAtualizadas,
            ]
        });

    };

    const editarTarefa = (idTarefa, nomeTarefa) => {
        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.map(tarefa => {
                return tarefa.id == idTarefa ? {
                    ...tarefa,
                    nome: nomeTarefa,
                } : tarefa;
            });

            return [
                ...tarefasAtualizadas,
            ];
        });
    };

    return (
        <AppContext.Provider value={{
            criador,
            tarefas,
            adicionarTarefa,
            removerTarefa,
            editarTarefa, 

        }}>
            { children }
        </AppContext.Provider>
    );
};