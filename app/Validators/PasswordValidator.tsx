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
      style={{position:"relative", cursor:"pointer"}}
      onMouseDown={() => setShow(!show)}
    >
      <img src='/Image/simbolo-de-informacao.png' width={15} height={15}/>
      {show && (
        <div  style={{position:"absolute", top:"-0px", left:"30px", backgroundColor:"var(--box-red-pink)", width:"fit-content", padding:"10px", borderRadius:"10px",}}        >
          <h4 style={{fontSize:"var(--text-s)", color:"var(--text-white)", marginBottom:"5px"}}>Sua senha precisa de:</h4>
          <ul className="space-y-1 text-sm" style={{width:"fit-content"}}>
            {checks.map((check, idx) => (
              <li style={{all:"unset", display:"flex"}} key={idx} className={`flex items-center gap-2 ${check.valid ? 'text-green-600' : 'text-red-500'}`}>
                <span >{check.valid ? '✅' : '❌'}</span>
                <span style={{ color:"var(--text-white)", fontSize:"var(--text-s)", width:"fit-content", textWrap:"nowrap"}}>{check.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PasswordValidator;
