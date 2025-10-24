# Deployment Checklist

Use this checklist to ensure a smooth deployment of your Client Discovery Form.

## Pre-Deployment

### ✅ Development Environment
- [ ] All dependencies installed (`npm install`)
- [ ] Application runs locally (`npm run dev`)
- [ ] All form sections display correctly
- [ ] Form navigation works (Back/Continue buttons)
- [ ] Form submission succeeds locally

### ✅ Supabase Setup
- [ ] Supabase project created
- [ ] Database table created using `supabase-schema.sql`
- [ ] Row Level Security (RLS) enabled
- [ ] Insert policy created for anonymous users
- [ ] Read policy created for authenticated users
- [ ] Test submission appears in Supabase table editor

### ✅ Environment Variables
- [ ] `.env` file created (not committed to Git)
- [ ] `VITE_SUPABASE_URL` set correctly
- [ ] `VITE_SUPABASE_ANON_KEY` set correctly
- [ ] Environment variables work locally

### ✅ Code Quality
- [ ] No console errors in browser
- [ ] No TypeScript errors
- [ ] Build succeeds (`npm run build`)
- [ ] All files properly formatted
- [ ] `.gitignore` includes `.env` and `node_modules`

## Deployment Steps

### Option A: Vercel Deployment

1. **Prepare Repository**
   - [ ] Code pushed to GitHub/GitLab/Bitbucket
   - [ ] `.env` file NOT in repository
   - [ ] README.md updated with your information

2. **Vercel Setup**
   - [ ] Account created at vercel.com
   - [ ] New project created
   - [ ] Repository connected
   - [ ] Framework preset: Vite
   - [ ] Root directory: ./

3. **Environment Variables**
   - [ ] Navigate to Settings → Environment Variables
   - [ ] Add `VITE_SUPABASE_URL`
   - [ ] Add `VITE_SUPABASE_ANON_KEY`
   - [ ] Variables added to all environments (Production, Preview, Development)

4. **Deploy**
   - [ ] Click "Deploy"
   - [ ] Wait for build to complete
   - [ ] Visit deployment URL
   - [ ] Test form submission

### Option B: Netlify Deployment

1. **Prepare Repository**
   - [ ] Code pushed to GitHub/GitLab/Bitbucket
   - [ ] `.env` file NOT in repository

2. **Netlify Setup**
   - [ ] Account created at netlify.com
   - [ ] New site from Git
   - [ ] Repository selected
   - [ ] Build command: `npm run build`
   - [ ] Publish directory: `dist`

3. **Environment Variables**
   - [ ] Navigate to Site settings → Environment variables
   - [ ] Add `VITE_SUPABASE_URL`
   - [ ] Add `VITE_SUPABASE_ANON_KEY`

4. **Deploy**
   - [ ] Click "Deploy site"
   - [ ] Wait for build to complete
   - [ ] Visit site URL
   - [ ] Test form submission

## Post-Deployment

### ✅ Testing
- [ ] Open deployed URL in browser
- [ ] Test on desktop browser
- [ ] Test on mobile browser
- [ ] Complete entire form flow
- [ ] Verify submission appears in Supabase
- [ ] Test Back button functionality
- [ ] Test form validation (if implemented)
- [ ] Check success message displays

### ✅ Performance
- [ ] Page loads quickly (< 3 seconds)
- [ ] No console errors
- [ ] Images/assets load properly
- [ ] Form is responsive on all screen sizes

### ✅ Security
- [ ] Environment variables not exposed in client
- [ ] Supabase credentials secure
- [ ] HTTPS enabled (automatic with Vercel/Netlify)
- [ ] RLS policies working correctly

### ✅ Monitoring
- [ ] Set up error tracking (optional: Sentry, LogRocket)
- [ ] Configure Supabase email notifications for new submissions
- [ ] Set up uptime monitoring (optional: UptimeRobot)
- [ ] Add analytics (optional: Google Analytics, Plausible)

## Production Enhancements (Optional)

### Security Enhancements
- [ ] Add rate limiting
- [ ] Implement CAPTCHA (reCAPTCHA, hCaptcha)
- [ ] Add CORS restrictions in Supabase
- [ ] Set up database backups

### User Experience
- [ ] Add loading states
- [ ] Implement form validation
- [ ] Add error messages
- [ ] Enable draft saving
- [ ] Add progress persistence

### Business Features
- [ ] Email notifications on submission
- [ ] Admin dashboard for viewing submissions
- [ ] Export functionality (CSV/PDF)
- [ ] Multi-language support

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Verify all dependencies are in package.json
- Check for TypeScript errors
- Review build logs for specific errors

### Environment Variables Not Working
- Ensure variables start with `VITE_`
- Redeploy after adding variables
- Check variable names match exactly
- Verify no trailing spaces in values

### Form Submission Fails
- Check Supabase URL is correct
- Verify anon key is correct
- Check RLS policies in Supabase
- Review browser console for errors
- Check Supabase logs

### Styling Issues
- Clear browser cache
- Check CSS files are included in build
- Verify Vite config is correct
- Test in incognito/private mode

## Custom Domain Setup (Optional)

### Vercel
1. [ ] Go to Project Settings → Domains
2. [ ] Add your custom domain
3. [ ] Update DNS records as instructed
4. [ ] Wait for DNS propagation
5. [ ] SSL certificate auto-generated

### Netlify
1. [ ] Go to Site settings → Domain management
2. [ ] Add custom domain
3. [ ] Update DNS records as instructed
4. [ ] Wait for DNS propagation
5. [ ] SSL certificate auto-generated

## Maintenance

### Regular Tasks
- [ ] Monitor Supabase usage (stay within free tier limits)
- [ ] Review submissions regularly
- [ ] Update dependencies monthly (`npm update`)
- [ ] Check for security vulnerabilities (`npm audit`)
- [ ] Backup Supabase data periodically

### Updates
- [ ] Test updates in staging/preview environment first
- [ ] Review changelog before updating dependencies
- [ ] Keep React and TypeScript up to date
- [ ] Monitor Supabase for breaking changes

## Success Criteria

Your deployment is successful when:
- ✅ Form loads without errors
- ✅ All 6 steps are accessible
- ✅ Form submissions save to Supabase
- ✅ Success message displays after submission
- ✅ Form works on mobile and desktop
- ✅ No console errors
- ✅ Page loads quickly

## Next Steps

After successful deployment:
1. Share the form URL with your team
2. Test with real users
3. Gather feedback
4. Iterate on design and functionality
5. Monitor submissions and analytics

---

**Tip**: Keep this checklist handy for future deployments and updates!
