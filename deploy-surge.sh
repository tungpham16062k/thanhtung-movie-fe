# Build reactjs app with production mode
npm run build

# Move to build folder
cd build

# Clone index.html to 200.html
cp index.html 200.html

# Start deploying via Surge
surge . thanhtung-movie-app.surge.sh