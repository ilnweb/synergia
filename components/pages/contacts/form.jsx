'use client';

import React, { useState } from 'react';

const FormArea = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // 1. CLIENT-SIDE VALIDATION – BEFORE API CALL
    const hasEmptyField = Object.values(formData).some(value => value.trim() === '');

    if (hasEmptyField) {
      setSubmitStatus({
        success: false,
        message: 'Proszę uzupełnić wszystkie wymagane pola.',
      });
      return; // ⛔ prevents webhook call
    }

    // 2. PROCEED ONLY IF FORM DATA IS VALID
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' });

    try {
      const response = await fetch('https://n8n.srv1036332.hstgr.cloud/webhook/contact-from', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.',
        });

        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        const error = await response.text();
        throw new Error(error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-md-6 mb-30'>
            <div className='contact__form-area-item'>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Imię i nazwisko'
                required
              />
            </div>
          </div>
          <div className='col-md-6 md-mb-30'>
            <div className='contact__form-area-item'>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Adres email'
                required
              />
            </div>
          </div>
          <div className='col-md-12 mb-30'>
            <div className='contact__form-area-item'>
              <input
                type='text'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                placeholder='Temat'
                required
              />
            </div>
          </div>
          <div className='col-md-12 mb-30'>
            <div className='contact__form-area-item'>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Wiadomość'
                required
              ></textarea>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='contact__two-right-form-item'>
              <button className='btn-one' type='submit' disabled={isSubmitting}>
                {isSubmitting ? 'Wysyłanie...' : 'Wyślij teraz'}
              </button>
            </div>
            {submitStatus.message && (
              <div className={`mt-3 ${submitStatus.success ? 'text-success' : 'text-danger'}`}>
                {submitStatus.message}
              </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default FormArea;
