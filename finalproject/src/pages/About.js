import "./About.css";
import AboutPic3 from "../images/logos/aboutus.jpg";

const About = () => {
  return (
    <>
      <section className="container my-3">
        <div className="row justify-center">
          <div className="col-md-6 col-sm-12 align-self-start pd">
            <h2 className="lemon-primary-lemon">Little Lemon</h2>
            <h3 className="emon-primary-dark">Central Asia</h3>
            <p>
              Welcome to Little Lemon, a delightful culinary oasis nestled in the heart of the city. As you step through our charming entrance, you are greeted by an ambiance that is both vibrant and cozy. 
              The scent of freshly squeezed lemons fills the air, setting the tone for an experience that is as refreshing as it is flavorful. 
              Little Lemon takes pride in offering a diverse menu that reflects a fusion of international cuisines, all crafted with a touch of zest to awaken your taste buds.
            </p>
            <p>
            Our menu at Little Lemon is a culinary journey that celebrates the art of gastronomy. From zesty lemon-infused appetizers to mouthwatering main courses, each dish is a masterpiece designed to tantalize your senses. 
            Whether you're a fan of tangy citrus flavors or crave a comforting classic, our chefs expertly blend ingredients to create a symphony of taste. 
            The Little Lemon experience goes beyond just a meal; it's a celebration of good food, good company, and the joy that comes from savoring the little moments in life.

            </p>
            <p>At Little Lemon, we believe in creating not just a dining experience but a community. 
              Our cozy yet modern decor provides the perfect backdrop for intimate dinners, family gatherings, or casual brunches with friends. 
              Our staff is dedicated to ensuring your visit is memorable, and our commitment to using fresh, locally sourced ingredients reflects our passion for both quality and sustainability. 
              Join us at Little Lemon, where every bite is a burst of sunshine on your palate, and every visit leaves you craving the next.</p>
          </div>
          <div className="col-md-6 col-sm-12 text-center align-self-center">
            <div className="my-3">
              <img className="about-pic img-fluid" src={AboutPic3} alt="About us 1" />
            </div>
            <div>
              <img className="about-pic img-fluid" src={AboutPic3} alt="About us 2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
