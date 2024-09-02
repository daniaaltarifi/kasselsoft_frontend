import React from "react";
import ReactCardSlider from "react-card-slider-component";

function LandingPage() {
  const slides = [
    {
      image: "https://picsum.photos/200/300",
      title: "This is a title",
      description: "This is a description",
      clickEvent: () => {},  // No-op function
    },
    {
      image: "https://picsum.photos/600/500",
      title: "This is a second title",
      description: "This is a second description",
      clickEvent: () => {},  // No-op function
    },
    {
      image: "https://picsum.photos/700/600",
      title: "This is a third title",
      description: "This is a third description",
      clickEvent: () => {},  // No-op function
    },
    {
      image: "https://picsum.photos/500/400",
      title: "This is a fourth title",
      description: "This is a fourth description",
      clickEvent: () => {},  // No-op function
    },
    {
      image: "https://picsum.photos/200/300",
      title: "This is a fifth title",
      description: "This is a fifth description",
      clickEvent: () => {},  // No-op function
    },
    {
      image: "https://picsum.photos/800/700",
      title: "This is a sixth title",
      description: "This is a sixth description",
      clickEvent: () => {},  // No-op function
    },
    {
      image: "https://picsum.photos/300/400",
      title: "This is a seventh title",
      description: "This is a seventh description",
      clickEvent: () => {},  // No-op function
    },
  ];

  return (
    <>
      <section className="margin_section">
        <div className="container text-center">
          <p className="WHY_CHOOSE_US_home">
            Let's Start a New Project Together
          </p>
          <h3 className="we_help_you_home">Product Development</h3>
          <p>
            Unleash the power of digitized solutions, including web, Android,
            and iOS apps, Ignite the potential of cutting-edge digital
            solutions, spanning web applications, Android, and iOS platforms,
            infused with the prowess of Blockchain, AI Chatbots, Machine
            Learning, and IoT technologies. Our adept team is committed to
            shaping and implementing dynamic solutions, empowering you to
            conceptualize, create, and expand your enterprise seamlessly. Propel
            your business to new heights with state-of-the-art innovation and
            technology. Let's co-create the future!
          </p>
          <div className="row" style={{width:"100%"}}>
            <div className="col-lg-12 col-md-6 col-sm-12">
            <ReactCardSlider slides={slides}/>
            </div>
            {/* <div className="col-lg-4 col-md-6 col-sm-12">
              Col-lg-4 col-md-6 col-sm-12umn
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              Col-lg-4 col-md-6 col-sm-12umn
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
