@echo off
SET name=StudentNote
	echo.
	echo        #######################################
	echo        ###                                  ##
	echo        ###   StudentNote WebApp Installer   ##
	echo        ###                                  ##
	echo        #######################################
	echo.
	echo.
	echo _________________________________________________________
	echo.
IF EXIST node_modules (
	echo [%name%]: The Angular2 Modules are already installed!
	echo [%name%]: Starting WebApp ...
	echo.
	ng serve -o
) ELSE (
	echo [%name%]: The Angular2 Modules aren't installed!
	echo [%name%]: Start installing Modules ...
	echo.
	npm install
	clear
	echo [%name%]: The Angular2 Modules are installed sucessfully!
	echo [%name%]: Starting WebApp ...
	ng serve -o
)