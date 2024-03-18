

export function CardTemplate(props: any) {
    return (
      <div className="userCard">
        <div className="name">{props.name}</div>
        <div className="mail">{props.mail}</div>
        <button onClick={() => props.deleteUser(props.users, props.id)}>Delete</button>
        <p>--</p>
      </div>
    );
  }