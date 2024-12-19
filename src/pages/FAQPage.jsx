import { useState } from 'react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Apa visi dan misi sekolah ini?',
      answer: 'Visi kami adalah mencetak generasi unggul dengan karakter yang kuat. Misi kami adalah memberikan pendidikan berkualitas dengan pendekatan holistik.'
    },
    {
      question: 'Bagaimana cara mendaftar?',
      answer: 'Anda dapat mendaftar melalui formulir pendaftaran di halaman Pendaftaran.'
    },
    {
      question: 'Apakah ada program ekstra kurikuler?',
      answer: 'Ya, kami menyediakan berbagai program ekstra kurikuler seperti seni, olahraga, dan sains.'
    }
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Pertanyaan yang Sering Diajukan</h2>
      <ul className="space-y-6">
        {faqs.map((faq, index) => (
          <li
            key={index}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full text-left"
            >
              <h3 className="font-semibold text-lg text-gray-800">
                {index + 1}. {faq.question}
              </h3>
              <span className="text-blue-600 text-xl">
                {openIndex === index ? '-' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQPage;
