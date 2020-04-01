
const Man = () => (
  <li key={uuidv1()}>
    <div className="card">
      <div className="delete flex jc-end">
        <div className="">
          <button
            type="button"
            id={index}
            onClick={this.onDeleteCard}
            className="btn"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="avatar">
        <img alt="noimage" src={img || noimage} />
      </div>
      <div className="title">
        <h3>{name}</h3>
      </div>
      <div className="info">
        <div className="gender">
          <p>{`Gender: ${gender}`}</p>
        </div>
        <div className="height">
          <p>{`Height: ${height}`}</p>
        </div>
        <div className="mass">
          <p>{`Mass: ${mass}`}</p>
        </div>
        <div className="eye_color">
          <p>{`Eye color: ${eye_color}`}</p>
        </div>
      </div>
    </div>
  </li>
);
