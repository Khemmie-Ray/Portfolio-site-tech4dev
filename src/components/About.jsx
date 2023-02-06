import profilePic from "../assets/download.png"

function About() {
  return (
    <div className="about" id="for-about">
      <h2>About</h2>
      <span></span>
      <div  className='about-info'>
        <div className="bio">
            <h3>Who am I?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis lacus a maximus. Duis imperdiet bibendum posuere. Nullam pharetra feugiat mi, et interdum nibh tempor ullamcorper.</p>
            <p>Vestibulum sit amet nibh vel nulla gravida pellentesque. Vestibulum massa neque, tincidunt eu sem ut, aliquam imperdiet neque. Nullam neque diam, ultrices semper scelerisque ut, luctus nec orci.</p>
            <p>Aenean in enim enim. Sed posuere nibh ante. Sed odio risus, rutrum nec tincidunt sed, varius vel ex. Integer mauris odio, sodales vel quam ut, dignissim laoreet justo.</p>
        </div>
        <div className="about-img">
    <img src={profilePic} alt="" />
        </div>
        </div>
    </div>
  )
}

export default About