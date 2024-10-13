//Creating and Nesting Components
function MyButton(){
    return (
        <button>I'm a button.</button>
    );
}

export default function MyApp(){
    return (
        <div>
            <h1>Welcome to my app.</h1>
            <MyButton />
        </div>
    );
}

//Writing Markup with JSX
function AboutPage(){
    return (
        <>
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
        </>
    );
}

//Adding Styles
<img className="avatar" />
//added CSS file

//Displaying Data
const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize:90,
};

export default function Profile(){
    return(
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}