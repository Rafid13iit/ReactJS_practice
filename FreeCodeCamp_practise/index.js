// ReactDOM.render(<h1>Hello World, My first React code</h1>, document.getElementById("root"));

/*
function MainContent ()
{
    return(
        <h2>Learning <h1>React JS!</h1></h2>
    )
}

ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById("root")
);
*/

const navbar = (
    <nav>
        <h1>TechROOT</h1>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
)

ReactDOM.render(
    navbar,
    document.getElementById("root")
);