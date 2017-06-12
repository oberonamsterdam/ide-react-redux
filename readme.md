# File and live templates for React and Redux  

Quickly set up React components, redux reducers, redux [flow action definitions](https://flow.org/en/docs/frameworks/redux/), and redux action creators.  
Also includes a file template for use with [redux-rehydrate](https://github.com/rt2zz/redux-persist) which handles the `REHYDRATE` action.    
Works with PhpStorm, WebStorm, IntelliJ, etc.

#Overview

##File templates:  
Create a new file and any of the following 4 will show up:

- React Component  
- React Stateless Component  
- Redux state
- Redux state with rehydration _(same as redux state, but adds boilerplate code for handling rehydrations)_

##Live templates
Available commands:  
* `ra` - Redux action  
* `rac` - Redux action creator

#Automatic install

Download [`settings.jar`](https://raw.githubusercontent.com/oberon-nl/ide-react-redux/master/settings.jar) from this repo and open it with IDE (File > Import Settings...).  

#Manual install

### File templates
Put them here:
`~/Library/Preferences/[IDE version]/fileTemplates`

When creating new file, select one of the templates. Omit file extension in file name.

### Live templates
Put them here: 
`~/Library/Preferences/[IDE version]/templates`
