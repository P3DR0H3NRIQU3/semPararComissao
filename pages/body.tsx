import { Typewriter } from 'react-simple-typewriter';
export default function Body() {
  return (
    <div className="main">
      <div className="cont-body">
        <TypewriterEffect />
      </div>
    </div>
  );
}

function TypewriterEffect() {
  return (
    <div className="mainBody">
      <h1 className="title-body">
        <Typewriter
          words={["Calculadora de comissões",]}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          
          delaySpeed={3000}
        />
      </h1>
    </div>
  );
}