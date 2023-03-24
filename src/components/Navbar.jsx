import { NavLink } from 'react-router-dom';
import { useUserAuth } from '../utils/userAuthContext';

import '../App.css';

const Navbar = () => {
    const { user } = useUserAuth();

    return (
        <nav className='navBar'>
            <div className='navLinks'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
                {!user && (
                    <NavLink to='login'>Login</NavLink>
                )}
            </div>
            {user && (
                <div className="name">{user.displayName}</div>
            )}
        </nav>
    )
}

export default Navbar