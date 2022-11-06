import './App.css';
import Auth from './Auth/Auth';
import UserShell from './UserShell/UserShell';
import SignIn from './routes/SignIn/SignIn';
import SignUp from './routes/SignUp/SignUp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import Dashboard from './routes/Dashboard/Dashboard';

const App = () => {
    const [session, setSession] = useState<any>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }: any) => {
            setSession(session);
        });

        supabase.auth.onAuthStateChange((_event, session: any) => {
            setSession(session);
        });
    }, []);

    const router = createBrowserRouter([
        {
            path: '/',
            element: !session ? (
                // <Auth />
                <Dashboard />
            ) : (
                <UserShell key={session.user.id} session={session} />
            ),
        },
        {
            path: '/signin',
            element: <SignIn />,
        },
        {
            path: '/signup',
            element: <SignUp />,
        },
    ]);

    return (
        <div className="app">
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
