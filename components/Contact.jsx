import React, { useState } from 'react';
import {
  UilMessage,
  UilLinkedin,
  UilTwitter,
  UilInstagram,
} from '@iconscout/react-unicons';
import axios from 'axios';

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xpzkjvle',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <section className='contact section' id='contact'>
      <h2 className='section__title'>Contact me</h2>
      <span className='section__subtitle'>Get in touch</span>

      <div className='contact__container container grid'>
        <div className='contact__social'>
          <div className='contact__information'>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/nestoredduardo/'
              className='home'>
              <UilLinkedin className='contact__icon' width='40' height='40' />
            </a>
          </div>
          <div className='contact__information'>
            <a
              target='_blank'
              href='https://twitter.com/nestoredduardo'
              className='home'>
              <UilTwitter className='contact__icon' width='40' height='40' />
            </a>
          </div>
          <div className='contact__information'>
            <a
              target='_blank'
              href='https://www.instagram.com/nestoredduardo/'
              className='home'>
              <UilInstagram className='contact__icon' width='40' height='40' />
            </a>
          </div>
        </div>
        <form onSubmit={handleOnSubmit} className='contact__form grid'>
          <div className='contact__inputs grid'>
            <div className='contact__content'>
              <label htmlFor='name' className='contact__label'>
                Name
              </label>
              <textarea
                className='contact__input'
                id='name'
                name='name'
                onChange={handleOnChange}
                required
                value={inputs.name}
              />
            </div>
            <div className='contact__content'>
              <label htmlFor='email' className='contact__label'>
                Email
              </label>
              <input
                className='contact__input'
                id='email'
                type='email'
                name='_replyto'
                onChange={handleOnChange}
                required
                value={inputs.email}
              />
            </div>
            <div className='contact__content'>
              <label htmlFor='message' className='contact__label'>
                Message
              </label>
              <textarea
                className='contact__input'
                id='message'
                name='message'
                onChange={handleOnChange}
                required
                value={inputs.message}
              />
            </div>
            <div>
              <button
                type='submit'
                disabled={status.submitting}
                className='button button--flex'>
                {!status.submitting
                  ? !status.submitted
                    ? 'Send message'
                    : 'Subtmited'
                  : 'Sending...'}
                <UilMessage className='button__icon' />
              </button>
            </div>
          </div>
        </form>
        {status.info.error && (
          <div className='error'>Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
      </div>
    </section>
  );
};
