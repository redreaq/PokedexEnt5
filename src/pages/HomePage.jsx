import FormTrainer from "../components/HomePage/FormTrainer"

const HomePage = () => {
    return(
        <div className="background_color">
        <h1 className="app_1"> <div class="circle"></div> Welcome to Pokedex</h1>
        <h2 className="app_2">Hi Trainer! Welcome to the arena!</h2>
        <p className="app_3">Insert your Trainer name, remember that you have to insert more than 3 letters! </p>   
        <FormTrainer />
        </div>
    )
    
    }

export default HomePage;

