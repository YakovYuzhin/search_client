

export function CardTemplate(props: any) {
    return (
      <div className="userCard">
        <p className="name">{props.name}</p>
        <p className="mail">{props.mail}</p>
        <button onClick={() => props.deleteUser(props.users, props.id)}>Delete</button>
      </div>
    );
  }