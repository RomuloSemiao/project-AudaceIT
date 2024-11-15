import style from "./style.module.css";

const Activities = () => {

    const services = [
        {
            icon: "a",
            title: "Custom Software Development",
            description: "We design, develop, and deploy custom software applications that drive business growth and innovation"
        },
        {
            icon: "b",
            title: "Web Development",
            description: "Our full-stack web developers create high-performance, secure, and user-friendly websites for businesses of all sizes"
        },
        {
            icon: "c",
            title: "Mobile App Development",
            description: "We build native and cross-platform mobile apps that deliver engaging user experiences and drive business growth"
        }
    ]

    return (
        <section className={style["activitiesSection"]}>
            <h1>Nossos Serviços</h1>

            <div className={style["activities__wrapper"]}>
                {services.map((el) => (
                    <div className={style["activitie"]} key={el.title}>
                        {el.icon}
                        <h2>{el.title}</h2>
                        <p>{el.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Activities