import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="flex justify-center items-center flex-col w-full h-full">
        <h1 className="text-3xl font-bold m-11">Contact Me</h1>
        <h3 className="text-xl">
          Email =
          <a href="mailto:dilipsarvaiya992@gmail.com">
            dilipsarvaiya992@gmail.com
          </a>
        </h3>
        <h3 className="text-xl">
          Mobile =<a href="tel:+91 8154810034"> 8154810034</a>
        </h3>
      </div>
    );
  }
}

export default Contact;
