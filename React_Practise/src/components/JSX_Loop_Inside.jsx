const JSX_Loop_Inside = () => {

    const city = ['Dhaka', 'Delhi', 'London', 'Kolkata', 'Paris'];

  return (
    <div>

        <ul>
            {
                city.map((item, i)=>{
                    return <li key={i.toString()}>{item}</li>
                })
            }
        </ul>

    </div>
  );
};

export default JSX_Loop_Inside;