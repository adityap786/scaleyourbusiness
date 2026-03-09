require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function signUpUser() {
    console.log("Attempting to create user: athrvat@gmail.com");

    const { data, error } = await supabase.auth.signUp({
        email: 'athrvat@gmail.com',
        password: 'AtharvAditya$$5577',
    });

    if (error) {
        console.error('Error signing up:', error.message);
    } else {
        console.log('User created successfully:', data?.user?.email);
        console.log('Session data (if auto-confirmed):', data.session ? 'Created' : 'None (may require email confirmation based on Supabase settings)');
    }
}

signUpUser();
