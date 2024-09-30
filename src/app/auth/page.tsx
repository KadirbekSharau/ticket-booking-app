// src/app/auth/page.tsx

"use client"; // This ensures the component is treated as a client-side component

import { AuthenticationForm } from '@/features/auth/auth_form';

export default function AuthPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'white' }}>
      {/* Rendering the existing AuthComponent */}
      <AuthenticationForm />
    </div>
  );
}
