# Deploying to Vercel

This document provides step-by-step instructions on how to deploy the Sri Lanka University Eligibility Checker application to Vercel.

## Prerequisites

- A Vercel account ([Sign up here](https://vercel.com/signup) if you don't have one)
- Git installed on your machine
- Node.js and npm installed

## Deployment Steps

### 1. Prepare Your Repository

First, make sure your code is in a Git repository:

1. If you're starting from this Replit project, you can export it to GitHub:
   - Create a new GitHub repository
   - Push your code to the repository

### 2. Deploy to Vercel

#### Option 1: Using the Vercel Dashboard

1. Log in to your Vercel account
2. Click "Add New" and select "Project"
3. Import your Git repository
4. Configure the project:
   - Framework Preset: Vite
   - Build Command: `node vercel-build.js`
   - Output Directory: `dist`
   - Install Command: `npm install`
   - Development Command: `npm run dev`
5. Click "Deploy"

#### Option 2: Using the Vercel CLI

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from your project directory:
   ```bash
   vercel
   ```

4. Follow the CLI prompts to complete the deployment

## Configuration Files

This project includes specific files for Vercel deployment:

- `vercel.json`: Configuration for Vercel deployment
- `vite.vercel.config.js`: A modified Vite configuration for Vercel
- `vercel-build.js`: A custom build script for Vercel

## Post-Deployment

After successful deployment:

1. Vercel will provide you with a URL for your deployed application
2. You can set up a custom domain through the Vercel dashboard if needed
3. Each time you push changes to your repository, Vercel will automatically redeploy your application

## Troubleshooting

If you encounter any issues during deployment:

1. Check the build logs in the Vercel dashboard
2. Make sure all paths and configurations are correct
3. Verify that the application works locally before deploying

For more help, refer to the [Vercel Documentation](https://vercel.com/docs).