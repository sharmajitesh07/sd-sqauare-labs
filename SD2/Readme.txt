This project shows a simple employee app done for SD2 Labs assignment.

Points to note
1) Have two versions of HTML
	- One for Dev(index.html loads multiple css and js)
	- Another for production (index_production.html loads one css and js only)

2) Have configured grunt tasks with the project which could be used for the generations of production files. Steps in build
	- Clean any earlier existing build folder
	- jslint the js code
	- minify the js code
	- minify the css code

3) Though the build is already done,
To run the build again, open cmd and run following commands
	- npm install(generates node_modules)
	- grunt build

4) To show tooltip used jquery ui widget

5) The number of boxes has been stored in sessionStorage as per the req. To test sessionStorage in IE please use a localhost url to launch the page, else due to lack of sessionstorage support the fallback would be a normal count being recorded and not maintained on page refresh

6) Tried to keep the page responsive

7) Have tested in latest versions of Chrome and IE. Should mostly work in other browsers also


