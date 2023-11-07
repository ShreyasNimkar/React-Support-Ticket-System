import Spline from "../components/Spline";
import { AiOutlineQuestionCircle, AiFillTags } from "react-icons/ai";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-div">
        <section className="heading">
          <h1>What do you need help with</h1>
        </section>
        <p>Please choose an option below</p>

        <Link to="/new-ticket" className="btn btn-reverse btn-block">
          <AiOutlineQuestionCircle /> Create new ticket
        </Link>
        <Link to="/tickets" className="btn btn-block">
          <AiFillTags /> View my tickets
        </Link>
      </div>
    </>
  );
}

export default Home;
