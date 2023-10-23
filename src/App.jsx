import { useState } from "react";
import { Octokit, RequestError } from "octokit";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Main from "./components/Main";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [userData, setUserData] = useState(null);
  const [errorOrNot, setErrorOrNot] = useState(false);
  const octokit = new Octokit({
    auth: import.meta.env.OCTOKIT_TOKEN,
  });

  const fetchUserData = async function (username) {
    try {
      const result = await octokit.request("GET /users/{username}", {
        username: username,
      });
      const userInfo = {
        avatar: result.data.avatar_url,
        name: result.data.name,
        loginName: result.data.login,
        created: result.data.created_at,
        bio: result.data.bio,
        repos: result.data.public_repos,
        followers: result.data.followers,
        following: result.data.following,
        location: result.data.location,
        twitter: result.data.twitter_username,
        url: result.data.blog,
        company: result.data.company,
      };

      setUserData(userInfo);
    } catch (err) {
      if (err instanceof RequestError) {
        console.error(`[${err.status}] ${err.message}`);
        setErrorOrNot(true);
      }
    }
  };

  const handleSubmit = (username) => {
    setErrorOrNot(false);
    fetchUserData(username);
  };

  const handleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={`${darkTheme ? "dark" : ""}`}>
      <div className="w-full h-full bg-lightgrey2 dark:bg-darkgrey1 transition-all duration-300">
        <div className="font-mono flex flex-col gap-[2.4rem] justify-center items-center m-auto max-w-[71rem] h-screen tablet:max-w-[58rem] semimobile:w-[calc(100%-4rem)]">
          <Header darkTheme={darkTheme} handleDarkTheme={handleDarkTheme} />
          <SearchBar handleSubmit={handleSubmit} errorOrNot={errorOrNot} />
          <Main userData={userData} />
        </div>
      </div>
    </div>
  );
}

export default App;
