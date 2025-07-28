# Deployment Checklist ✅

## Pre-Deployment Checklist

- [ ] All components are working locally
- [ ] JSON server runs without errors
- [ ] React app connects to local API successfully
- [ ] All 5 React components are implemented:
  - [ ] Header
  - [ ] TaskList  
  - [ ] TaskItem
  - [ ] TaskForm
  - [ ] Footer
- [ ] Custom CSS styling is applied
- [ ] GET and POST requests work correctly

## Vercel Deployment Steps

### 1. Prepare for Deployment
- [ ] Push all code to GitHub repository
- [ ] Ensure `vercel.json` is in project root
- [ ] API routes are in `/api` directory
- [ ] Build command works locally: `npm run build`

### 2. Deploy to Vercel
Choose one method:

#### Method A: Vercel Dashboard
- [ ] Go to vercel.com and login
- [ ] Click "New Project"
- [ ] Import your GitHub repo
- [ ] Set build settings (should auto-detect Vite)
- [ ] Deploy

#### Method B: Vercel CLI
- [ ] Install: `npm i -g vercel`
- [ ] Login: `vercel login`
- [ ] Run: `vercel` in project directory
- [ ] Follow prompts

### 3. Post-Deployment Configuration
- [ ] Copy your Vercel URL (e.g., `https://your-app.vercel.app`)
- [ ] Update `src/config/api.js` with your production URL:
  ```javascript
  production: {
    apiUrl: 'https://YOUR-VERCEL-URL.vercel.app/api'
  }
  ```
- [ ] Commit and push changes
- [ ] Wait for automatic redeployment

### 4. Testing Deployed App
- [ ] Visit your Vercel URL
- [ ] Test adding a new task
- [ ] Test marking task as complete
- [ ] Test deleting a task
- [ ] Check browser console for errors
- [ ] Test on mobile device

## API Endpoints to Test

After deployment, these should work:
- [ ] `GET https://your-app.vercel.app/api/tasks`
- [ ] `POST https://your-app.vercel.app/api/tasks`
- [ ] `PATCH https://your-app.vercel.app/api/tasks/1`
- [ ] `DELETE https://your-app.vercel.app/api/tasks/1`

## Common Issues & Solutions

### Build Fails
- Check all imports are correct
- Ensure all dependencies are in package.json
- Run `npm run build` locally first

### API Not Working
- Verify API URL in config/api.js
- Check browser network tab for API calls
- Ensure vercel.json is configured correctly

### CORS Errors
- API includes CORS headers
- Check if making requests to correct URL
- Clear browser cache

## Environment Variables (Optional)
For production secrets:
- [ ] Go to Vercel Project Settings
- [ ] Add Environment Variables
- [ ] Update code to use process.env variables

## Performance Checklist
- [ ] Images are optimized
- [ ] Bundle size is reasonable
- [ ] API responses are fast
- [ ] App loads quickly

## Final Verification
- [ ] App works on desktop
- [ ] App works on mobile
- [ ] All features functional
- [ ] No console errors
- [ ] Professional appearance
- [ ] README updated with live URL

Your Task Manager Pro is ready for the world! 🚀
