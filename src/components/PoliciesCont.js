import { Container, Row, Col } from "reactstrap";

const PoliciesCont = () => {
  return (
    // Policies page
    <div>
      <Container>
        <Row className="py-5 text-left">
          <Col>
            <h1>Beauté Artistique Salon - Policies</h1>
          </Col>
        </Row>

        <Row>
          <Col className="py-4">
            <h5>
              <i>Cancellation policy:</i>
            </h5>
            <p>
              For appointments cancelled or rescheduled within 24 hours from the
              start of your service, 50% of the service total will be charged.
              For no show or same day cancellations, 100% of the service total
              will be charged. Strict enforcement of this policy ensures our
              stylists do not lose essential income from last minute
              cancellations.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="py-4">
            <h5>
              <i>Credit Card on File policy:</i>
            </h5>
            <p>
              We require a card on file to reserve any services at the salon.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="py-4">
            <h5>
              <i>Late policy:</i>
            </h5>
            <p>
              Please don’t be late. It is hard enough to stay on a schedule
              while performing life transforming services! One late client can
              throw the whole day out of whack, however we will always do our
              best to accommodate our clients in every way.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="py-4">
            <h5>
              <i>Child policy:</i>
            </h5>
            <p>
              We LOVE children… some of us even have a few! However, for safety
              reasons, children under the age of 5 will no longer be permitted
              in the salon for any reason, including services. Even the best
              behaved children are subject to elements of danger in the salon
              environment (sharp scissors, hot irons, hair chemicals, etc.)
              Additionally, our guests look forward to their salon experience as
              personal time, away from children. We ask that you please respect
              this policy, and accept our appreciation for your understanding.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="py-4">
            <h5>
              <i>Satisfaction policy:</i>
            </h5>
            <p>
              Beauté Artistique Salon stands behind our work 100%. We do not
              claim to be magicians or mind readers (publicly), so if for any
              reason you are not completely satisfied with the service you
              received, we will make it right! Just let us know with in a
              reasonable amount of time (a week) after your service, and we will
              promptly get you back on the schedule for any tweaks that need to
              be performed. We know that we have an incredible team (confident
              not arrogant), so any fix (beyond giving you magic hair growing
              pills) is doable. Please don’t hesitate to ask, we really mean it!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PoliciesCont;
