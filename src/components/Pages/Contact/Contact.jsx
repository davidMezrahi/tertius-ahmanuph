import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import fb from "../../../assets/img/facebook-2.svg";
import insta from "../../../assets/img/instagram.svg";
import x from "../../../assets/img/twitter-x.svg";
import tube from "../../../assets/img/youtube.svg";
import send from "../../../assets/img/send-1.svg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Contact = () => {
  const contactTXT = useRef(null);
  const pTxt = useRef(null);

  useGSAP(() => {
    const headLineFirst = pTxt.current.children[0];
    const headLineSecond = headLineFirst.nextSibling;
    const headLineThird = headLineSecond.nextSibling;
    const headLineFourth = headLineThird.nextSibling;
    const headLineFifth = headLineFourth.nextSibling;
    const headLineSixth = headLineFifth.nextSibling;

    gsap.from(
      [
        headLineFirst.children,
        headLineSecond.children,
        headLineThird.children,
        headLineFourth.children,
        headLineFifth.children,
        headLineSixth.children,
      ],
      {
        yPercent: 130,
        stagger: 0.1,
        delay: 0.5,
      }
    );

    gsap.from(contactTXT.current, {
      yPercent: 130,
      duration: 1.2,
      stagger: 0.1,
    });
  }, []);

  return (
    <section id="contact">
      <Container fluid>
        <Row>
          <Col xs="12" sm="12" md="6" xl="6">
            <div className="contact-txt-wrapper">
              <h2 className="text-left" ref={contactTXT}>
                SEND SHADERA AN E-MAIL
              </h2>
            </div>
            <p className="p-txt" ref={pTxt}>
              <div className="p-txt-container">
                <div>Please use the following forms to submit questions</div>
              </div>
              <div className="p-txt-container">
                <div>
                  regarding events, tours, music or other label related media.
                </div>
              </div>
              <div className="p-txt-container">
                <div>Feel free to also email us directly at</div>
              </div>
              <div className="p-txt-container">
                <div>
                  <a href="mailto:thirddim9nsion@gmail.com">
                    thirddim9nsion@gmail.com
                  </a>
                </div>
              </div>
              <div className="p-txt-container">
                <div>
                  A representative will respond within 24-48 hours, thank
                </div>
              </div>
              <div className="p-txt-container">
                <div>you for your patience.</div>
              </div>
            </p>
            <br />
            <br />
            <address>7532 Walnutwood Ave.</address> <br />
            <a href="mailto:email@bandname.com">email@bandname.com</a> <br />
            <a href="tel:+88 (0) 101 0000">+88 (0) 101 0000</a> <br />
            <ul className="d-flex align-items-center justify-content-start mt-5">
              <li>
                <a href="" target="_blank">
                  <img src={fb} alt="icon" width={30} />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <img src={insta} alt="icon" width={30} />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <img src={x} alt="icon" width={30} />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <img src={tube} alt="icon" width={30} />
                </a>
              </li>
            </ul>
          </Col>
          <Col xs="12" sm="12" md="6" xl="6">
            <form action="" method="get">
              <Row>
                <Col md="6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                </Col>
                <Col md="6">
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </Col>
                <Col md="12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </Col>
                <Col md="12">
                  <div className="mb-3">
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      className="form-control"
                      placeholder="Message"
                    ></textarea>

                    <button className="btn-send">
                      Send &nbsp;
                      <img src={send} alt="icon" width={20} />
                    </button>
                  </div>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
