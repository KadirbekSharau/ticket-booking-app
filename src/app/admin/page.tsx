'use client';

import { useEffect } from 'react';
import { useUnit } from 'effector-react';
import { fetchUserFx, $user } from '../../features/auth/store';

export default function AdminPage() {
  const user = useUnit($user);

  // Ensure user data is fetched when the component mounts
  useEffect(() => {
    fetchUserFx(); // Fetch user info from the API
  }, []);

  if (!user || user.role !== 'admin') {
    return <div>Access Denied</div>;
  }

  return <div>Welcome, Admin!</div>;
}
