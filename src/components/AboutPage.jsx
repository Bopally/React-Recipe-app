const AboutPage = () => {
  const users = [
    {
      id: 1,
      name: "Estelle",
      linkedIn: "https://www.linkedin.com/in/ballot-estelle/",
      github: "https://github.com/Bopally",
      image: "images/Estelle-Image.png",
    },
    {
      id: 2,
      name: "Mariana",
      linkedIn: "https://www.linkedin.com/in/mariana-luzia-frazao/",
      github: "https://github.com/marianafrazao",
      image: "images/Mariana-Image.png",
    },
  ];

  return (
    <>
      <h1>About our project</h1>
      <p>
        {`Grandmother's recipes is a user-friendly recipe website designed to
        inspire culinary creativity and provide a platform for cooking
        enthusiasts to explore and share diverse recipes from around the world.
        Whether you're a seasoned chef or a kitchen newbie, our site offers a
        treasure trove of step-by-step recipes with stunning visuals, helpful
        tips, and user reviews. You can check your favorite recipes, submit your
        own culinary creations, and join a vibrant community of food lovers.
        Dive into a world of flavors and bring your culinary dreams to life with
        Grandmother's recipes!`}
      </p>

      <h2>About the team members:</h2>
      {users.map((user) => (
        <div key={user.id} className="team-member-box">
          <img src={user.image} alt={`${user.name}'s profile`} />
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
