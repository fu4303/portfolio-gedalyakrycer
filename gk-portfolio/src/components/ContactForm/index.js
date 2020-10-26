import React, { useRef, useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Reaptcha from "reaptcha";
import axios from "axios";
import qs from "qs";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);





// This is static top section of the page and gives it semantic value.
function ContactForm() {

    // START Code Copied From https://github.com/kimfucious/netlify-forms-formik/blob/master/src/FormikForm.js#L7
    //
    const [errMsg, setErrMsg] = useState("");
    const [executing, setExecuting] = useState(false);
    const [formValues, setFormValues] = useState({});
    const [formReset, setFormReset] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [msgSent, setMsgSent] = useState(false);
    const [rcError, setRcError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);

    const rcRef = useRef(null);


    useEffect(() => {
        const handleSubmit = async (formValues, token) => {
            const data = {
                ...formValues,
                "g-recaptcha-response": token
            };
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                data: qs.stringify(data),
                url: "/"
            };
            try {
                await axios(options);
                setMsgSent(true);
                formReset();
            } catch (e) {
                setErrMsg(e.message);
            }
        };
        if (token) {
            handleSubmit(formValues, token);
        }
    }, [formReset, formValues, token]);

    const onError = () => {
        console.log("error...");
        setRcError(true);
    };

    const onExpire = () => {
        console.log("expired...");
        console.log("resetting...");
        resetReCaptcha();
    };

    const onLoad = resetForm => {
        console.log("loaded...");
        setLoaded(true);
        setFormReset(resetForm);
    };

    const onVerify = token => {
        console.log("verified...");
        setToken(token);
        setVerified(true);
        setExecuting(false);
    };

    const renderButton = (executing, isSubmitting) => {
        if (errMsg) {
            return (
                <button
                    className="contact__submit-btn mt-3"
                    type="submit"
                    disabled
                >
                    Error
                </button>
            );
        } else if (msgSent) {
            return (
                <button
                    className="contact__submit-btn mt-3"
                    type="submit"
                    disabled
                >
                    Submitted
                </button>
            );
        } else {
            return (
                <button
                    className="contact__submit-btn mt-3"
                    type="submit"
                    disabled={isSubmitting || executing}
                >
                    Submit
                </button>
            );
        }
    };

    const resetEverything = resetForm => {
        if (rcError) {
            setRcError(false);
        }
        if (resetForm) {
            setMsgSent(false);
            setErrMsg(false);
            resetForm();
        }
        resetReCaptcha();
    };

    const resetReCaptcha = async () => {
        console.log("resetting...");
        await rcRef.current.reset();
        setVerified(false);
    };

    // END Code Copied From https://github.com/kimfucious/netlify-forms-formik/blob/master/src/FormikForm.js#L7
    //


    // GSAP —————————————————————————————————————————————————————————————————

    // Ref for Contact title 
    const contactTitle1Ref = useRef(null);

    // Ref for Or title
    const orTitleRef = useRef(null);

    // Ref for email text
    const emailTxtRef = useRef(null);


    // Save Initial Styles
    ScrollTrigger.saveStyles(".contact__title, .contact__or-title, .contact__email-txt");

    useEffect(() => {

        const tl = gsap.timeline();

        // Media Query Animation
        ScrollTrigger.matchMedia({

            "(min-width: 768px)": function () {


                tl.from(contactTitle1Ref.current, {
                    scrollTrigger: {
                        trigger: contactTitle1Ref.current,
                        toggleActions: 'play none none none',
                        start: 'top bottom',
                        scrub: true
                    },
                    duration: 2,
                    y: 120,
                    ease: 'power4.out'

                });

                tl.from(orTitleRef.current, {
                    duration: 1,
                    y: 50,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: orTitleRef.current,
                        toggleActions: 'play none none none',
                        start: 'top bottom',
                        scrub: true
                    },
                })

                tl.from(emailTxtRef.current, {
                    duration: 1,
                    y: -30,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: emailTxtRef.current,
                        toggleActions: 'play none none none',
                        start: 'top bottom',
                        scrub: true

                    },

                });

                // Kill animations 
                return function () {
                    tl.kill();
                };
            }


        });

    }, [])



    return (
        <section>
            <Container className="g__about-sections" id="contact">
                <h2 className="contact__title" ref={contactTitle1Ref}>Contact</h2>
                <Row className="justify-content-md-center g_negative-margin">
                    <Col className="white-color" lg={8}>
                        <div className="contact__form-bg">

                            <Formik
                                initialValues={{
                                    "bot-field": "",
                                    "form-name": "contact",
                                    email: "",
                                    name: "",
                                    message: ""
                                }}
                                validate={values => {
                                    let errors = {};
                                    if (!values.email) {
                                        errors.email = "Required";
                                    } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                    ) {
                                        errors.email = "Invalid email address";
                                    }
                                    if (!values.name) {
                                        errors.name = "Required";
                                    }
                                    if (!values.message) {
                                        errors.message = "Required";
                                    }
                                    return errors;
                                }}
                                onSubmit={values => {
                                    setIsSubmitting(true);
                                    setFormValues({ ...values });
                                    setExecuting(true);
                                    rcRef.current.execute();
                                }}
                            >
                                {({ resetForm }) => (
                                    <Form
                                        data-netlify="true"
                                        data-netlify-honeypot="bot-field"
                                        data-netlify-recaptcha="true"
                                        className="d-flex flex-column"
                                        name="contact"
                                        noValidate
                                    >
                                        <Field type="hidden" name="form-name" />
                                        <Field type="hidden" name="bot-field" />
                                        <div className="form-group">
                                            <label
                                                className="col-form-label col-form-label-lg"
                                                htmlFor="name"
                                            >
                                                Name
                                        </label>
                                            <Field
                                                className="form-control form-control-lg"
                                                name="name"
                                                type="text"
                                            />
                                            <ErrorMessage
                                                className="invalid-feedback"
                                                name="name"
                                                component="div"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label
                                                className="col-form-label col-form-label-lg"
                                                htmlFor="email"
                                            >
                                                Email
                                        </label>
                                            <Field
                                                className="form-control form-control-lg"
                                                name="email"
                                                type="email"
                                            />
                                            <ErrorMessage
                                                className="invalid-feedback"
                                                name="email"
                                                component="div"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label
                                                className="col-form-label col-form-label-lg"
                                                htmlFor="message"
                                            >
                                                Message
                                        </label>
                                            <Field
                                                className="form-control form-control-lg"
                                                name="message"
                                                component="textarea"
                                            />
                                            <ErrorMessage
                                                className="invalid-feedback"
                                                name="message"
                                                component="div"
                                            />
                                        </div>
                                        <Reaptcha
                                            ref={rcRef}
                                            sitekey="6LdZTMMZAAAAAGJy0j2AyImgkQ33Mv4juhtQElid"
                                            data-netlify-recaptcha="true"
                                            onError={onError}
                                            onExpire={onExpire}
                                            onVerify={onVerify}
                                            onLoad={() => onLoad(() => resetForm)}
                                            size="invisible"
                                        />
                                        <div className="m-2 col-form-label col-form-label-lg hidden">
                                            <span
                                                className={`badge badge-${loaded ? "success" : "primary"
                                                    } mx-2 p-2`}
                                            >
                                                loaded
              </span>
                                            <span
                                                className={`badge badge-${verified ? "success" : "primary"
                                                    } mx-2 p-2`}
                                            >
                                                verified
              </span>
                                            {executing && (
                                                <span className={`badge badge-primary mx-2 p-2`}>
                                                    executing
                                                </span>
                                            )}
                                            {rcError && (
                                                <span className={`badge badge-primary mx-2 p-2`}>error</span>
                                            )}
                                            {rcError && (
                                                <button
                                                    className="btn btn-link text-dark"
                                                    onClick={() => resetEverything(resetForm)}
                                                >
                                                    reset
                                                </button>
                                            )}
                                        </div>
                                        {renderButton(isSubmitting, executing, verified)}
                                        {errMsg ? <div className="text-primary m-1">{errMsg}</div> : null}
                                        {(msgSent || errMsg) && (
                                            <button className="contact__reset-btn"

                                                onClick={() => resetEverything(resetForm)}
                                            >
                                                Send A New Email
                                            </button>
                                        )}
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </Col>
                </Row>

                <div className="contact__email-container">
                    <h2 className="contact__or-title" ref={orTitleRef}>or</h2>
                    <div className="contact__email-txt" ref={emailTxtRef}>
                        <p className="g__body-lg">You can email me at</p>

                        <p>
                            <a href="mailto:gedalya@krycer.com"
                                className="g__body-lg">
                                gedalya@krycer.com
                        </a>
                        </p>
                    </div>

                </div>
            </Container>

        </section >
    )
}


export default ContactForm;