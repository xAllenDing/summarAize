const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">

        <button
          type="button"
          onClick={() => window.open('https://github.com/xAllenDing')}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Welcome to <br className="max-md:hidden" />
        <span className="blue_gradient">SummarAIze</span>
      </h1>
      <h2 className="desc">
      To begin, enter in a URL containing an article of your choice, and allow the Open-AI to summarize it for you!
      </h2>
    </header>
  );
};

export default Hero;