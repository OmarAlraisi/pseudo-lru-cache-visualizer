import "./App.css";

const InvalidScreen = () => {
  return (
    <div className="invalid-screen--main-root">
      <div className="invalid-scree--message-container">
        <span className="message-container--title">Oops!!</span>
        <div className="message-container--message-box">
          <span className="message-box--message-hook"> Your Experiencxe Matters </span>
          <span className="message-box--message-content">
            Unfortunately, the screen you are using currently is not 
            of the suggested minimum size. This may cause the visualizer to appear small.
          </span>
        </div>
        <span className="message-container--suggestion">Try a screen of size <u>1000x565pt</u> or more.</span>
      </div>
    </div>
  );
}

export default InvalidScreen;