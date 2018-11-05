import Link from "next/link";

const Home = props => (
  <div>
    <p>KILOGRAM</p>
    <Link href="/log">
      <a>Previous Workouts</a>
    </Link>
  </div>
);

export default Home;
