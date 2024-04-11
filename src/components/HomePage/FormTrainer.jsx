import { useRef, useState } from "react"
import { setTrainer } from "../../store/states/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const FormTrainer = () => {
  const trainerInput = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInput = trainerInput.current.value.trim();
    if (userInput.length < 4) { // Cambiar la condición a userInput.length < 4
      setError("❌ ERROR, Your Pokedex has not been found. ❌");
      return;
    }
    dispatch(setTrainer(userInput));
    navigate("/pokedex");
  };

  const handleRetry = () => {
    setError(null); // Oculta el mensaje de error
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input ref={trainerInput} type="text" placeholder="Put your name trainer" className="search-input" />
        <button className="search-button">Let's begin!</button>
      </form>
      {error && (
        <div className="error-box">
          <p>{error}</p>
          <button className="retry-button" onClick={handleRetry}>Retry</button> {/* Botón para reintentar */}
        </div>
      )}
    </div>
  );
};

export default FormTrainer;