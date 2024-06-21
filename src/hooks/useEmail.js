import { useRef, useState, useEffect } from "react";

export function useEmail() {
    const [email, setEmail] = useState('');
    const [errorMail, setError] = useState(null);
    const isFirstInput = useRef(true);

    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = false;
            return;
        }

        if (email.length < 3) {
            setError('El email debe tener al menos 3 caracteres');
            return;
        }

        if (!email.includes('@')) {
            setError('El email debe tener un @');
            return;
        }

        if (!email.includes('.com') && !email.includes('.org') && !email.includes('.net')) {
            setError('El email debe tener .com, u otro...');
            return;
        }

        setError(null);
    }, [email]);

    return { email, setEmail, errorMail };
}
