function MyButton() {
    return (
      <button>
        I am a button
      </button>
    );
  }

  function AboutPage(){
    return(
        <>
        <h1>About</h1>
        <p>Hello, there.<br />How do you do?</p>
        <ConditionalRendering isLoggedIn={true}/>
        </>
    );
  }
  function ConditionalRendering({isLoggedIn}){
    let content;
    if ( isLoggedIn) {
      content = <AdminPanel />;
    } else {
      content = <LoginForm />;
    }
    return (
      <div>
        {content}
      </div>
    );
  }

  function AdminPanel(){
    return(
      <h1>You are logged in.</h1>
    );
  }
  function LoginForm(){
    return(
      <h1>Login here!</h1>
    );
  }
  
  export default function MyApp() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
        <AboutPage />
      </div>
    );
  }