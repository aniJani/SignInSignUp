import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { app } from '../firebase';

export default function OAuth() {
    const dispatch = useDispatch();
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            const res = await fetch('api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                }),
            });
            const data = await res.json();
            dispatch(signInSuccess(data));
        } catch (error) {
            console.log('couldnt login wid google')
        }
    }
    return (
        <button type='button' onClick={handleGoogleClick} className='bg-red-800 text-white rounded-lg p-3 
        uppercase hover:opacity-80'>Continue with google</button>
    )
}
