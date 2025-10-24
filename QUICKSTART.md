# Quick Start Guide

Get your Client Discovery Form up and running in 5 minutes!

## Step 1: Install Dependencies (1 minute)

```bash
npm install
```

## Step 2: Set Up Supabase (2 minutes)

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Wait for the project to be ready (~2 minutes)
4. Go to the SQL Editor in your Supabase dashboard
5. Copy and paste the contents of `supabase-schema.sql` and click "Run"

## Step 3: Configure Environment Variables (1 minute)

1. In your Supabase dashboard, go to Settings → API
2. Copy your Project URL and anon/public key
3. Create a `.env` file in the project root:

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## Step 4: Start the Development Server (30 seconds)

```bash
npm run dev
```

Open your browser to `http://localhost:5173` and you're done! 🎉

## Testing the Form

1. Fill out the form across all 6 steps
2. Click "Submit" on the final step
3. Check your Supabase dashboard → Table Editor → client_discovery_briefs to see the submitted data

## Deploying to Production

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add your environment variables in the Vercel dashboard
5. Deploy!

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Add your environment variables
7. Deploy!

## Customization Tips

- **Colors**: Edit `src/App.css` and `src/index.css`
- **Form Fields**: Edit the section components in `src/components/sections/`
- **Progress Steps**: Modify `stepLabels` in `src/components/ProgressIndicator.tsx`
- **Validation**: Add validation logic in `src/App.tsx` before form submission

## Need Help?

Check the full `README.md` for detailed documentation.
