# OPE WE ELOPED

[![Netlify Status](https://api.netlify.com/api/v1/badges/5166fd42-34fe-4e8f-9b82-4a44d094c142/deploy-status)](https://app.netlify.com/sites/opeweeloped/deploys)

## Stories Section

This section uses the react-hook-form react library to gather the form data and pass it up the chain. I use Monday.com to gather the information. You could eaisly use sendgrid instead to simply email the submissions to yourself instead. I believe monday has a free version.

## Environment Variables

You should have a file called '.env' on your local server. Make sure this does NOT get uploaded to github and add it to your .gitignore. Inside that file there should be the following:

- SPOTIFY_CLIENT_ID
- SPOTIFY_CLIENT_SECRET
- SPOTIFY_REFRESH_TOKEN
- NEXT_PUBLIC_API_MONDAY_BOARD_STORIES
- NEXT_PUBLIC_API_MONDAY_AUTH
