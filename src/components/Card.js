function Card() {
  return (
    <div className="cards">
      <div className="card">
        <div className="favorite">
          <img src="/img/heart.png" alt="#" />
        </div>
        <img width={133} height={133} src="/img/any.jpeg" alt="" />
        <h5>Картофель Аня</h5>
        <div className="cardBottom">
          <div className="cardPrise">
            <span>Prise: </span>
            <b>14 $</b>
          </div>
          <button>
            <img width={11} height={11} src="/img/plus.svg" alt="plus" />
          </button>
        </div>
      </div>
      <div className="card">
        <div className="favorite">
          <img src="/img/heart.png" alt="#" />
        </div>
        <img width={133} height={133} src="/img/kolombo.jpg" alt="" />
        <h5>Картофель Коломбо</h5>
        <div className="cardBottom">
          <div className="cardPrise">
            <span>Prise: </span>
            <b>14 $</b>
          </div>
          <button>
            <img width={11} height={11} src="/img/plus.svg" alt="plus" />
          </button>
        </div>
      </div>
      <div className="card">
        <div className="favorite">
          <img src="/img/heart.png" alt="#" />
        </div>
        <img width={133} height={133} src="/img/vinica.jpg" alt="" />
        <h5>Картофель Винница</h5>
        <div className="cardBottom">
          <div className="cardPrise">
            <span>Prise: </span>
            <b>14 $</b>
          </div>
          <button>
            <img width={11} height={11} src="/img/plus.svg" alt="plus" />
          </button>
        </div>
      </div>
      <div className="card">
        <div className="favorite">
          <img src="/img/heart.png" alt="#" />
        </div>
        <img width={133} height={133} src="/img/zarnica.jpg" alt="" />
        <h5>Картофель Зарница</h5>
        <div className="cardBottom">
          <div className="cardPrise">
            <span>Prise: </span>
            <b>14 $</b>
          </div>
          <button>
            <img width={11} height={11} src="/img/plus.svg" alt="plus" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
