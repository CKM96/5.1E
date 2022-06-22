import {
  AppBar,
  Backdrop,
  Toolbar,
  useScrollTrigger,
} from "@mui/material"
import React from "react"

const scrolledFromTop = () =>
  useScrollTrigger({ disableHysteresis: true, threshold: 0 })

function Header() {
  return (
    <>
      <AppBar
        elevation={scrolledFromTop() ? 4 : 0}
        position="sticky"
        enableColorOnDark
      >
        <Toolbar disableGutters>
          Hello!
        </Toolbar>
      </AppBar>
      <Backdrop open={false} onClick={() => {}} />
    </>
  )
}

export default Header
