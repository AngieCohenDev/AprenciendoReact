1. ESTE ES PARA HACER UN ARRAY Y RECORRERLO

const user = [
  {
    id: 1,
    name: "Deadpool",
    image: "https://robohash.org/user2",
  },
  {
    id: 2,
    name: "Sasuke Uchiha",
    image: "https://robohash.org/user4",
  },
  {
    id: 3,
    name: "Naruto Uzumaki",
    image: "https://robohash.org/user3",
  }, {
    id: 2,
    name: "Rick Grimes",
    image: "https://robohash.org/user5",
  },
];
AQUE SE IMPRIME
 {user.map((user, index) => {
      return (
        <div key={index}>
          <h1>{user.name}</h1>
          <img src={user.image}/>
        </div>
      );
    })}

2. ESTA ES UNA FORMA DE HACER LOS MANEJADORES DE EEVENTOS
/* const handleChange = (e) => {
  console.log(e.target.value + "...");
}; */