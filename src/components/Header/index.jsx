import React from "react";
import { ReactComponent as SVGBtnOpen} from "../../assets/icon-menu.svg";
import { ReactComponent as SVGBtnClose} from "../../assets/icon-close-menu.svg";
import { Dropdown, DropdownItem } from "../Dropdown";
import { ReactComponent as SVGLogo } from "../../assets/logo.svg";
import { ReactComponent as SVGTodo } from "../../assets/icon-todo.svg";
import { ReactComponent as SVGCalendar } from "../../assets/icon-calendar.svg";
import { ReactComponent as SVGReminders } from "../../assets/icon-reminders.svg";
import { ReactComponent as SVGPlanning } from "../../assets/icon-planning.svg";
import Button from "../Button";
import styles from "./style.module.scss";
import useAnimation from "../../useAnimation";


const Header = () => {
    const content = React.useRef();
    const buttonClose = React.useRef();
    const options = {
        element: content,
        styles,
        closeOnElements: [content, buttonClose]
    }
    const { open } = useAnimation(options);

    return (
        <header className={styles.header}>
            <a className={styles.headerLogo}
             href="#"
             aria-label="Nome fictício representando a logo do site">
                <SVGLogo />
            </a>

            <button className={styles.headerBtnOpen}
            onClick={open}
            aria-label="Abrir menu de navegação">
                <SVGBtnOpen />
            </button>

            <div className={styles.headerMenuBg}
            ref={content}>
                <nav className={styles.headerMenu}>
                    <button className={styles.headerBtnClose}
                    ref={buttonClose}
                    aria-label="Fechar menu de navegação">
                        <SVGBtnClose />
                    </button>

                    <ul className={styles.headerNav}>
                        <li className={styles.navItem}>
                            <Dropdown name="Recursos">
                                <DropdownItem icon={SVGTodo} text="Lista de afazeres" />
                                <DropdownItem icon={SVGCalendar} text="Calendário" />
                                <DropdownItem icon={SVGReminders} text="Lembretes" />
                                <DropdownItem icon={SVGPlanning} text="Planejamento" />
                            </Dropdown>
                        </li>

                        <li className={styles.navItem}>
                            <Dropdown name="Empresa">
                                <DropdownItem text="História" />
                                <DropdownItem text="Nosso time" />
                                <DropdownItem text="Blog" />
                            </Dropdown>
                        </li>

                        <li className={styles.navItem}>
                            <a href="#">
                                Carreiras
                            </a>
                        </li>

                        <li className={styles.navItem}>
                            <a href="#">
                                Sobre
                            </a>
                        </li>
                    </ul>

                    <div className={styles.headerUser}>
                        <button>
                            Login
                        </button>

                        <Button text="Cadastre-se"
                        size="small"
                        filled={false}
                        />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;