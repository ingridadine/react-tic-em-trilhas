import { Outlet } from "react-router-dom";

import { Cabecalho, Conteudo, Rodape } from "../../components";
import { useAppContext } from "../../hooks";


const LayoutPadrao = () => {
    const { criador } = useAppContext();

    return (
        <>
            <Cabecalho/>
            <Conteudo>
                <Outlet/>
            </Conteudo>
            <Rodape name={criador}/>
        </>
    );
};

export { LayoutPadrao };