
const ImmediatelyInvokedFunction = () => {

    let mark = 82;

    return (
        <div>
            {(()=>{
                if(mark>=80){
                    return <h1>Brilliant Result!</h1> 
                }
                else {
                    return <h1>Average Result!</h1>
                }
            })()}
        </div>
    );
};

export default ImmediatelyInvokedFunction;