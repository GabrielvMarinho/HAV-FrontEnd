import React, { useState } from 'react';

interface PasswordValidatorProps {
  password: string;
}

const PasswordValidator: React.FC<PasswordValidatorProps> = ({ password }) => {
  const [show, setShow] = useState(false);

  const checks = [
    {
      label: 'Mínimo 7 caracteres',
      valid: password.length >= 7,
    },
    {
      label: 'Pelo menos uma letra maiúscula',
      valid: /[A-Z]/.test(password),
    },
    {
      label: 'Pelo menos uma letra minúscula',
      valid: /[a-z]/.test(password),
    },
    {
      label: 'Pelo menos um caractere especial',
      valid: /[\W_]/.test(password),
    },
  ];

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span className="text-blue-600 cursor-pointer underline">Ver regras de senha</span>

      {show && (
        <div className="absolute z-10 w-64 mt-2 p-4 bg-white rounded-2xl shadow-lg border border-gray-200">
          <h4 className="text-sm font-semibold mb-2">Sua senha precisa de:</h4>
          <ul className="space-y-1 text-sm">
            {checks.map((check, idx) => (
              <li key={idx} className={`flex items-center gap-2 ${check.valid ? 'text-green-600' : 'text-red-500'}`}>
                <span>{check.valid ? '✅' : '❌'}</span>
                <span>{check.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PasswordValidator;
