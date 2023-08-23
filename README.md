# AngularCustomDirectiveWhatIsCustomDirective
# how to create custom directive in angular
# what is custom directive in angular
# angular-custom-directive-what-is-custom-directive

<pre>
<strong>1. if you want to setup this project on your local machine, please follow below steps</strong>
<strong>2. you can take a pull from github URL - </strong> </pre>
[Code Clone From Here](https://github.com/rohitash-eng/angular-custom-directive-what-is-custom-directive)
<pre>you can check version to view this screenshort</pre>
[Version Screenshort](https://github.com/rohitash-eng/angular-custom-directive-what-is-custom-directive/blob/main/src/assets/images/version.png)
<pre>
<strong>3. After cloning go to angular-custom-directive-what-is-custom-directive folder and
 install the dependencies with command `npm install`</strong>

<strong>4. If you are facing some issue to install your dependencies, 
try to run the `npm install --force` command. still not able to installed 
then check your node and angular version</strong>
<strong>5. If successfully installing the dependencies, you can run 
the project `ng serve`, you can test it, you can change the code as you want</strong>

what I did:- 
First:-  Create the Directive:
ng generate directive directive/my-custom-directive

Add the Directive to Module:
declarations: [AppComponent, MyCustomDirectiveDirective], 

then apply the directive selector in html
<div appMyCustomDirective>
  Click me to change my background color!
</div>
directive is working


<strong>6. Thanks!! Please suggest anything you want so I can improve</strong>
</pre>

