import "./App.css";

let pfp = require('./media/images/pfp.jpg');

function App() {
  return (
    <>
    <div class="header">
      <h2>Nathaniel Brunnett</h2>
      <p>Programming Enthusiast</p>
    </div>
    
    <div class="topnav">
        <a href="http://localhost:3000/">Home</a>
    </div>

    <div class="wrapper">

      <div class="row">
        
        <div class="leftcolumn">
          <div class="card">
            <h2>Barcelona Coding School</h2>
            <h5>October 7, 2023 - December 23, 2023</h5>
            <div class="imageOfSchoolLogo"></div>
            <p>Going to do some serious coding for now!</p>
          </div>
        </div>

        <div class="rightcolumn">
          <div class="card">
            <h2>About Me</h2>
            <img src={pfp} alt="profile picture" />
            <p>I hope to one day program software that enables the invention of the self-driving cars</p>
          </div>
          <div class="card">
            <h3>Social Media</h3>
            <a href="https://github.com/natebrunnett">Github icon natebrunnett</a>
          </div>
        </div>

      </div>

    </div>
    
    <footer>
        <h2>Business Inquiries</h2>
        <h5>nathanieljbrunnett@gmail.com</h5>
    </footer>
    
    </>
  );
}

export default App;
