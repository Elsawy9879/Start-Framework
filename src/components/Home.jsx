import avatar from "../assets/avataaars.svg";
import "./Home.css";

export default function Home() {
  return (
    <section className="home text-center">
      <img src={avatar} alt="Avatar" className="avatar" />
      <div>
        <h2 className="text-uppercase mb-3 fs-1 fw-bolder text-white">
          START FRAMEWORK
        </h2>
        <div className="lines-with-star">
          <div className="line"></div>
          <i className="fa-solid fa-star" style={{ color: "#ffffff" }}></i>
          <div className="line"></div>
        </div>{" "}
      </div>
      <div className="paragraph">
        Graphic Artist - Web Designer - Illustrator
      </div>
    </section>
  );
}
