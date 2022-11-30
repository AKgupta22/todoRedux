import React, { useEffect, useState } from "react";
import JsonData from "../JsonData";
import { Link, useParams } from "react-router-dom";
export default function SingleMessage() {
  const [data, setData] = useState({});
  const { q } = useParams();
  useEffect(() => {
    const query = parseInt(q);
    setData(JsonData.find((item, i) => item.id === query));
  }, [q]);
  return (
    <div className="container mt-3">
      <div>
        <h4 className="text-center">User {data?.id} Messages</h4>
        <ul className="list-group mt-2">
          {
            data?.message?.map((item,i)=>{
              return <li key={i} className="list-group-item">{item}</li>
            })
          }
        </ul>
        <Link to='/message' class="btn btn-secondary mt-2">Back</Link>
      </div>
    </div>
  );
}
