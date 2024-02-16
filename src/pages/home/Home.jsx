/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { KryptoContext } from "../../context/KryptoContext.jsx";
import hero_bg from "../../assets/svg/hero_bg.svg";
import { ActionIcon, Burger, Button, Drawer } from "@mantine/core";
import { Link as A } from "react-router-dom";
import hero_img from "../../assets/svg/hero_img.svg";
import {
  VscCompassActive,
  VscGift,
  VscShield,
} from "react-icons/vsc";import {
  TfiLinkedin,
  TfiFacebook,
  TfiTwitterAlt,
  TfiInstagram,
} from "react-icons/tfi";
import { validator_img } from "../../data";

function Home() {
  const { address, connectMetaMask, disconnectWallet } = useContext(KryptoContext);
  const [showNav, setShowNav] = useState(false);


  return (
    <>
      <div className="top_bar">
        <A to="/" className="logo">
        StakeHub
        </A>
        <ul>
          <li>
            <A to="/">Network</A>
          </li>
          <li>
            <A to="/">Community</A>
          </li>
          <li>
            <A to="/">About</A>
          </li>
        </ul>
        {
          !address ? <Button onClick={connectMetaMask} color="violet.5">Connect Wallet</Button> : <button onClick={disconnectWallet} className="wallet-btn">{address.slice(0, 5)}...{address.slice(38)}</button>
        }
        <div className="burger_container">
          <Burger
            onClick={() => setShowNav(!showNav)}
            // opened={showNav}
            color="white"
          />
        </div>

      </div>
      <Drawer w={"100%"} opened={showNav} onClose={() => setShowNav(false)}>
        <ul style={{ display: "grid", gap: "20px", textAlign: "center" }}>
          <li>
            <a href="">Network</a>
          </li>
          <li>
            <a href="">Community</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <Button color="voilet.5">Connect Wallet</Button>

          </li>
        </ul>
      </Drawer>

      <section className="hero">
        <img className="hero_bg" src={hero_bg} alt="" />
        <div className="content">
          <div className="text">
            <h1>StakeHub, Trusted staking platform for the masses </h1>
            <p>Simplified and secure participation in staking</p>
            {!address ? (
              <Button size="lg" onClick={connectMetaMask}>
                Connect Wallet
              </Button>
            ) : (
              <A className="stake-link" to={"/stake"}>
                Start Staking
              </A>
            )}
          </div>
          <div className="img_container">
            <img src={hero_img} alt="" className="hero_img" />
          </div>
        </div>
      </section>

      <section className="how_works">
        <h1 className="heading">How it Works</h1>
        <div className="content">
          <div className="card">
            <h3>Step 1</h3>
            <p>
              Connect your wallet to StakeHub by clicking on Get started
              or Connect wallet
            </p>
          </div>

          <div className="card">
            <h3>Step 2</h3>
            <p>Stake any amount of your token and receive daily rewards </p>
          </div>

          <div className="card">
            <h3>Step 3</h3>
            <p>You can buy, sell abd stake your coin any time </p>
          </div>
        </div>
      </section>

      <div className="best_features">
        <div className="heading">
          <h1>Why we are the Best</h1>
        </div>
        <div className="container">
          <div className="card">
            <ActionIcon size={50} color="brand" variant="light">
              <VscShield size={30} />
            </ActionIcon>
            <h2>Safe and Secure</h2>
            <p>
              We understand the importance of creating a reliable and secure
              environment for you to make investments.{" "}
            </p>
          </div>

          <div className="card">
            <ActionIcon size={50} color="brand" variant="light">
              <VscGift size={30} />
            </ActionIcon>
            <h2>Easy Transaction</h2>
            <p>
              We understand the importance of creating a reliable and secure
              environment for you to make investments.
            </p>
          </div>

          <div className="card">
            <ActionIcon size={50} color="brand" variant="light">
              <VscCompassActive size={30} />
            </ActionIcon>
            <h2>Reward and Bonus</h2>
            <p>
              We understand the importance of creating a reliable and secure
              environment for you to make investments.
            </p>
          </div>
        </div>
      </div>

      <section className="validator">
        <div className="heading_container">
          <h1>Validators</h1>
          <p>Explore validators that help grow Lido</p>
        </div>
        <div className="content">
          {validator_img.map((img) => (
            <img key={img} src={img} alt="" />
          ))}
        </div>
      </section>

      <section className="subscribe">
        <h1 className="heading">Subscribe to our mailing list</h1>
        <p>Stay up to date with Lido developments</p>
        <div className="input_container">
          <input type="text" placeholder="Email address" />
          <Button>Subscribe</Button>
        </div>
        <p className="text">
          By subscribing you accept our <A to={""}>Privacy Notice</A>
        </p>
      </section>

      <section className="footer_section">
        <footer>
          <div className="footer_content">
            <div className="footer_info">
              <h1>Krypto Stake</h1>
              <div className="footer_details">
                <ul>
                  <p>Location: Delaware, US</p>
                  <p>
                    Specialties: Freelancers, GIG Economy, Crypto payments,
                    Customer first , Startups, SMBs in Africa , B2B beyond
                    Africa, and Talent Platform
                  </p>
                </ul>

                <ul>
                  <h5>Information</h5>
                  <li>
                    <A to={"/"}>About Us</A>
                  </li>
                  <li>
                    <A to={"/"}>Contact US</A>
                  </li>
                  <li>
                    <A to={"/"}>FaQ</A>
                  </li>
                  {/* <li>
                                        <A to={"/"}>FAQ</A>
                                    </li> */}
                </ul>

                <ul>
                  <h5>Resources</h5>
                  <li>
                    <A to={"/"}>Blog</A>
                  </li>
                  <li>
                    <A to={"/"}>Events and News</A>
                  </li>
                </ul>

                <ul>
                  <h5>Help</h5>
                  <li>
                    <A to={"/"}>Contact us</A>
                  </li>
                  <li>
                    <A to={"/"}>Support center</A>
                  </li>
                  {/* <li>
                                        <A to={"/"}>FAQ</A>
                                    </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            <ul>
              <li>
                <A to={"/"}>Terms</A>
              </li>
              <li>
                <A to={"/"}>Privacy</A>
              </li>
              <li>
                <A to={"/"}>Cookies</A>
              </li>
            </ul>

            <ul>
              <h5>Socials</h5>
              <div className="socials_container">
                <li>
                  <A target={"_blank"} to={"https://tr.ee/BpY4iMjOXI"}>
                    <TfiLinkedin />
                  </A>
                </li>
                <li>
                  <A target={"_blank"} to={"https://tr.ee/zV2EUbKwik"}>
                    <TfiFacebook />
                  </A>
                </li>
                <li>
                  <A target={"_blank"} to={"https://tr.ee/UzhOU3az6O"}>
                    <TfiTwitterAlt />
                  </A>
                </li>
                <li>
                  <A target={"_blank"} to={"https://tr.ee/f5Vx--7P2x"}>
                    <TfiInstagram />
                  </A>
                </li>
              </div>
            </ul>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Home;
