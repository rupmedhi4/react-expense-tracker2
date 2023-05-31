import React from 'react'
import { Carousel } from 'react-bootstrap';

const Background = () => {
  return (
    <Carousel className='' slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/flat-monthly-payments-calendar-woman-with-payment-schedule-pay-money-interest-rate-fees-principal-financial-bills-by-month-period-reminder-salary-day-due-date-debt-loan-house-rent_88138-954.jpg?w=1060&t=st=1682830294~exp=1682830894~hmac=0c93b459d71a27dba861bed0ad583a021d8ee9c0e6beae68bf014b43335c1f1d"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ Width: "10rem" }}
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/analysis-concept-illustration_114360-1147.jpg?w=740&t=st=1682830453~exp=1682831053~hmac=be77cbc66ccd918e730b0e37562c6d50d3f8d65188873bfc032937eff68950e4"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Background
