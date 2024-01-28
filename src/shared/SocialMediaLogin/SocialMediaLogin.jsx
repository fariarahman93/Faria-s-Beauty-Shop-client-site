import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/providers/AuthProvider";


const SocialMediaLogin = ({ setSuccess, setError }) => {
    const { signInWithProvider } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {

        signInWithProvider('google')
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setSuccess('User login successful.');
                setError('');
                navigate(from, { replace: true });

            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <button onClick={handleGoogleSignIn} className='btn btn-outline'> <FaGoogle className='mr-2'></FaGoogle> Google Login</button>
    );
};

export default SocialMediaLogin;