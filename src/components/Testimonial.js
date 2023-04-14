import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Testimonial extends Component {
  render() {
    return (
      // Carousel Options
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3500}
        className="pb-5"
      >
        {/* Carousel */}
        <div>
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Shirley"
          />
          <div className="myCarousel">
            <h3 className="pt-3">Shirley Fultz</h3>
            <h4>Client</h4>
            <p>
              I absolutely love my new hair! Lexy hooked me up on short notice.
              I'll definitely be coming back soon!
            </p>
          </div>
        </div>

        <div>
          <img
            src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Daniel"
          />
          <div className="myCarousel">
            <h3 className="pt-3">Daniel Keystone</h3>
            <h4>Client</h4>
            <p>
              My normal barber shop was closed and it was a late Sunday evening.
              Lexy took me shortly after another customer and did a better job
              than my normal barber! I'm really impressed!
            </p>
          </div>
        </div>

        <div>
          <img
            src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Theo"
          />
          <div className="myCarousel">
            <h3 className="pt-3">Theo Sorel</h3>
            <h4>Client</h4>
            <p>
              Lexy has always done a great job on my daughter's hair, so when my
              clippers broke I figured it was my turn in the chair. All I can
              say is I won't need to buy news ones!
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}
