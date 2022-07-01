import { gql } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

function App() {
  useEffect(() => {
    client.query({
      query: GET_LESSONS_QUERY,
    });
  }, []);

  return (
    <h1 className="text-5xl font-bold text-red-valorant">
      Hello Valorant Agents
    </h1>
  );
}

export default App;
