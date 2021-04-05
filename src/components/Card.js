const Card = ({ text, title }) => {
  return (
    <div class="text-center container-fluid">
          <div class="card panel">
            <div class="card">
              <h4 class="card-title">{title}</h4>
              <p class="card-text">{text} </p>
            </div>
          </div>
        </div>
  );
};

export default Card;
