import { CustomButton } from "./components/html/Button"



function App() {
  return (
    <div className='App'>
      <CustomButton variant='primary' handleClick={() => console.log("Clicked")}>
        Primary Button
      </CustomButton>
    </div>
  );       
}

export default App
