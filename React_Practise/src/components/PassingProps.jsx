//passing normal string data

// const PassingProps = (props) => {
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <p>{props.des}</p>
//         </div>
//     );
// };

// export default PassingProps;


//passing object data

// const PassingProps = (props) => {
//     return (
//         <div>
//             <h1>Passed Objects</h1>
//             <p>Name : {props.item['name']}</p>
//             <p>Age : {props.item['age']}</p>
//             <p>City : {props.item['city']}</p>
//         </div>
//     );
// };

// export default PassingProps;


//passing function data

const PassingProps = (props) => {
    return (
        <div>
            <button onClick={props.childBtnClick}>Submit</button>
        </div>
    );
};

export default PassingProps;