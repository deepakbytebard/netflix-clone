import Navbar from "../../components/navbar/Navbar";
import Features from "../../components/features/Features"
import "./Home.scss";
import List from "../../components/list/List";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Features />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
