package api

import (
	"net/http"

	"github.com/labstack/echo"
)

// GetHeaders print headers of query
func GetHeaders(c echo.Context) error {
	headers := c.Request().Header
	return c.JSON(http.StatusOK, headers)
}
