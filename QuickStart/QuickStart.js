import {useState} from 'react';
//Creating and Nesting Components
//Updating the Screen
function MyButton() {
    const [count, setCount] = useState(0);
    function handleClick(){
        alert('you clicked me');
    }

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}

//Updating the Screen
export default function MyApp(){
    return (
        <div>
            <h1>Counters that update separately.</h1>
            <MyButton />
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

//Conditional Rendering
export default function ConditionalRendering() {
    let content;
    if (isLoggedIn){
        content = <AdminPanel />;
    } else{
        content = <LoginForm />;
    }
    return (
        <div>
            {content}
        </div>
    );
}

//Rendering Lists
const products = [
    {title: 'Cabbage', isFruit: false, id: 1},
    {title: 'Garlic', isFruit: false, id: 2},
    {title: 'Apple', isFruit: true, id: 3}
];

export default function RenderingLists(){
    const listItems = products.map(product => 
        <li key={product.id}
            style={{
                color: products.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
            {product.title}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    )
}

//Responding to Events
//Updating the Screen
function MyButton2() {
    const [count, setCount] = useState(0);
    function handleClick(){
        alert('you clicked me');
    }

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}

