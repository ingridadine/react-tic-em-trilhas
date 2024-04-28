import { useState } from "react";

import { Botao, CampoTexto, Loading, TIPO_BOTAO } from "../../components";
import style from './FormCriarTarefa.module.css';
import { useAppContext } from "../../hooks";

const FormCriarTarefa = () => {
    const { adicionarTarefa, loadingCriar } = useAppContext(); 

    const [nomeTarefa, setNomeTarefa]= useState('');

        const onChangeNomeTarefa = (event) => {
        setNomeTarefa(event.currentTarget.value);

    };

    const submeterFormulario = (event) => {
        event.preventDefault();

        if(!nomeTarefa) {
            return;
        }

        adicionarTarefa(nomeTarefa);

        setNomeTarefa('');
    };

    return (
        <form className={ style.FormCriarTarefa } onSubmit={submeterFormulario} >
            <CampoTexto value={nomeTarefa} onChange={onChangeNomeTarefa}/>
            <Botao texto={loadingCriar ? <Loading /> : '+'} />
        </form>
    );
};

export { FormCriarTarefa };