package api

import (
	"net/http"

	"github.com/labstack/echo"
)

// Version for application
const version = "v0.0.1"

// Version print version of application
func Version(c echo.Context) error {
	return c.JSON(http.StatusOK, version)
}
