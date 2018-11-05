import Link from "next/link";

const Log = props => (
  <div>
    <p>Workout Log</p>
    <Link href="/">
      <a>Dashboard</a>
    </Link>
  </div>
);

export default Log;
