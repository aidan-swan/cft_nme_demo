import casperImg from "./assets/casper.jpg"
import aidanImg from "./assets/aidan.jpg"

function Profilepage() {
    return (
        <>
            <div className="profile">
                <img className="profileImg" src={aidanImg} alt="Aidan" />
                <h2 className="profile-title">Aidan</h2>
                <p className="profileText">
                    A dev.
                </p>
            </div>
            <div className="profile">
                <img className="profileImg" src={casperImg} alt="Casper" />
                <h2 className="profile-title">Casper</h2>
                <p className="profileText">
                    Another dev.
                </p>
            </div>


        </>
    );
}

export default Profilepage;