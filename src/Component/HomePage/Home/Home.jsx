import Bannar from "../Bannar/Bannar";
import LatestFoods from "../LatestFoods/LatestFoods";
const latestFoodsPromice = fetch("http://localhost:5000/latest-foods").then(
  (res) => res.json(),
);

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <div className="">
        <LatestFoods latestFoodsPromice={latestFoodsPromice}></LatestFoods>
      </div>
      <br />
    </div>
  );
};

export default Home;
