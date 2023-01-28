const Header = () => {
    return(
        <header>
            <nav>
                <div className="nav-logo">
                    <p><span>Food</span>House</p>
                </div>
                <div className="nav-list">
                    <ul>
                        <li>Главная</li>
                        <li>Меню</li>
                        <li>Сервис</li>
                        <li>О нас</li>
                    </ul>
                </div>
                <div className="cart">
                    <a href="#" target={"_blank"}>
                        <img src="src/assets/web-site-icons/cart.svg" alt="cart"/>
                    </a>
                </div>
            </nav>
            <div className="hero">
                <div className="hero-content">
                    <div className="hero-text hero-left">
                        <p className="hero-text-pre-article">
                            Экспресс-доставка от Яндекс.Еды
                        </p>
                        <div className="hero-text-article">
                            <h1>
                                Быстро<br/>
                                и вкусно <span>.</span>
                            </h1>
                        </div>
                        <div className="hero-text-description">
                            <p>
                                Сеть быстрого питания #1 в Казани
                            </p>
                        </div>
                        <div className="hero-button-order">
                            <a href="#" target={"_blank"}>Сделать заказ</a>
                            <p>бесплатная доставка от 500 рублей</p>
                        </div>
                    </div>
                    <div className="hero-image hero-right">
                        <img src="src/assets/web-site-icons/hero-image.hero-right.png" alt="hero-image hero-right"/>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;
