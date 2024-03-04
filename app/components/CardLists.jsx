import Card from "./Card";
import Pagination from "./Pagination";

const CardLists = () => {
  return (
    <div className=" md:w-2/3 w-full">
      <h2>Recent Posts</h2>
      <Card />
      <Card /> 
      <Card />
       <Card />
      <Pagination />
    </div>
  );
};

export default CardLists;
