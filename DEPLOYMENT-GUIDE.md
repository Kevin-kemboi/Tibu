# 🚀 Complete Deployment Guide for Tibu Pharmacy

## Problem: ERR_BLOCKED_BY_CLIENT

Your Vercel deployment can't connect to `http://127.0.0.1:4000` because:
- 127.0.0.1 is localhost (your computer only)
- Ad blockers block local API calls
- Production needs a public backend URL

## ✅ Solution: Deploy Backend to Render (FREE)

### Step 1: Prepare Backend for Deployment

Your backend is currently in the `backend/` folder. We need to make it deployment-ready.

#### Create a new `backend/package.json` if needed:

```json
{
  "name": "tibu-pharmacy-backend",
  "version": "1.0.0",
  "description": "Tibu Pharmacy Backend API",
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js",
    "dev": "node src/server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "morgan": "^1.10.0",
    "uuid": "^9.0.0"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
```

### Step 2: Deploy Backend to Render

1. **Go to Render**: https://render.com
2. **Sign up/Login** (use GitHub account)
3. **Click "New +"** → **"Web Service"**
4. **Connect GitHub repository**: `Kevin-kemboi/Tibu`
5. **Configure:**
   - **Name**: `tibu-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: `Free`
6. **Add Environment Variables** (if any)
7. **Click "Create Web Service"**

Wait 5-10 minutes for deployment. You'll get a URL like:
```
https://tibu-backend.onrender.com
```

### Step 3: Update Frontend Environment Variable

Once backend is deployed, update your Vercel environment variable:

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Select your `tibu` project**
3. **Go to Settings** → **Environment Variables**
4. **Edit** `VITE_BACKEND_URL`
5. **Change value to**: `https://tibu-backend.onrender.com`
6. **Save**

### Step 4: Redeploy Frontend

1. In Vercel Dashboard
2. Go to **Deployments**
3. Click **"..."** on latest deployment
4. Click **"Redeploy"**

---

## 🚀 Alternative: Quick Deploy (Railway)

### Railway Deployment (Even Faster)

1. **Go to Railway**: https://railway.app
2. **Login with GitHub**
3. **New Project** → **Deploy from GitHub repo**
4. **Select**: `Kevin-kemboi/Tibu`
5. **Add Service** → **Select `backend` folder**
6. **Settings**:
   - Root Directory: `/backend`
   - Start Command: `npm start`
7. **Generate Domain** (under Settings → Networking)

You'll get: `https://your-app.up.railway.app`

---

## 🛠️ Alternative: Use Mock Data (Temporary)

If you want to test Vercel deployment without backend:

### Option A: Disable API calls temporarily

Update `src/context/ShopContext.jsx` to use mock data instead of API.

### Option B: Use YMGS Backend (Original)

Update environment variable to use the original backend:
```
VITE_BACKEND_URL=https://ymgs-backend.onrender.com
```

---

## 📋 Complete Deployment Checklist

### Backend Deployment:
- [ ] Backend code is working locally
- [ ] `package.json` has correct scripts
- [ ] Deployed to Render/Railway
- [ ] Backend URL is accessible (test in browser)
- [ ] CORS configured to allow Vercel domain

### Frontend Deployment:
- [ ] Environment variable `VITE_BACKEND_URL` updated
- [ ] Points to deployed backend URL
- [ ] Redeployed on Vercel
- [ ] Test the live site

---

## 🎯 Testing Your Deployment

### Test Backend:
```bash
curl https://your-backend.onrender.com/api/product/user/list
```

Should return JSON with products.

### Test Frontend:
1. Visit your Vercel URL
2. Open DevTools → Console
3. Check for API requests
4. Should see requests to your backend URL (not 127.0.0.1)

---

## ⚠️ Important Notes

### Render Free Tier:
- Spins down after 15 min of inactivity
- First request after sleep takes 30-50 seconds
- Perfect for testing/demo

### Railway Free Tier:
- $5 free credits per month
- Faster than Render
- No sleep time

### Production Recommendations:
- Use paid hosting for production
- Set up proper database (not mock data)
- Enable SSL/HTTPS
- Configure CDN
- Set up monitoring

---

## 🆘 Troubleshooting

### Error: Still getting ERR_BLOCKED_BY_CLIENT

**Solution 1**: Clear browser cache and cookies
```
Ctrl + Shift + Delete → Clear cache
```

**Solution 2**: Disable ad blockers
- uBlock Origin
- AdBlock Plus
- Brave Shields

**Solution 3**: Try different browser
- Chrome (Incognito mode)
- Firefox
- Safari

### Error: CORS policy blocked

Update backend CORS in `backend/src/server.js`:
```javascript
app.use(cors({
  origin: ['https://tibu.vercel.app', 'https://tibu-*.vercel.app'],
  credentials: true
}));
```

### Error: 404 Not Found from backend

- Check backend is running
- Verify URL is correct
- Test backend endpoint directly in browser

---

## 🎉 Success Checklist

When everything works:
- ✅ Backend deployed and accessible
- ✅ Frontend deployed on Vercel
- ✅ No console errors
- ✅ Products loading
- ✅ Cart working
- ✅ No ERR_BLOCKED_BY_CLIENT errors

---

## 📞 Need Help?

If stuck:
1. Check backend logs on Render/Railway
2. Check Vercel deployment logs
3. Test backend URL in browser
4. Check browser console for errors

**Your URLs will be:**
- Frontend: `https://tibu.vercel.app`
- Backend: `https://tibu-backend.onrender.com`

Both need to be working for the app to function properly!
