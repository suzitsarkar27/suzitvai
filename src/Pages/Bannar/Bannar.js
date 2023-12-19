import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Skill from "../../assest/pic/skill1.png";
import Skil2 from "../../assest/pic/skill2.png";
import Skil3 from "../../assest/pic/skill3.png";
import hero from "../../assest/pic/d.png";
import "./Bannar.css";
import Fade from "react-reveal/Fade";
const Bannar = () => {
  return (
    <div class="hero min-h-screen mt-5 " id="home">
      <div class="hero-content flex-col lg:flex-row">
        <div>
          <div>
            <div>
              <Fade left>
                <h3 className="text-2xl mb-5">WELCOME TO MY HOME PROJECT</h3>
                <h2 className=" mt-5">
                  Hi, I’m <span>Suzit</span>
                </h2>
                <h2>
                  a{" "}
                  <span>
                    <Typewriter
                      loop
                      cursor
                      cursorStyle="_"
                      typeSpeed={50}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      words={[" Professional Coder.", " Developer."]}
                    />
                  </span>
                </h2>
                <p>
                  I use animation as a third dimension by which to simplify
                  experiences and kuiding thro each and every interaction. I’m
                  not adding motion just to spruce things up, but doing it in
                  ways that.
                </p>
                <a
                  href="https://drive.google.com/file/d/12GbCFyNFYyPX5gumKYvntHuiRGCbnz0Y/view?usp=sharing"
                  target="_blank"
                >
                  <button className="btn_shadow mt-8">DOWENLODE RESUME</button>{" "}
                </a>
              </Fade>

              <div className="hero_btn d_flex">
                <div className="col_1">
                  <h4>FIND WITH ME</h4>
                  <div className="button">
                    <a
                      href="https://www.facebook.com/suzit.sarkar.39/"
                      target="_blank"
                    >
                      <button className="btn_shadow">
                        <i class="fab fa-facebook-f"></i>
                      </button>
                    </a>

                    <a
                      href="https://www.instagram.com/suzitsarkar5/"
                      target="_blank"
                    >
                      <button className="btn_shadow">
                        <i class="fab fa-instagram"></i>
                      </button>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/devsuzit/"
                      target="_blank"
                    >
                      <button className="btn_shadow">
                        <i class="fab fa-linkedin-in"></i>
                      </button>
                    </a>
                  </div>
                </div>

                <div className="col_1">
                  <h4>BEST SKILL ON</h4>
                  <button className="btn_shadow">
                    <img src={Skill} alt="" />
                  </button>

                  <button className="btn_shadow">
                    <img src={Skil2} alt="" />
                  </button>

                  <a
                    href=" https://www.figma.com/files/recent?fuid=1063111964740199590"
                    target="_blank"
                  >
                    <button className="btn_shadow">
                      <img src={Skil3} alt="" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Fade top>
          <img src={hero} class="max-w-sm rounded-lg shadow-2xl radious" />
        </Fade>
      </div>
    </div>
  );
};

export default Bannar;
