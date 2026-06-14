import React,{useEffect,useState} from "react";
import Cards from "./Cards";
import list from "../assets/list.json";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
   const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${process.env.BACKEND_URL}/book`);   
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here!:)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            pariatur alias, hic veritatis dignissimos fugit officiis in tempore
            eos ipsa. Sequi consequatur praesentium mollitia, ipsum libero porro
            ad delectus nihil. Explicabo deleniti incidunt quas? Ipsam eligendi
            esse unde dolorum a ex ad veniam aperiam perferendis, dicta tempora,
            voluptate nostrum qui non, cupiditate voluptas optio quibusdam!
            Porro ratione illo laborum impedit?
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} size="small" />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;