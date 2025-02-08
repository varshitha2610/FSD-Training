import React, { useState } from 'react';
import { Headphones, BookOpen, CreditCard, CheckCircle2, X, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';

function App() {
    const [showPriceDetails, setShowPriceDetails] = useState(false);
    const [formData, setFormData] = useState({
      email: '',
      university: '',
      graduationYear: ''
    });
    const [formErrors, setFormErrors] = useState({
      email: '',
      university: '',
      graduationYear: ''
    });
    const [showForm, setShowForm] = useState(false);
  
    const validateForm = () => {
      const errors = {
        email: '',
        university: '',
        graduationYear: ''
      };
      let isValid = true;
  
      if (!formData.email) {
        errors.email = 'Email is required';
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Please enter a valid email';
        isValid = false;
      }
  
      if (!formData.university) {
        errors.university = 'University name is required';
        isValid = false;
      }
  
      if (!formData.graduationYear) {
        errors.graduationYear = 'Graduation year is required';
        isValid = false;
      } else if (parseInt(formData.graduationYear) < new Date().getFullYear()) {
        errors.graduationYear = 'Please enter a valid graduation year';
        isValid = false;
      }
  
      setFormErrors(errors);
      return isValid;
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (validateForm()) {
        alert('Form submitted successfully! This would typically connect to a backend service.');
        setShowForm(false);
        setFormData({ email: '', university: '', graduationYear: '' });
      }
    };
  
    const FAQs = [
      {
        question: 'How do I verify my student status?',
        answer: 'We partner with SheerID to verify your student status. You\'ll need to provide proof of enrollment at an accredited higher education institution.'
      },
      {
        question: 'How long does the student discount last?',
        answer: 'The student discount is valid for one year. You\'ll need to re-verify your student status annually to continue receiving the discount.'
      },
      {
        question: 'What happens after I graduate?',
        answer: 'After graduation, your account will automatically switch to a regular Premium plan at the standard rate.'
      }
    ];
  
    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
  
        {/* Hero Section */}
        <div 
          className="h-[600px] bg-cover bg-center relative mt-16"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
          <div className="container mx-auto px-6 relative z-10 pt-20">
            <div className="max-w-2xl">
              <h1 className="text-6xl font-bold mb-6 animate-fade-in">Premium Student</h1>
              <h2 className="text-3xl mb-8">₹59/month for students</h2>
              <div className="relative mb-8">
                <button 
                  onClick={() => setShowPriceDetails(!showPriceDetails)}
                  className="text-xl text-gray-300 flex items-center hover:text-green-500 transition-colors"
                >
                  View price details
                  <ChevronDown className={`ml-2 transform transition-transform ${showPriceDetails ? 'rotate-180' : ''}`} />
                </button>
                {showPriceDetails && (
                  <div className="absolute mt-2 bg-zinc-800 p-4 rounded-lg shadow-xl animate-fade-in">
                    <p className="mb-2">Regular Price: ₹119/month</p>
                    <p className="mb-2">Student Discount: 50% off</p>
                    <p className="text-green-500">Your Price: ₹59/month</p>
                  </div>
                )}
              </div>
              <button 
                onClick={() => setShowForm(true)}
                className="bg-green-500 text-black font-bold py-4 px-8 rounded-full hover:scale-105 transition-transform"
              >
                GET STARTED
              </button>
              <p className="mt-4 text-sm text-gray-400">
                Offer available only to students at accredited higher education institutions. 
                Terms and conditions apply.
              </p>
            </div>
          </div>
        </div>
  
        {/* Sign Up Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 animate-fade-in">
            <div className="bg-zinc-900 p-8 rounded-lg max-w-md w-full mx-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Sign Up for Premium Student</h3>
                <button onClick={() => setShowForm(false)}>
                  <X className="hover:text-green-500 transition-colors" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-zinc-800 rounded-md p-3 focus:ring-2 focus:ring-green-500 outline-none"
                    placeholder="your.email@university.edu"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">University</label>
                  <input
                    type="text"
                    value={formData.university}
                    onChange={(e) => setFormData({...formData, university: e.target.value})}
                    className="w-full bg-zinc-800 rounded-md p-3 focus:ring-2 focus:ring-green-500 outline-none"
                    placeholder="Your University Name"
                  />
                  {formErrors.university && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.university}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Expected Graduation Year</label>
                  <input
                    type="number"
                    value={formData.graduationYear}
                    onChange={(e) => setFormData({...formData, graduationYear: e.target.value})}
                    className="w-full bg-zinc-800 rounded-md p-3 focus:ring-2 focus:ring-green-500 outline-none"
                    placeholder="2025"
                    min={new Date().getFullYear()}
                  />
                  {formErrors.graduationYear && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.graduationYear}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-black font-bold py-3 rounded-full hover:scale-105 transition-transform"
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        )}
  
        {/* Features Section */}
        <div id="features" className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Why go Premium Student?</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center transform hover:scale-105 transition-transform">
              <Headphones size={48} className="mx-auto mb-6 text-green-500" />
              <h3 className="text-xl font-bold mb-4">Ad-free music listening</h3>
              <p className="text-gray-400">Enjoy uninterrupted music, no ads</p>
            </div>
            
            <div className="text-center transform hover:scale-105 transition-transform">
              <BookOpen size={48} className="mx-auto mb-6 text-green-500" />
              <h3 className="text-xl font-bold mb-4">Student verified</h3>
              <p className="text-gray-400">Exclusive discount for students</p>
            </div>
            
            <div className="text-center transform hover:scale-105 transition-transform">
              <CreditCard size={48} className="mx-auto mb-6 text-green-500" />
              <h3 className="text-xl font-bold mb-4">Special student price</h3>
              <p className="text-gray-400">Save up to 50% on Premium</p>
            </div>
          </div>
        </div>
  
        {/* Benefits Section */}
        <div id="benefits" className="bg-gradient-to-b from-zinc-900 to-black py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Premium Student includes</h2>
            
            <div className="max-w-2xl mx-auto space-y-6">
              {[
                'Ad-free music listening',
                'Group Session',
                'Download to listen offline',
                'Play songs in any order',
                'Higher sound quality',
                'Cancel anytime'
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  <CheckCircle2 className="text-green-500 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
  
            <div className="mt-12 text-center">
              <button 
                onClick={() => setShowForm(true)}
                className="bg-green-500 text-black font-bold py-4 px-8 rounded-full hover:scale-105 transition-transform"
              >
                GET STARTED
              </button>
            </div>
          </div>
        </div>
  
        {/* FAQ Section */}
        <div id="faq" className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {FAQs.map((faq, index) => (
              <div 
                key={index}
                className="border border-zinc-800 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full p-4 text-left flex justify-between items-center hover:bg-zinc-800 transition-colors"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown 
                    className={`transform transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedFAQ === index ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  <p className="p-4 text-gray-400 bg-zinc-900">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Footer */}
        <footer className="border-t border-zinc-800 py-8">
          <div className="container mx-auto px-6 text-center text-sm text-gray-400">
            <p>Terms and conditions apply. 1 month free not available for users who have already tried Premium.</p>
          </div>
        </footer>
      </div>
    );
  }
  
  export default App;