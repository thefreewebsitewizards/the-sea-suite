import React, { useState } from 'react';

const NewsletterCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      // Create mailto link to send email
      const subject = encodeURIComponent('New Newsletter Subscription');
      const body = encodeURIComponent(`New newsletter subscription from: ${email}\n\nPlease add this email to the newsletter list.`);
      const mailtoLink = `mailto:ab.hanan01@gmail.com?subject=${subject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      setMessage('Thank you! Your subscription request has been sent.');
      setEmail('');
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="newsletter" aria-label="Join Our Community" className="bg-sunset/20 rounded-lg p-8 my-10 text-center">
      <h3 className="text-deep-navy text-2xl font-bold leading-tight tracking-[-0.015em] font-heading">Join Our Community</h3>
      <p className="text-gray-600 mt-2 font-body">Get exclusive tips, travel deals, and updates delivered to your inbox.</p>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col sm:flex-row gap-2 justify-center max-w-lg mx-auto">
        <input
          className="flex-grow rounded-lg border-gray-300 shadow-sm focus:border-sea-aqua focus:ring-sea-aqua font-body px-4 py-3 h-14 focus:outline-none transition-colors focus:shadow-md bg-white text-gray-900 placeholder-gray-400"
          placeholder="Your email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Your email address"
          required
        />
        <button 
          className="bg-sea-aqua text-deep-navy rounded-lg px-5 py-2.5 font-bold font-body disabled:opacity-50 transition-opacity hover:opacity-90" 
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {message && (
        <p className={`mt-3 text-sm font-body ${message.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </section>
  );
};

export default NewsletterCTA;