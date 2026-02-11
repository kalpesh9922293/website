# Deployment Guide - Free Tier

This guide walks you through deploying your website to production using **Vercel** (frontend) + **Render** (backend) + **MongoDB Atlas** (database).

## Prerequisites
- GitHub account
- Email for accounts

---

## Step 1: Set Up MongoDB Atlas (2 minutes)

1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Click **Sign Up** → Choose "Sign up with Google/GitHub"
3. Complete setup wizard:
   - Select **Free Tier**
   - Choose region closest to you
   - Click **Create Cluster**
4. Once cluster is created, go to **Database**
5. Click **Connect** → **Drivers** → Copy the connection string
6. Replace `<username>`, `<password>`, `<database>` with your values
7. Save this URL for later

**Connection string format:**
```
mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority
```

---

## Step 2: Prepare Backend for Deployment (5 minutes)

1. Create `.env` file in `/backend` folder with your MongoDB URL:
   ```
   MONGO_URL="your_mongodb_connection_string_here"
   DB_NAME="website_db"
   CORS_ORIGINS="https://yourfrontend.vercel.app,http://localhost:3000"
   ```

2. Make sure your `/backend` folder has:
   - `requirements.txt` ✓
   - `server.py` ✓
   - `Procfile` ✓
   - `.env` ✓

---

## Step 3: Push Code to GitHub (5 minutes)

1. Open PowerShell in your project folder
2. Run:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit - ready for deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/website.git
   git push -u origin main
   ```

3. Go to [github.com](https://github.com) → **New Repository** → name it `website` → push code

---

## Step 4: Deploy Backend to Render (5 minutes)

1. Go to [render.com](https://render.com)
2. Click **Sign Up** → Choose GitHub
3. After signup, click **New +** → **Web Service**
4. Select your GitHub repo
5. Fill in settings:
   - **Name:** `website-backend`
   - **Environment:** Python
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `uvicorn server:app --host 0.0.0.0 --port 8000`
   - **Plan:** Free
6. Click **Advanced** → **Add Environment Variable**:
   - Add your three env vars from Step 2:
     - `MONGO_URL` → your MongoDB connection string
     - `DB_NAME` → `website_db`
     - `CORS_ORIGINS` → `https://yoursite.vercel.app`
7. Click **Deploy**
8. Wait 2-3 minutes for deployment
9. Once done, copy your backend URL (e.g., `https://website-backend.onrender.com`)

---

## Step 5: Deploy Frontend to Vercel (5 minutes)

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** → Choose GitHub
3. Click **Import Project** → Select your repo
4. Configure:
   - **Project Name:** `website`
   - **Framework Preset:** Create React App
   - **Root Directory:** `./frontend`
5. Click **Advanced** → **Environment Variables**:
   - **Key:** `REACT_APP_BACKEND_URL`
   - **Value:** `https://website-backend.onrender.com` (your Render URL)
6. Click **Deploy**
7. Wait 2-3 minutes
8. Click the deployment URL to view your live site

---

## Step 6: Update Backend CORS for Your Vercel URL (2 minutes)

1. Go to [render.com](https://render.com) → Select your backend service
2. Go to **Environment** tab
3. Edit `CORS_ORIGINS`:
   - Replace with your actual Vercel URL (shown after deployment)
   - Example: `https://website-abc123.vercel.app`
4. Click **Save** → Backend will redeploy automatically

---

## Testing Your Live Website

1. Visit your Vercel URL
2. Check that API calls work (open browser DevTools → Network tab)
3. You should see requests going to your Render backend

---

## Troubleshooting

### Backend returning 503 on first request?
- Normal! Render free tier "spins down" after 15 min idle
- First request wakes it up (takes 5-10 sec)
- Subsequent requests are instant

### CORS errors in console?
- Make sure `CORS_ORIGINS` in backend `.env` matches your Vercel URL exactly
- Restart backend after updating

### Can't connect to MongoDB?
- Verify MongoDB connection string is correct
- Check MongoDB Atlas allows connections from Render IP (should be `0.0.0.0/0` in Atlas security)

---

## Next Steps

- Add custom domain (both Vercel & Render support custom domains)
- Set up automatic deploys (GitHub integration is already set up!)
- Monitor backend logs at render.com

Your website is now live! 🚀
