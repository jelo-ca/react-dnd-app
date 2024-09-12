function DisplayResults(props) {
  return (
    <div className="results-container">
      <h3>Results: {props.resultCount}</h3>
      <ul className="results">
        {props.data.map((item) => {
          return <li key={item.index}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default DisplayResults;
