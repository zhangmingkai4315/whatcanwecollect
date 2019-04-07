package main

import (
	"net/http"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/zhangmingkai4315/whatcanwecollect/api"
)

func main() {
	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowMethods: []string{http.MethodGet},
	}))

	e.File("/", "web/index.html")
	e.GET("/api", api.Version)
	e.GET("/api/headers", api.GetHeaders)
	e.Logger.Fatal(e.Start(":8080"))
}
