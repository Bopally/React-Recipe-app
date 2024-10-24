const AboutPage = () => {
  const users = [
    {
      id: 1,
      name: "Estelle",
      linkedIn: "https://www.linkedin.com/in/ballot-estelle/",
      github: "https://github.com/Bopally",
      // image:
    },
    {
      id: 2,
      name: "Mariana",
      linkedIn: "https://www.linkedin.com/in/mariana-luzia-frazao/",
      github: "https://github.com/marianafrazao",
      // image:
    },
  ];

  return (
    <>
      <h1>About our project</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
        earum, unde, fugiat sed, alias repellat aliquid excepturi quos cumque
        libero totam. Vero, asperiores vel.
      </p>

      <h2>About the team members:</h2>
      {users.map((user) => (
        <div key={user.id}>
          {/* <img src={user.image} alt={`${user.name}'s profile`} /> */}
          <p>Name: {user.name}</p>
          <p>
            LinkedIn:{" "}
            <a href={user.linkedIn} target="_blank" rel="xxxr">
              {user.linkedIn}
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a href={user.github} target="_blank" rel="xxx">
              {user.github}
            </a>
          </p>
        </div>
      ))}
    </>
  );
};

export default AboutPage;
