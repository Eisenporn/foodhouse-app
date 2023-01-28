const Menu = () => {
    return(
        <menu>
            <div className="section-header__title">
                <p>
                    Наше Меню
                </p>
            </div>
            <div className="filter">
                <div className="filter-item">
                    <div className="item__group">
                        {/*<i className="fa-solid fa-salad"></i>*/}
                        <img src="src/assets/web-site-icons/emojione_green-salad.svg" alt="item__group"/>
                        <p>
                            Салаты
                        </p>
                    </div>
                </div>
                <div className="filter-item">
                    <div className="item__group">
                        <img src="src/assets/web-site-icons/fluent_drink-margarita-24-filled.svg" alt="item__group"/>
                        <p>
                            Напитки
                        </p>
                    </div>
                </div>
                <div className="filter-item">
                    <div className="item__group">
                        <img src="src/assets/web-site-icons/Vector.svg" alt="item__group"/>
                        <p>
                            Бургеры
                        </p>
                    </div>
                </div>
                <div className="filter-item">
                    <div className="item__group">
                        <img src="src/assets/web-site-icons/noto-v1_french-fries.svg" alt="item__group"/>
                        <p>
                            Закуски
                        </p>
                    </div>
                </div>
                <div className="filter-item">
                    <div className="item__group">
                        <img src="src/assets/web-site-icons/Vector (1).svg" alt="item__group"/>
                        <p>
                            Пицца
                        </p>
                    </div>
                </div>
                <div className="filter-item">
                    <div className="item__group">
                        <img src="src/assets/web-site-icons/tabler_discount-2.svg" alt="item__group"/>
                        <p>
                            Акции
                        </p>
                    </div>
                </div>
            </div>
        </menu>
    )
}
export default Menu;