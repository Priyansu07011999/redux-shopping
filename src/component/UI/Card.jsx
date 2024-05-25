const Card = (props) => {
    return (
      <section className={`m-4 rounded-lg bg-white p-4 w-11/12 max-w-2xl ${props.className ? props.className : ''}`}>
        {props.children}
      </section>
    );
  };
  
  export default Card;
  