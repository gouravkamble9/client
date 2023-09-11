import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-2.webp";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  const [debouncedQuery, setDebouncedQuery] = useState(""); // Store the debounced query

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebouncedQuery(query); // Update the debounced query after the delay
    }, 500); // Adjust the delay time as needed 

    return () => {
      clearTimeout(debounceTimeout); // Clear the timeout if the user continues typing
    };
  }, [query]);

  let { data } = useFetch(
    `/api/products?populate=*&[filters][title][$contains]=${debouncedQuery}`
  ); // Use the debounced query for the API request

  if (!debouncedQuery.length) {
    data = null;
  }

  return (
    <div className="search-modal">
      <div className="form-field">
        <input 
        type="text" 
        autoFocus 
        placeholder="Search For Products" 
        value={query}
        onChange={handleOnChange}
        />
        <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {data?.data?.map((item)=>(

          <div key={item.id} className="search-result-item" 
          onClick={()=>{
            navigate("/product/" + item.id)
            setShowSearch(false)
            }}>
            <div className="img-container">
              <img src={
                        item.attributes.img.data[0].attributes.url} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">{item.attributes.title}</span>
              <span className="desc">{item.attributes.desc}</span>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
