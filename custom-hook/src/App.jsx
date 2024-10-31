
import './App.css'
// import HookForm from './components/HookForm/HookForm'
import ReuseableForm from './components/ReuseableForm/ReuseableForm'

function App() {

  const handleSignUp = (data) => {
    console.log(data)
  }

  const handleUpdate = (data) => {
    console.log(data)
  }

  return (
    <>
      {/* <HookForm /> */}
      <ReuseableForm
      btnText={"Submit"}
      handleSubmit={handleSignUp}>
        <div>
          <h1>Sign Up</h1>
          <p>Please provide your data to sign up account</p>
        </div>
      </ReuseableForm>
      <ReuseableForm
      btnText={"Update"}
      handleSubmit={handleUpdate}>
        <div>
          <h1>Update</h1>
          <p>Always keep your accout updated</p>
        </div>
      </ReuseableForm>
    </>
  )
}

export default App
