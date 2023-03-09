export function Greating({ title, name = "User" }) {
  console.log(title, name);
  return (
    <h1>
      {title}, dice {name}
    </h1>
  );
}

export function UserCard({ name, amount, married, address, greet }) {
  console.log(name, amount, married, address, greet);
  return (
    <div>
      <h1>Nombre de Usuario: {name}</h1>
      <p>Patrimonio: ${amount} 💵</p>
      <p>¿Esta casado?: {married ? "Si, esta casada" : "No, esta soltero"}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Address: {address.street}</li>
      </ul>
    </div>
  );
}
