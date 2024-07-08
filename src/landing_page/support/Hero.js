import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 mx-3">
        <div className="col-6 px-5 pb-5">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." />
          <i class="fa-solid text-muted fs-4 fa-magnifying-glass"></i>
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 px-5 pb-5">
          <h1 className="fs-3">Featured</h1>
          <ol style={{ lineHeight: "2.5" }}>
            <li>
              <a href="">Issue with order status update [Resolved]</a>
            </li>
            <li>
              <a href="">Surveillance measure on scrips - July 2024</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
