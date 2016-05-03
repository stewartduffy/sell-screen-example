#Sell Screen Example

Simple example of a sell screen for a POS app.

##Technologies used:
- Gulp for build & automation
- BrowserSync for localserver, livereload & watch tasks to compile SCSS
- SCSS / SMACSS: I used compass as to take advantage of the reset & CSS3 mixins
- AngularJS: Good js MV* framework, and the brief stated I need to
- SublimeLinter: Used as editor plugin to run JSHINT on any JS file when I save. This prevents stupid JS errors.  

### Installation/Usage:

**Prerequisites**: 
- Node: http://nodejs.org/download/
- Ruby: https://www.ruby-lang.org/en/documentation/installation/
- Compass: http://compass-style.org/install/

**Step 1**: Clone this repo
```bash
$ git clone https://github.com/stewartduffy/sell-screen-example.git
```

**Step 3**: Install BrowserSync

```bash
$ npm install -g browser-sync
```

**Step 3**: Install dependencies

Make sure you are in root of project

```bash
$ npm install
```

**Step 4**: Run the example
```bash
$ npm start
```

**Step 5**: View project

BrowserSync should open http://localhost:3000/

**Step 6**: Live project

~~http://stewartduffy.com/examples/pos~~
Does not live there anymore. Clone repo to see...
