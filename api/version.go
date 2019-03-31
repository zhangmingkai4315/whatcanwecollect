package api

import (
	"net/http"

	"github.com/labstack/echo"
)

// Version for application
const version = "v0.0.1"

func Version(c echo.Context) error {
	return c.JSON(http.StatusOK, version)
}
