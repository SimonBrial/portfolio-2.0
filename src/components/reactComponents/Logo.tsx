export default function Logo() {
  return (
    <a href="#about">
      <div className="flex items-center gap-0 text-4xl cursor-pointer">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 56 56"
        >
          <path
            fill="currentColor"
            d="M35.805 47.723c.398.398.914.633 1.523.633c1.219 0 2.133-.915 2.133-2.133c0-.586-.234-1.125-.61-1.524L21.79 28.012l17.063-16.688c.375-.398.609-.96.609-1.523c0-1.219-.914-2.157-2.133-2.157c-.61 0-1.125.235-1.523.633L17.242 26.441c-.445.375-.703.961-.703 1.57c0 .587.258 1.126.703 1.571Z"
          ></path>
        </svg>
        <div className="flex text-3xl">
          <h1>S</h1>
          <h1>B</h1>
          <h1>❤️</h1>
        </div>
        <svg
          className="-mx-4"
          width="1em"
          height="1em"
          viewBox="0 0 15 15"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M4.109 14L9.466 1h1.352L5.46 14z"
            clipRule="evenodd"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 56 56"
        >
          <path
            fill="currentColor"
            d="M18.695 48.367c.586 0 1.102-.234 1.524-.633L38.78 29.57c.446-.445.68-.984.68-1.57c0-.61-.234-1.172-.68-1.57L20.22 8.289a2.073 2.073 0 0 0-1.524-.656a2.122 2.122 0 0 0-2.156 2.156c0 .563.258 1.125.633 1.524L34.21 28L17.17 44.688c-.374.398-.632.937-.632 1.523c0 1.219.938 2.156 2.156 2.156"
          ></path>
        </svg>
      </div>
    </a>
  );
}
