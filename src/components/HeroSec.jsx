import React from "react";
import { Col, Row } from "react-bootstrap";
import arrow from "../assets/images/img/rightarrow.png";
import personimg from "../assets/images/img/personicon.png";
const HeroSec = () => {
  return (
    <section>
      <div className="custom_container">
        <Row>
          <Col lg={6} className=" bg-b lack">
            <div>
              <div className="bg-white cierathonas_widdth px-3">
                <div className="d-flex   justify-content-between border_ccc">
                  <div className="d-flex align-items-start">
                    <img src={personimg} alt="personimg" />
                    <div className="ms-3">
                      <p className=" ff_Segoe fw-normal fs_10 mb-0">
                        Ciera Thomas
                      </p>
                      <p className=" ff_Segoe fw-normal fs_10 clr_edit_text">
                        Edit
                      </p>
                    </div>
                  </div>
                  <svg
                    width="4"
                    height="14"
                    viewBox="0 0 4 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 12C3.5 12.3978 3.34196 12.7794 3.06066 13.0607C2.77936 13.342 2.39782 13.5 2 13.5C1.60218 13.5 1.22064 13.342 0.93934 13.0607C0.658035 12.7794 0.5 12.3978 0.5 12C0.5 11.6022 0.658035 11.2206 0.93934 10.9393C1.22064 10.658 1.60218 10.5 2 10.5C2.39782 10.5 2.77936 10.658 3.06066 10.9393C3.34196 11.2206 3.5 11.6022 3.5 12ZM3.5 7C3.5 7.39782 3.34196 7.77936 3.06066 8.06066C2.77936 8.34196 2.39782 8.5 2 8.5C1.60218 8.5 1.22064 8.34196 0.93934 8.06066C0.658035 7.77936 0.5 7.39782 0.5 7C0.5 6.60218 0.658035 6.22064 0.93934 5.93934C1.22064 5.65804 1.60218 5.5 2 5.5C2.39782 5.5 2.77936 5.65804 3.06066 5.93934C3.34196 6.22064 3.5 6.60218 3.5 7ZM3.5 2C3.5 2.39782 3.34196 2.77936 3.06066 3.06066C2.77936 3.34196 2.39782 3.5 2 3.5C1.60218 3.5 1.22064 3.34196 0.93934 3.06066C0.658035 2.77936 0.5 2.39782 0.5 2C0.5 1.60218 0.658035 1.22064 0.93934 0.93934C1.22064 0.658035 1.60218 0.5 2 0.5C2.39782 0.5 2.77936 0.658035 3.06066 0.93934C3.34196 1.22064 3.5 1.60218 3.5 2Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="mt-2">
                  {/* 1 */}
                  <div className="d-flex justify-content-between align-items-center">
                    <span className=" ff_Segoe fw-semibold fs_10">1.</span>
                    <div className="d-flex justify-content-between">
                      <div className="blck_line"></div>
                      <div className="green_line ms-1"></div>
                      <div className="blck_big_line ms-1"></div>
                    </div>
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 5.47918C4.88889 5.47918 4.78112 5.45834 4.67667 5.41668C4.57223 5.37501 4.48556 5.31945 4.41667 5.25001L0.583338 1.41668C0.43056 1.2639 0.354172 1.06945 0.354172 0.833343C0.354172 0.597232 0.43056 0.402788 0.583338 0.25001C0.736116 0.0972321 0.930561 0.0208435 1.16667 0.0208435C1.40278 0.0208435 1.59723 0.0972321 1.75001 0.25001L5 3.50001L8.25 0.25001C8.40278 0.0972321 8.59723 0.0208435 8.83334 0.0208435C9.06945 0.0208435 9.26389 0.0972321 9.41667 0.25001C9.56945 0.402788 9.64584 0.597232 9.64584 0.833343C9.64584 1.06945 9.56945 1.2639 9.41667 1.41668L5.58334 5.25001C5.5 5.33334 5.40973 5.39251 5.3125 5.42751C5.21528 5.46251 5.11112 5.47973 5 5.47918Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  {/* 2 */}
                  <div className="d-flex align-items-center">
                    <span className=" ff_Segoe fw-semibold fs_10 pe-3">2.</span>
                    <div className="d-flex ms-1">
                      <div className="second_blck_line"></div>
                      <div className="second_green_line ms-1"></div>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="d-flex align-items-center">
                    <span className=" ff_Segoe fw-semibold fs_10 pe-3">2.</span>
                    <div className="d-flex ms-1">
                      <div className="thirdblck_line"></div>
                      <div className="thirdgreen_line ms-1"></div>
                      <div className="third_thrd_blck_line ms-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white aveen_div">
                <p className=" ff_Segoe fw-normal fs_8 mb-1">5500 72nd Ave N</p>
                <p className=" ff_Segoe fw-semibold fs_8 clr_green mb-1">
                  $150,000
                </p>
                <p className=" ff_Segoe fw-normal clr_4d4d4d fs_5 col-6 mb-3">
                  Pinellas Park, FL inheritance
                </p>
                <div className="text-center right_arrow_bg">
                  <svg
                    width="11"
                    height="8"
                    viewBox="0 0 11 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.51967 7.61458C6.38484 7.47975 6.32012 7.31683 6.32552 7.12582C6.33091 6.93481 6.40125 6.77189 6.53653 6.63706L8.44102 4.73257H0.924174C0.733163 4.73257 0.572939 4.66785 0.443501 4.53841C0.314063 4.40897 0.249568 4.24897 0.250018 4.05841C0.250018 3.8674 0.314737 3.70717 0.444175 3.57774C0.573613 3.4483 0.733612 3.3838 0.924174 3.38425H8.44102L6.51967 1.46291C6.38484 1.32808 6.31743 1.16785 6.31743 0.982234C6.31743 0.796616 6.38484 0.636616 6.51967 0.502235C6.6545 0.367403 6.81473 0.299988 7.00035 0.299988C7.18596 0.299988 7.34596 0.367403 7.48035 0.502235L10.5646 3.5865C10.632 3.65392 10.6799 3.72695 10.7082 3.8056C10.7365 3.88425 10.7505 3.96852 10.75 4.05841C10.75 4.1483 10.7358 4.23257 10.7075 4.31122C10.6792 4.38987 10.6316 4.4629 10.5646 4.53032L7.46349 7.63144C7.3399 7.75503 7.18551 7.81683 7.00035 7.81683C6.81518 7.81683 6.65495 7.74942 6.51967 7.61458Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="pb-3">
              <p className="mb-0 ff_Segoe fw-semibold fs_xxl">
                Grow your business with Event-Driven Predictive Analytics
              </p>
              <p className="opac_clr_blck ff_Segoe fw-normal fs_md">
                It is a long established fact that a reader will be distracted
                by the using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it the look at you.
              </p>
            </div>
            <Row className="mt-5">
              <Col md={6} className="p-1">
                <div className="bg_green border_r_5 cur_poi py_33_41  hover_img_transright d-flex flex-column justify-content-between">
                  <div>
                    {" "}
                    <p className="clr_white_opac ff_Segoe fw-semibold  fs_md mb-0">
                      boost your
                    </p>
                    <p className=" ff_Segoe fw-semibold fs_lg clr_white col-6">
                      Financial Services
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between pt-3">
                    <a
                      href="#"
                      className=" ff_Segoe fw-semibold fs_md clr_white"
                    >
                      Learn more
                    </a>
                    <img src={arrow} alt="arrow" className="transition" />
                  </div>
                </div>
              </Col>
              <Col md={6} className="p-1">
                <div className="bg_darkblue cur_poi border_r_5 py_33_41  hover_img_transright h-100 d-flex flex-column justify-content-between">
                  <div>
                    {" "}
                    <p className="clr_white_opac ff_Segoe fw-semibold  fs_md mb-0">
                      boost your
                    </p>
                    <p className=" ff_Segoe fw-semibold fs_lg clr_white ">
                      Real Estate
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between pt-2">
                    <a
                      href="#"
                      className=" ff_Segoe fw-semibold fs_md clr_white"
                    >
                      Learn more
                    </a>
                    <img src={arrow} alt="arrow" className="transition" />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default HeroSec;
