export const Posts = () => {
  return (
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.pdv/posts")
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch(error => console.error(error));
      }}
    >
      trear datos
    </button>
  );
};
