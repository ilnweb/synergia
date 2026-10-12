'use client';

import React, { useState } from 'react';

const FormArea = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [honeypot, setHoneypot] = useState('');
  const [consent, setConsent] = useState(false);

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

    // Bots fill the hidden field; pretend success without calling the webhook
    if (honeypot) {
      setSubmitStatus({
        success: true,
        message: 'Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.',
      });
      return;
    }

    // 1. CLIENT-SIDE VALIDATION – BEFORE API CALL (phone is optional)
    const { phone, ...requiredFields } = formData;
    const hasEmptyField = Object.values(requiredFields).some(value => value.trim() === '');

    if (hasEmptyField) {
      setSubmitStatus({
        success: false,
        message: 'Proszę uzupełnić wszystkie wymagane pola.',
      });
      return; // ⛔ prevents webhook call
    }

    if (!consent) {
      setSubmitStatus({
        success: false,
        message: 'Zaznacz zgodę na przetwarzanie danych, aby wysłać wiadomość.',
      });
      return;
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
          phone: '',
          subject: '',
          message: '',
        });
        setConsent(false);
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
      <style jsx>{`
        input::placeholder,
        textarea::placeholder {
          color: #cccccc !important;
          opacity: 1;
        }
      `}</style>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <div className='contact__form-area-item'>
              <label htmlFor='name' className='form-label'>
                Imię i nazwisko <span style={{ color: '#f33633' }}>*</span>
              </label>
              <input
                type='text'
                id='name'
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
              <label htmlFor='email' className='form-label'>
                Adres email <span style={{ color: '#f33633' }}>*</span>
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Adres email'
                required
              />
            </div>
          </div>
          <div className='col-md-6 md-mb-30 mb-30'>
            <div className='contact__form-area-item'>
              <label htmlFor='phone' className='form-label'>
                Telefon
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder='Telefon'
              />
            </div>
          </div>
          <div className='col-md-12 mb-30'>
            <div className='contact__form-area-item'>
              <label htmlFor='subject' className='form-label'>
                Temat <span style={{ color: '#f33633' }}>*</span>
              </label>
              <input
                type='text'
                id='subject'
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
              <label htmlFor='message' className='form-label'>
                Wiadomość <span style={{ color: '#f33633' }}>*</span>
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Wiadomość'
                required
              ></textarea>
            </div>
          </div>
          <div
            aria-hidden='true'
            style={{
              position: 'absolute',
              left: '-9999px',
              width: '1px',
              height: '1px',
              overflow: 'hidden',
            }}
          >
            <label htmlFor='website'>Nie wypełniaj tego pola</label>
            <input
              type='text'
              id='website'
              name='website'
              tabIndex={-1}
              autoComplete='off'
              value={honeypot}
              onChange={e => setHoneypot(e.target.value)}
            />
          </div>
          <div className='col-md-12 mb-30'>
            <label
              htmlFor='consent'
              style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}
            >
              <input
                type='checkbox'
                id='consent'
                name='consent'
                checked={consent}
                onChange={e => setConsent(e.target.checked)}
                style={{ marginTop: '5px', flexShrink: 0 }}
                required
              />
              <span>
                Wyrażam zgodę na przetwarzanie moich danych osobowych w celu odpowiedzi na
                wiadomość, zgodnie z{' '}
                <a href='/polityka-prywatnosci' target='_blank' rel='noopener noreferrer'>
                  polityką prywatności
                </a>
                . <span style={{ color: '#f33633' }}>*</span>
              </span>
            </label>
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
