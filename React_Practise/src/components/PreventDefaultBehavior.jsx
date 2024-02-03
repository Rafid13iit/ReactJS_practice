const PreventDefaultBehavior = () => {

    const PostFormData=(event)=>{
        event.preventDefault();

        alert("Submitted & Not Reloaded");
    }

    return (
        <div>
            <form onSubmit={PostFormData}>
                <input type="text" placeholder="Your Name"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PreventDefaultBehavior;