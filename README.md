# Create Your Portfolio
Create your own portfolio website by following simple steps:

(Skip to [General Details](#general-details) if you are already familiar with git and react)
* First of all, you should have git and node installed on your computer.
* Now fork this repo.
* Now click on code and copy the URL of your repo.
* Now on your computer open terminal/cmd where you want to copy all the files and run `git clone <copied URL>` to clone the repo.
* Now cd into the new directory (it must be named as 'Portfolio' so run `cd Portfolio`) and run `npm install` to install node modules (React).

## General Details
Open the 'App.js' file inside the 'src' folder and there you'll see an object named `portfolio`, there you should replace the information with your own.

## Projects
Open the 'Project Images' folder inside the 'src' folder and delete the current images and place your own projects' images in it.

Now open the 'App.js' file and find the `//Project Images` section. Now replace the path and name for your images.

Now inside the `portfolio` object, there's another object named `projects`, edit all the details inside it accordingly.

## Logo and Resume
Go to `src/Components/Intro/` and replace the 'logo.png' file with your own image or logo.

In the same folder replace Resume.pdf with your own resume.

## Favicon/Icons
Open the 'public' folder and replace the 'favicon.ico', 'logo192.png' and 'logo512.png' files with your 16x16 ico file, 192x192 png file, and 512x512 png file respectively.

## Colors And Look
You can also change the website's look and make it totally yours. Simply find the `//Color Palette` section in the 'App.js' file and edit the colors according to yourself.

To edit hover color, transition duration, etc. you should edit the 'App.css' file which is also inside the 'src' folder.

## Contact
You can hide the contact option from the navigation bar by setting `contact` to `false` in the `portfolio` object.

## Test and Deploy
Use the `npm start` command to test your website live while editing.

To deploy the website on GitHub, Open your repo settings and inside pages>source select the
'gh-pages' branch and click on save, Now copy the given URL and open the 'package.json' file and replace the 'homepage' URL with your copied URL, Now use the `npm run deploy` command to deploy your website with your changes.
