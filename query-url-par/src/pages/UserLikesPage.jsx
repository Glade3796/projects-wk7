import { useState } from "react";
import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";

export function UserLikesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  //   const { searchParams } = useSearchParams();

  const sort = searchParams && searchParams.get("sort");
  const [animals, serAnimals] = useState([
    "Lion",
    "Elephant",
    "Giraffe",
    "Tiger",
    "Kangaroo",
    "Penguin",
    "Dolphin",
    "Koala",
    "Zebra",
    "Panda",
    "Cheetah",
    "Monkey",
    "Hippopotamus",
    "Sloth",
    "Gorilla",
    "Polar Bear",
    "Raccoon",
    "Ostrich",
    "Kangaroo",
    "Lemur",
  ]);
  const handleChange = (event) => {
    setSearchParams({ sort: event.target.value });
    const sortOrder = searchParams.get("sort");
    if (sortOrder == "asc") {
      animals.sort();
    } else if (sortOrder == "desc") {
      animals.sort();
      animals.reverse();
    }
  };

  return (
    <>
      <h3>Likes</h3>
      <p>sort: {sort}</p>
      <form>
        <label>
          Sort by:
          <select
            value={searchParams.get("sort") || ""}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </form>
      <ul>
        {animals.map((i) => {
          return <li>{i}</li>;
        })}
      </ul>
      <Outlet />
    </>
  );
}
