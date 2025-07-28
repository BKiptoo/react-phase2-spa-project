# Deploying to Vercel - Step by Step Guide

## Prerequisites
1. A Vercel account (sign up at vercel.com)
2. Vercel CLI installed globally: `npm i -g vercel`
3. Your project pushed to GitHub

## Option 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Connect GitHub Repository
1. Go to [vercel.com](https://vercel.com) and log in
2. Click "New Project"
3. Import your GitHub repository `react-phase2-spa-project`
4. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist` (default for Vite)

### Step 2: Deploy
1. Click "Deploy"
2. Wait for the deployment to complete
3. You'll get a URL like: `https://your-project-name.vercel.app`

### Step 3: Update API Configuration
1. Copy your Vercel app URL
2. Update `src/config/api.js`:
   ```javascript
   const config = {
     development: {
       apiUrl: 'http://localhost:3001'
     },
     production: {
       apiUrl: 'https://YOUR-VERCEL-URL.vercel.app/api'  // Replace with your URL
     }
   };
   ```
3. Commit and push the changes
4. Vercel will automatically redeploy

## Option 2: Deploy via CLI

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy from Project Directory
```bash
cd /home/ruel/MORINGA/react-phase2-spa-project
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- What's your project's name? **react-phase2-spa-project**
- In which directory is your code located? **.**

### Step 4: Set Build Settings
If prompted:
- Build Command: `npm run build`
- Output Directory: `dist`
- Development Command: `npm run dev`

## API Endpoints on Vercel

Your deployed API will be available at:
- `https://your-app.vercel.app/api/tasks` - GET all tasks, POST new task
- `https://your-app.vercel.app/api/tasks/:id` - GET, PATCH, DELETE specific task
- `https://your-app.vercel.app/api/users` - GET all users

## Testing Your Deployment

1. Visit your Vercel URL
2. Test creating a new task
3. Test marking tasks as complete
4. Test deleting tasks
5. Check browser developer tools for any API errors

## Important Notes

1. **Data Persistence**: The current setup uses in-memory storage, so data resets on each deployment. For production, consider using:
   - Vercel KV (Redis)
   - PlanetScale (MySQL)
   - Supabase (PostgreSQL)
   - MongoDB Atlas

2. **Environment Variables**: For production secrets, use Vercel's environment variables:
   - Go to Project Settings → Environment Variables
   - Add variables like `DATABASE_URL`, `API_KEY`, etc.

3. **Custom Domain**: You can add a custom domain in Project Settings → Domains

## Troubleshooting

### Common Issues:
1. **Build Fails**: Check that all dependencies are in `package.json`
2. **API Not Working**: Verify the API URL in `src/config/api.js`
3. **CORS Issues**: The API includes CORS headers, but check browser console
4. **404 Errors**: Ensure `vercel.json` is properly configured

### Debug Steps:
1. Check Vercel deployment logs
2. Test API endpoints directly in browser
3. Check browser console for errors
4. Verify environment variables

## Environment-Specific Configuration

The app automatically detects the environment:
- **Development**: Uses `http://localhost:3001`
- **Production**: Uses your Vercel URL

## Updating After Deployment

1. Make changes to your code
2. Commit and push to GitHub
3. Vercel automatically redeploys
4. Or use `vercel --prod` for manual deployment

## Performance Optimization

1. The API is serverless and scales automatically
2. Static assets are served from Vercel's CDN
3. Consider implementing caching for better performance

Your app is now live and accessible worldwide! 🚀
