package main

import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/zhangmingkai4315/whatcanwecollect/api"
)

func main() {
	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.File("/", "web/index.html")
	e.GET("/api", api.Version)
	e.Logger.Fatal(e.Start(":8080"))
}
