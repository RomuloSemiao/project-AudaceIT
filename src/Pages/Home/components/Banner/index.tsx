import { Link } from "react-router-dom";

import style from "./style.module.css";

const Banner = () => {
    return (
        <section className={style["bannerSection"]}>
            <h1>Transformando a indústria do desenvolvimento full-stack</h1>
            <h2>Construímos soluções de software personalizadas que são seguras, escaláveis ​e adaptadas às suas necessidades comerciais.</h2>
            <Link to="/contato">Inicie seu Projeto</Link>
        </section>
    )
}

export default Banner;