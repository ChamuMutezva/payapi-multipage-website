const HeaderTitle = (props) => {
    const secondary__title = props.secondary ? "secondary__title" : ""
    const about__title = props.aboutTitle ? "about__title" : ""
    return(
        <h1 className={`header__title ${secondary__title} ${about__title}`}>{props.title}</h1>
    )
}
export default HeaderTitle