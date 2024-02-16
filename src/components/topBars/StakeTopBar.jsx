import { NavLink as A } from "react-router-dom"
import {AiFillThunderbolt, AiOutlineWallet} from "react-icons/ai"
function StakeTopBar() {
  return (
    <div className="stake_top_bar">
          <div className="content">
              <A className="logo" to={"/"}>Krypto staking</A>
              <ul>
                <li><A to={"/stake"}><AiFillThunderbolt /> STAKE</A></li>
                <li><A to={"/"}><AiOutlineWallet /> REWARDS</A></li>
              </ul>
          </div>
          <div className="address_container">
                <h5>0.0HBAR</h5>
                <p>Oxbaaf...75cec7 <div className="dot"></div></p>
              </div>
    </div>
  )
}

export default StakeTopBar