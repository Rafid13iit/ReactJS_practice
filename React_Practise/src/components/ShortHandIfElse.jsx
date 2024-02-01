
const ShortHandIfElse = () => {

    let mark = 79;

    return (
        <div>
            {
                mark>=80? 
                    <h2>Brilliant Result</h2> 
                :
                    <h2>Average Result</h2>
            }
        </div>
    );
};

export default ShortHandIfElse;