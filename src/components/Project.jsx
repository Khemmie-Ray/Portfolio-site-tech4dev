import banner from "../assets/NFT.jpg"

function Project() {
    return (
      <div className="project" id="for-projects">
        <h2>Project</h2>
        <span></span>
        <p>All my project includes links to the source code on Github. Click the button attached to each to know about each project.</p>
        <div className="card-container">
          <div className="card">
            <div className="card-img">
            <img src={banner} alt="" />
            </div>
            <a href="">Github Link</a>
          </div>
          <div className="card">
            <div className="card-img">
            <img src={banner} alt="" />
            </div>
            <a href="">Github Link</a>
          </div>
          <div className="card">
            <div className="card-img">
            <img src={banner} alt="" />
            </div>
            <a href="">Github Link</a>
          </div>

        </div>
      </div>
    )
  }
  
  export default Project