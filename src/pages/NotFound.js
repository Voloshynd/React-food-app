import { useHistory } from "react-router-dom";
function NotFound() {
  const { goBack } = useHistory();
  return (
    <>
      <h1>Ups.... Page not found!</h1>
      <div className="btn-container">
        <button className="btn back" onClick={goBack}>
          <i className="medium material-icons">keyboard_arrow_left</i> Go Back
        </button>
      </div>
    </>
  );
}

export { NotFound };
