# Parcel fast-refresh bug repro

Please ignore the F# files that generated the JS files

- Serving project locally works (`npm run start:parcel`)
- Change something inside `Components.fs.js` or `Main.fs.js`
- Nohting changes, even the browser doesn't reload
- No errors in the console