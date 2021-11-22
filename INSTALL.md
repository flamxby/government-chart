# Instructions How to Install and Run Locally
## Prerequisite (required) software
|    Name of software    | Versions |
|:----------------------:|:--------:|
|Python|Using at least version 3.7 or higher|
|Nodejs|Using at least version 16.13.0 or higher|

* **Python** is a programming language that lets you work more quickly and integrate your systems more effectively.
* **Nodejs** is a JavaScript runtime built on Chrome's V8 JavaScript engine.

### How to Check Python Version 
> To check the version installed, open a terminal window and entering the following:
* Linux/MacOS:
    ```
    $ python3 –-version
    ``` 
* Windows: 
    ``` 
    ...\> python ––version
    ```

### How to Check Nodejs Version 
> To check the version installed, open a terminal window and entering the following:
* Linux/MacOS:
    ```
    $ node –-version
    ``` 
* Windows: 
    ``` 
    ...\> node ––version
    ```

## How to clone [Vaccination Report](https://github.com/flamxby/government-chart) project
* Access to a command-line/terminal window.
    * Linux:
        ```
        CTRL-ALT-T or CTRL-ALT-F2
        ``` 
    * Windows: 
        ``` 
        WIN+R > type powershell > Enter/OK or Type in search tap "cmd"
        ```
    * MacOS: 
        ```
        Finder > Applications > Utilities > Terminal
        ```
* Change directory to the directory that the user wants to run the application.
    ```
    cmd> cd directory name
    ```
* Use git clone in the command line. (Link to clone the project `https://github.com/flamxby/government-chart.git`)
    ```
    cmd> git clone https://github.com/flamxby/government-chart.git
    ```

## Steps needed to configure the application for running
* Access to a command-line/terminal window.
* Change directory to the directory that contain `government-chart` folder.
    ```
    cmd> cd government-chart
    ```
* Install the require packages for this project.
    ```
        cmd> npm i
    ``` 
    * **npm** is committed to making JavaScript development elegant, productive, and safe. 

## How to start the application and verify it is working
1. **Clone** [vaccination report](https://github.com/flamxby/government-chart) project to your machine. [*See how to clone the project.*](https://github.com/flamxby/government-chart/blob/master/INSTALL.md#how-to-clone-vaccination-report-project)
2. Follows the [**steps needed to configure the application for running**](https://github.com/flamxby/government-chart/blob/master/INSTALL.md#steps-needed-to-configure-the-application-for-running).
3. Start the application
    * Run the application
        * Linux/MacOS:
            ```
            $ npm start
            ```
        * Windows:
            ```
            ...\> npm start
            ``` 
            * Terminal window will show like this:
                ```   
                Compiled with warnings.

                src/App.js
                Line 6:10:  'hasError' is assigned a value but never used                                                             no-unused-vars
                Line 68:6:  React Hook useEffect has a missing dependency: 'chart'. Either include it or remove the dependency array  react-hooks/exhaustive-deps

                Search for the keywords to learn more about each warning.
                To ignore, add // eslint-disable-next-line to the line before.
                ``` 
    * Chart Window will open up

5. Quit the application
    * Exit the terminal window
        * Linux/MacOS: Press `CTRL + C` button
        * Windows: Press `CTRL + C` button
    
