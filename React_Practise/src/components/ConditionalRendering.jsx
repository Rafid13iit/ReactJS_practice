const ConditionalRendering = () => {

    // if-else

//     const LoginStatusBtn=(status)=>{
//         if (status){
//             return <button>Logout</button>
//         }
//         else {
//             return <button>Login</button>
//         }
//     }

//   return (
//     <div>
//         <h1>Login Status:</h1>

//         {LoginStatusBtn (true)}
//     </div>
//   );


    // switch

    // const status = false;

    // switch(status){
    //     case true:
    //         return <button>Logout btn</button>
    //     case false:
    //         return <button>Login btn</button>
    //     default:
    //         return null
    // }
    

    // ternary operator

    // const status = true;

    // return (
    //     <div>
    //         {
    //             status?
    //             <button>Logout</button>
    //             :
    //             <button>Login</button>
    //         }
    //     </div>
    // )


    // Logical And

    const status = true;

    return (
        <div>
            <h1>Login Status:</h1>
            {status && <button>Logout Button</button>}
        </div>
    )

};

export default ConditionalRendering;