# node-starter-template
Node project starter template.

##Eslint configuration steps
* **How would you like to use Eslint?**  
  *To check syntax, find problems, and enforce code style.*  
* **Typpes of modules your project use?**  
  *CommonJs*  
* **JS framework?** (React? vue?)  
  *None*  
* **Typescript?**  
  *No*  
* **Where does your code run?**  
  *Node*  
* **Define styles for you project:**  
  *Answer questions about you style*  
* **What format do you want your config file to be in?**  
  *Json*  
* **What style of indentation do you use?**  
  *Space*  
* **What quotes do you use for strings?**  
  *single*  
* **What line endings do you use?**  
  *windows*  
* **Would you like to install them now?**  
  *Yes*  
* **Which package manager do you want to use?**  
  *npm*

Note about getting rid of semicolon (;): Javascript has this ability. Without an extra syntax, code will be cleaner (think about the cleanness of Python code). Only use it, where it is necessary; unless we can start to omit it from now.


## Notes
* To run a npm package command directly from command
  ```
  node_modules\\.bin\\<command> <argument> // e.g.: 
  ```

  Example
  ```
  node_modules\\.bin\\nodemon index.js
  ```
  But when added in `npm script`, full path is not needed, only the `command agrument` is sufficient.  
  N.b. if full path command is not working, check your command application, try using simple command line/shell application.
