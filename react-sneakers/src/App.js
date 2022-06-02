function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between">
        <div className="d-flex align-center">
          <img
            src="/img/logo.png"
            width={40}
            height={40}
            alt="Это картинка лого"
          />
          <div>
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img
              src="/img/cart.svg"
              width={18}
              height={17.18}
              alt="Иконка корзины"
            />
            <span>1205 руб.</span>
          </li>
          <li>
            <img
              src="/img/user.svg"
              width={20}
              height={20}
              alt="Иконка личного кабинета"
            />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
      </div>
    </div>
  );
}

export default App;
