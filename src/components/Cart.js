function Cart() {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзинка
          <img height={20} src="/img/close.svg" alt="close" />
        </h2>
        <div className="items">
          <div className="cartItem">
            <img height={60} src="/img/any.jpeg" alt="any" />
            <div>
              <p>Картофель Аня</p>
              <b>14 $</b>
            </div>
            <img height={50} src="/img/close.svg" alt="close" />
          </div>
          <div className="cartItem">
            <img height={60} src="/img/any.jpeg" alt="any" />
            <div>
              <p>Картофель Аня</p>
              <b>14 $</b>
            </div>
            <img height={50} src="/img/close.svg" alt="close" />
          </div>
        </div>
        <div className="prise">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 р. 25 коп.</b>
            </li>
            <li>
              <span>25 кг.</span>
              <div></div>
              <b>21 р. 25 коп.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img height={20} src="/img/sterelka.svg" alt="strelka" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
