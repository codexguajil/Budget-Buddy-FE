import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Define the different steps (modals) for the signup process
const signupSteps = [
  {
    id: 1,
    title: 'What is your name?',
    inputLabel: 'Name',
    inputName: 'name',
    placeholder: 'John Doe',
  },
  {
    id: 2,
    title: 'Enter Your Email and Password',
    inputLabel: 'Email',
    inputName: 'email',
    placeholder: 'johndoe@example.com',
  },
  {
    id: 3,
    title: 'Create a Password',
    inputLabel: 'Password',
    inputName: 'password',
    placeholder: '********',
    type: 'password',
  },
  {
    id: 4,
    title: 'How old are you?',
    inputLabel: 'Age',
    inputName: 'age',
    placeholder: '23',
  },
  {
    id: 5,
    title: 'How much do you make, yearly?',
    inputLabel: 'salary',
    inputName: 'salary',
    placeholder: '50,000',
  },
  {
    id: 6,
    title: 'How much is your rent and utitilies?',
    inputLabel: 'rent',
    inputName: 'rent',
    placeholder: '1,000',
  },
  {
    id: 7,
    title: 'What are you financial goals in the next 5 years?',
    inputLabel: 'goals',
    inputName: 'goals',
    placeholder: 'I want to be rich',
  },
  {
    id: 8,
    title: 'Confirm Your Details',
    message: 'Please review your details before submitting.',
  },
];

export default function Signup({ onSignupSuccess }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();


  const currentStep = signupSteps[currentIndex];

  const handleNext = () => {
    if (currentIndex < signupSteps.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // handle submit to the node express server
    console.log(formData);
    if (currentIndex === signupSteps.length - 1) {
      fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            // const history = useHistory();
            setIsSubmitting(true);
            setTimeout(() => {
                  alert('Signup successful!');
                  setIsSubmitting(false);
                }, 1000);
            onSignupSuccess(formData);
            navigate('/home');
          } else {
            alert('Signup failed!');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      handleNext();
    }

    // if (currentIndex === signupSteps.length - 1) {
    //   // Simulate form submission
    //   setIsSubmitting(true);
    //   setTimeout(() => {
    //     alert('Signup successful!');
    //     setIsSubmitting(false);
    //   }, 1000);
    // } else {
    //   handleNext();
    // }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-lg p-6">
          {/* Step title */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">{currentStep.title}</h2>

          {currentIndex < signupSteps.length - 1 ? (
            // Render input form for the first 4 steps
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">{currentStep.inputLabel}</label>
                <input
                  type={currentStep.type || 'text'}
                  name={currentStep.inputName}
                  value={formData[currentStep.inputName] || ''}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder={currentStep.placeholder}
                  required
                />
              </div>

              <div className="flex justify-between">
                {currentIndex > 0 && (
                  <button
                    type="button"
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                )}

                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                >
                  {currentIndex === signupSteps.length - 2 ? 'Submit' : 'Next'}
                </button>
              </div>
            </form>
          ) : (
            // Render confirmation for the last step
            <div>
              <p className="text-gray-700 mb-4">{currentStep.message}</p>
              <ul className="list-disc pl-4 text-left mb-4">
                {signupSteps.slice(0, -1).map((step) => (
                  <li key={step.id} className="text-gray-700">
                    <strong>{step.inputLabel}:</strong> {formData[step.inputName]}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}