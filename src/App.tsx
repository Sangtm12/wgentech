import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <section className="intro">
        <h2 className="intro__title">Lorem ullamco</h2>
        <div className="intro__image-container">
          <img src="/image-1.png" className="intro__image" />
          <img src="/image-2.png" className="intro__image" />
        </div>
        <p className="intro__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur
          eiusmod consectetur proident Lorem reprehenderit esse do anim velit in
          aliquip dolore ut officia. Consectetur reprehenderit proident do
          exercitation eu. Sunt fugiat pariatur elit est laboris quis. Esse
          mollit incididunt quis amet. Qui non irure incididunt laborum nisi
          cillum consequat aliquip aliquip cillum in. Ut excepteur labore
          voluptate tempor cupidatat dolor eiusmod do ipsum Lorem cupidatat do
          labore.
        </p>
        <p className="intro__text">
          Proident dolore nisi eiusmod excepteur aliquip esse ut excepteur. Non
          excepteur sunt reprehenderit sit ex ullamco eiusmod Lorem incididunt
          nisi mollit nostrud. Irure velit enim elit minim commodo qui culpa
          cillum duis fugiat consequat pariatur.
        </p>
      </section>
      <section className="card">
        <div className="card__container card__container--left">
          <div className="card__item card__item--image">
            <img src="/image-3.png" alt="" className="card__image" />
          </div>
          <div className="card__item card__item--text">
            <h2 className="card__title">Lorem ipsum</h2>
            <h3>Excepteur eiusmod consectetur</h3>
            <p>
              Proident dolore nisi eiusmod excepteur aliquip esse ut excepteur.
              Non excepteur sunt reprehenderit sit ex ullamco eiusmod Lorem
              incididunt nisi mollit nostrud. Irure velit enim elit minim
              commodo qui culpa cillum duis fugiat consequat pariatur.
            </p>
            <h3>Quis aliqua reprehenderit</h3>
            <p>
              Proident dolore nisi eiusmod excepteur aliquip esse ut excepteur.
              Non excepteur sunt reprehenderit sit ex ullamco eiusmod Lorem
              incididunt nisi mollit nostrud. Irure velit enim elit minim
              commodo qui culpa cillum duis fugiat consequat pariatur.
            </p>
            <h3>Ad sit cillum amet duis quis commodo</h3>
            <p>
              Proident dolore nisi eiusmod excepteur aliquip esse ut excepteur.
              Non excepteur sunt reprehenderit sit ex ullamco eiusmod Lorem
              incididunt nisi mollit nostrud. Irure velit enim elit minim
              commodo qui culpa cillum duis fugiat consequat pariatur.
            </p>
          </div>
        </div>
        <div className="card__container card__container--right">
          <div className="card__item card__item--text">
            <h2 className="card__title">Mollit aliquip do ipsum consectetur</h2>
            <p>
              Ex laborum ea qui consectetur mollit commodo eiusmod culpa dolor
              cupidatat. Ullamco dolore irure ea sit elit velit non officia. Ad
              eu reprehenderit in et voluptate mollit. Reprehenderit incididunt
              magna consequat enim sit eiusmod est dolor laborum cupidatat.
            </p>
            <p>
              Ipsum minim mollit irure dolore. Sint fugiat deserunt dolor aute
              enim et cillum adipisicing cillum nostrud anim. Sit dolore
              incididunt dolore do sunt pariatur consectetur id qui pariatur eu
              incididunt adipisicing. Irure sint fugiat officia veniam
              consectetur. Esse laborum amet aliqua ad in sunt labore duis.
            </p>
          </div>
          <div className="card__item card__item--image">
            <img src="/image-4.png" alt="" className="card__image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
